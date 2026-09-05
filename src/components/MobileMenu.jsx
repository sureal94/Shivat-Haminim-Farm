import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { NavLink } from 'react-router-dom'
import { Globe, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import Button from './Button'

export default function MobileMenu({ open, onClose }) {
  const { content: { navLinks }, t, toggleLanguage } = useLanguage()
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!open) return undefined

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [open, onClose])

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] lg:hidden"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-forest/50"
            aria-label={t('closeMenu')}
            onClick={onClose}
          />
          <motion.nav
            id="mobile-menu"
            aria-label={t('mobileNav')}
            className="absolute inset-0 flex h-dvh w-full flex-col bg-cream px-5 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))]"
            initial={reduce ? false : { y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduce ? { y: 0, opacity: 1 } : { y: 16, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-between gap-3 pb-4">
              <p className="font-display text-lg font-semibold text-forest">{t('menu')}</p>
              <button
                type="button"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-forest shadow-soft"
                aria-label={t('closeMenu')}
                onClick={onClose}
              >
                <X size={24} />
              </button>
            </div>

            <ul className="flex flex-1 flex-col gap-1 overflow-y-auto overscroll-contain">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `block rounded-2xl px-4 py-3.5 text-lg font-medium ${
                        isActive ? 'bg-white text-forest' : 'text-ink'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => { toggleLanguage(); onClose() }}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-forest text-sm font-semibold text-forest"
                aria-label={t('switchLanguage')}
              >
                <Globe size={18} aria-hidden="true" /> {t('languageOption')}
              </button>
              <Button to="/donate" variant="terracotta" className="w-full" onClick={onClose}>
                {t('donate')}
              </Button>
            </div>
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}
