import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './translations'

const STORAGE_KEY = 'shivat-haminim-language'
const LanguageContext = createContext(null)

function getInitialLanguage() {
  if (typeof window === 'undefined') return 'en'
  try {
    return window.localStorage.getItem(STORAGE_KEY) === 'he' ? 'he' : 'en'
  } catch {
    return 'en'
  }
}

function getValue(object, path) {
  return path.split('.').reduce((value, key) => value?.[key], object)
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)
  const direction = language === 'he' ? 'rtl' : 'ltr'

  useEffect(() => {
    const root = document.documentElement
    root.lang = language
    root.dir = direction
    document.body.dir = direction
    try {
      window.localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // Language switching still works when storage is unavailable.
    }
  }, [language, direction])

  const value = useMemo(() => {
    const dictionary = translations[language]
    return {
      language,
      direction,
      content: dictionary.content,
      projects: dictionary.projects,
      galleryItems: dictionary.galleryItems,
      galleryFilters: dictionary.galleryFilters,
      t: (key, variables = {}) => {
        const translated = getValue(dictionary.ui, key) ?? getValue(translations.en.ui, key) ?? key
        if (typeof translated !== 'string') return translated
        return Object.entries(variables).reduce(
          (text, [name, replacement]) => text.replaceAll(`{{${name}}}`, replacement),
          translated,
        )
      },
      toggleLanguage: () => setLanguage((current) => (current === 'en' ? 'he' : 'en')),
    }
  }, [language, direction])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
