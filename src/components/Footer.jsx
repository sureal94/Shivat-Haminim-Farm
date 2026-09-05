import { Link } from 'react-router-dom'
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import Logo from './Logo'
import Button from './Button'

export default function Footer() {
  const { content: { navLinks, site }, t } = useLanguage()
  const socialIcons = { Instagram, Facebook }

  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="brightness-110" />
          <p className="mt-5 text-sm leading-relaxed text-cream/80 max-w-xs">
            {site.shortMission}
          </p>
          <div className="mt-5 flex items-center gap-2">
            {site.social.map((profile) => {
              const Icon = socialIcons[profile.name]
              return (
                <a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-cream transition hover:border-sand hover:bg-white/10 hover:text-sand"
                  aria-label={`${profile.name} (${t('opensNewTab')})`}
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              )
            })}
          </div>
        </div>
        <div>
          <h2 className="font-display text-lg font-semibold mb-4">{t('explore')}</h2>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-sand transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-lg font-semibold mb-4">{t('visit')}</h2>
          <ul className="space-y-3 text-sm text-cream/85">
            <li className="flex gap-3">
              <MapPin size={18} className="shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                {site.location.cityHebrew} · {site.location.city}
                <br />
                {site.location.region}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="shrink-0 mt-0.5" aria-hidden="true" />
              <a dir="ltr" href={`tel:${site.contact.phoneTel}`} className="hover:text-sand">
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="shrink-0 mt-0.5" aria-hidden="true" />
              <a dir="ltr" href={`mailto:${site.contact.email}`} className="hover:text-sand break-all">
                {site.contact.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-lg font-semibold mb-4">{t('supportFarm')}</h2>
          <p className="text-sm text-cream/80 mb-5">
            {t('supportText')}
          </p>
          <Button to="/donate" variant="cream">{t('donate')}</Button>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-cream/70">
          <p>© {new Date().getFullYear()} {site.name}. {site.hebrewName}.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-sand">{t('privacy')}</Link>
            <Link to="/terms" className="hover:text-sand">{t('terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
