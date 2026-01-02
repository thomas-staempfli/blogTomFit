import BlogCard from '@/components/BlogCard'
import { getAllPosts } from '@/lib/posts'
import { cookies } from 'next/headers'
import { normalizeLang } from '@/lib/i18n'
import { t } from '@/lib/translations'

export const dynamic = 'force-dynamic'

export default function Home() {
  const lang = normalizeLang(cookies().get('tomfit_lang')?.value)
  const dict = t(lang)
  const posts = getAllPosts(lang)

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Header Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-tomfit-950 mb-3">TomFit Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl">{dict.homeSubtitle}</p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} lang={lang} />
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">{dict.noArticles}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
