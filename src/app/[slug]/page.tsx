import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getPostBySlug, formatDate } from '@/lib/posts'
import { cookies } from 'next/headers'
import { normalizeLang } from '@/lib/i18n'
import { t } from '@/lib/translations'

export const dynamic = 'force-dynamic'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
  const lang = normalizeLang(cookies().get('tomfit_lang')?.value)
  const post = getPostBySlug(params.slug, lang)
  if (!post) return { title: 'Post Not Found' }
  return { title: `${post.title} | TomFit Blog`, description: post.excerpt }
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function linkifyHtml(input: string) {
  const anchors: string[] = []

  // 1) Markdown links: [label](https://...)
  let out = input.replace(/\[([^\]]+)]\((https?:\/\/[^\s)]+)\)/g, (_m, label: string, url: string) => {
    const i = anchors.length
    anchors.push(
      `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" class="text-tomfit-600 hover:text-tomfit-700 underline">${escapeHtml(label)}</a>`,
    )
    return `%%ANCHOR_${i}%%`
  })

  // 2) Bare URLs: https://...
  out = out.replace(/https?:\/\/[^\s<]+/g, (rawUrl: string) => {
    // Avoid re-linking inside placeholders
    if (rawUrl.startsWith('%%ANCHOR_')) return rawUrl

    const trimmed = rawUrl.replace(/[\]\)\}\.,;:!?]+$/g, '')
    const trailing = rawUrl.slice(trimmed.length)

    return (
      `<a href="${escapeHtml(trimmed)}" target="_blank" rel="noopener noreferrer" class="text-tomfit-600 hover:text-tomfit-700 underline">${escapeHtml(trimmed)}</a>` +
      trailing
    )
  })

  // 3) Restore markdown-link placeholders
  out = out.replace(/%%ANCHOR_(\d+)%%/g, (_m, idx: string) => anchors[Number(idx)] ?? '')

  return out
}

export default function ArticlePage({ params }: Props) {
  const lang = normalizeLang(cookies().get('tomfit_lang')?.value)
  const dict = t(lang)
  const post = getPostBySlug(params.slug, lang)
  if (!post) notFound()

  const renderContent = (content: string) => {
    const nodes: React.ReactNode[] = []
    const lines = content.split('\n')

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]

      const isBlank = line.trim() === ''
      if (isBlank) {
        continue
      }

      if (line.startsWith('# ')) {
        nodes.push(
          <h1 key={i} className="text-3xl font-display font-bold text-tomfit-950 mt-8 mb-4">
            {line.slice(2)}
          </h1>,
        )
        continue
      }

      if (line.startsWith('## ')) {
        nodes.push(
          <h2 key={i} className="text-2xl font-display font-bold text-tomfit-950 mt-8 mb-4">
            {line.slice(3)}
          </h2>,
        )
        continue
      }

      if (line.startsWith('### ')) {
        nodes.push(
          <h3 key={i} className="text-xl font-display font-semibold text-tomfit-950 mt-6 mb-3">
            {line.slice(4)}
          </h3>,
        )
        continue
      }

      if (line.startsWith('- ')) {
        const html = linkifyHtml(line.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'))
        nodes.push(
          <li key={i} className="ml-6 text-gray-700 leading-relaxed list-disc">
            <span dangerouslySetInnerHTML={{ __html: html }} />
          </li>,
        )
        continue
      }

      if (line.match(/^\d+\.\s/)) {
        const html = linkifyHtml(line.replace(/^\d+\.\s/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'))
        nodes.push(
          <li key={i} className="ml-6 text-gray-700 leading-relaxed list-decimal">
            <span dangerouslySetInnerHTML={{ __html: html }} />
          </li>,
        )
        continue
      }

      const html = linkifyHtml(line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'))

      nodes.push(
        <p
          key={i}
          className="text-gray-700 leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: html }}
        />,
      )
    }

    return nodes
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[360px] max-h-[500px] bg-gray-50">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-contain"
          priority
        />
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <header className="mb-8">
            <h1 className="font-display text-2xl md:text-4xl font-bold text-tomfit-950 leading-tight mb-5">
              {post.title}
            </h1>
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-1 ring-gray-200 flex-shrink-0">
                <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
              </div>
              <div>
                <p className="text-tomfit-950 font-semibold">{post.author.name}</p>
                <p className="text-gray-500 text-sm">{formatDate(post.date, lang)}</p>
              </div>
            </div>
          </header>
          {post.introImage && (
            <div className="mb-8">
              <Image
                src={post.introImage}
                alt={post.title}
                width={1200}
                height={675}
                className="w-full h-auto rounded-xl border border-gray-100"
              />
            </div>
          )}
          <article className="prose prose-lg max-w-none">{renderContent(post.content)}</article>

          {/* Author Box */}
          <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
            <div className="flex items-start gap-5">
              <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-1">{dict.writtenBy}</p>
                <h3 className="font-display text-lg font-bold text-tomfit-950 mb-2">{post.author.name}</h3>
              </div>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-10 text-center">
            <Link href="/" className="text-tomfit-500 hover:text-tomfit-600 font-medium">
              {dict.backToAll}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
