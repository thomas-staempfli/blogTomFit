import Link from 'next/link'
import Image from 'next/image'
import { BlogPost, formatDate } from '@/lib/posts'
import type { Lang } from '@/lib/i18n'

export default function BlogCard({ post, lang }: { post: BlogPost; lang?: Lang }) {
  return (
    <Link href={`/${post.slug}`} className="group block">
      <article className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 card-hover h-full flex flex-col">
        <div className="relative h-48 overflow-hidden bg-gray-50">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex items-center space-x-2 text-xs text-gray-400 mb-2">
            <span>{formatDate(post.date, lang)}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h3 className="font-display text-lg font-bold text-tomfit-950 mb-2 group-hover:text-tomfit-500 transition-colors leading-snug line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">{post.excerpt}</p>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
            <div className="flex items-center space-x-2">
              <div className="relative w-7 h-7 rounded-full overflow-hidden">
                <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
              </div>
              <span className="text-xs font-medium text-gray-600">{post.author.name}</span>
            </div>
            <svg
              className="w-4 h-4 text-tomfit-500 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  )
}
