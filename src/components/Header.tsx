'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useMemo, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { normalizeLang, LANGS, type Lang } from '@/lib/i18n'
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

const languageData: Record<Lang, { flag: string; name: string }> = {
  en: { flag: '🇬🇧', name: 'English' },
  de: { flag: '🇩🇪', name: 'Deutsch' },
  pl: { flag: '🇵🇱', name: 'Polski' },
}

export default function Header() {
  const router = useRouter()
  const [lang, setLang] = useState<Lang>('en')
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setLang(normalizeLang(getCookie('tomfit_lang')))
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const dict = useMemo(() => t(lang), [lang])
  const currentLang = languageData[lang]

  const selectLang = (newLang: Lang) => {
    setLang(newLang)
    setCookie('tomfit_lang', newLang)
    setIsOpen(false)
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
            {/* Language Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Change language"
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                className="h-11 px-3 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors flex items-center gap-2 text-sm font-medium text-gray-700"
              >
                <span className="text-xl">{currentLang.flag}</span>
                <svg 
                  className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                  {LANGS.map((langOption) => {
                    const { flag, name } = languageData[langOption]
                    const isSelected = langOption === lang
                    return (
                      <button
                        key={langOption}
                        type="button"
                        onClick={() => selectLang(langOption)}
                        className={`w-full px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 transition-colors ${
                          isSelected ? 'bg-tomfit-50 text-tomfit-600' : 'text-gray-700'
                        }`}
                      >
                        <span className="text-xl">{flag}</span>
                        <span className="font-medium">{name}</span>
                        {isSelected && (
                          <svg className="w-4 h-4 ml-auto text-tomfit-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>

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
