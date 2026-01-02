import type { Lang } from '@/lib/i18n'

type Dict = {
  subscribe: string
  homeSubtitle: string
  noArticles: string
  writtenBy: string
  backToAll: string
}

const DICT: Record<Lang, Dict> = {
  en: {
    subscribe: 'Subscribe',
    homeSubtitle: 'Explore our collection of science based insights into strength training.',
    noArticles: 'No articles yet. Check back soon!',
    writtenBy: 'Written by',
    backToAll: '← Back to all articles',
  },
  de: {
    subscribe: 'Abonnieren',
    homeSubtitle: 'Entdecke wissenschaftlich fundierte Erkenntnisse rund um Krafttraining.',
    noArticles: 'Noch keine Artikel. Schau bald wieder vorbei!',
    writtenBy: 'Geschrieben von',
    backToAll: '← Zurück zu allen Artikeln',
  },
  pl: {
    subscribe: 'Subskrybuj',
    homeSubtitle: 'Poznaj oparte na nauce spostrzeżenia dotyczące treningu siłowego.',
    noArticles: 'Brak artykułów. Wróć wkrótce!',
    writtenBy: 'Autor',
    backToAll: '← Wróć do wszystkich artykułów',
  },
}

export function t(lang: Lang): Dict {
  return DICT[lang]
}
