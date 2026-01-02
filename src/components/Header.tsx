'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { normalizeLang, nextLang, type Lang } from '@/lib/i18n'
import { t } from '@/lib/translations'

function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined
  const match = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)'))
  return match ? decodeURIComponent(match[1]) : undefined
}

function setCookie(name: string, value: string) {
  // 1 year
  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${60 * 60 * 24 * 365}`
}

export default function Header() {
  const router = useRouter()
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    setLang(normalizeLang(getCookie('tomfit_lang')))
  }, [])

  const dict = useMemo(() => t(lang), [lang])
  const flag = lang === 'de' ? '🇩🇪' : lang === 'pl' ? '🇵🇱' : '🇬🇧'

  const cycleLang = () => {
    const next = nextLang(lang)
    setLang(next)
    setCookie('tomfit_lang', next)
    router.refresh()
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image 
              src="/logo.png" 
              alt="TomFit" 
              width={140} 
              height={50}
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={cycleLang}
              aria-label="Change language"
              title="Change language"
              className="w-11 h-11 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors flex items-center justify-center text-xl"
            >
              {flag}
            </button>

            {/* Subscribe Button */}
            <Link
              href="/subscribe"
              className="px-6 py-2.5 bg-tomfit-500 hover:bg-tomfit-600 text-white font-medium rounded-lg transition-colors duration-200"
            >
              {dict.subscribe}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
