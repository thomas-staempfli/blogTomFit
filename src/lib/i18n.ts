export type Lang = 'en' | 'de' | 'pl'

export const LANGS: Lang[] = ['en', 'de', 'pl']

export function normalizeLang(value: string | undefined): Lang {
  if (!value) return 'en'
  const v = value.toLowerCase()
  if (v === 'de') return 'de'
  if (v === 'pl') return 'pl'
  return 'en'
}

export function nextLang(current: Lang): Lang {
  const idx = LANGS.indexOf(current)
  return LANGS[(idx + 1) % LANGS.length] ?? 'en'
}
