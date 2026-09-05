import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Globe, Menu, X } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import Logo from './Logo'
import Button from './Button'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const { content: { navLinks }, t, toggleLanguage } = useLanguage()
  const [compact, setCompact] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const onResize = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        compact ? 'bg-cream/95 border-sand/70 backdrop-blur-md' : 'bg-cream/90 border-transparent backdrop-blur-sm'
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 transition-all duration-300 ${
          compact ? 'py-2' : 'py-3'
        }`}
      >
        <Logo compact={compact} />

        <nav className="hidden lg:flex items-center gap-1" aria-label={t('primaryNav')}>
          {navLinks
            .filter((link) => link.to !== '/donate')
            .map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full px-3 py-2 text-sm font-medium transition ${
                    isActive ? 'text-forest bg-white' : 'text-muted hover:text-forest'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button to="/donate" variant="terracotta" className="hidden sm:inline-flex px-5">
            {t('donate')}
          </Button>
          <button
            type="button"
            onClick={toggleLanguage}
            className="hidden lg:inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-semibold text-forest hover:bg-white"
            aria-label={t('switchLanguage')}
          >
            <Globe size={18} aria-hidden="true" />
            <span>{t('languageOption')}</span>
          </button>
          <button
            type="button"
            className="lg:hidden inline-flex h-12 w-12 items-center justify-center rounded-full text-forest hover:bg-white"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t('closeMenu') : t('openMenu')}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
