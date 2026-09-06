import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import AccessibilityWidget from './AccessibilityWidget'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'
import { useLanguage } from '../i18n/LanguageContext'

export default function Layout() {
  const { t } = useLanguage()
  const reduceMotion = usePrefersReducedMotion()
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const behavior = reduceMotion ? 'auto' : 'smooth'
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior, block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash, reduceMotion])

  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="skip-link">{t('skip')}</a>
      <Navbar />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  )
}
