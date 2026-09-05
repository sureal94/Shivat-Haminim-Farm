import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { navLinks, site } from '../data/siteContent'
import Logo from './Logo'
import Button from './Button'

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="brightness-110" />
          <p className="mt-5 text-sm leading-relaxed text-cream/80 max-w-xs">
            {site.shortMission}
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg font-semibold mb-4">Explore</h2>
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
          <h2 className="font-display text-lg font-semibold mb-4">Visit</h2>
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
              <a href={`tel:${site.contact.phoneTel}`} className="hover:text-sand">
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="shrink-0 mt-0.5" aria-hidden="true" />
              <a href={`mailto:${site.contact.email}`} className="hover:text-sand break-all">
                {site.contact.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-lg font-semibold mb-4">Support the farm</h2>
          <p className="text-sm text-cream/80 mb-5">
            Help us grow accessible gardens, meaningful work, and a community where everyone belongs.
          </p>
          <Button to="/donate" variant="cream">Donate</Button>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-cream/70">
          <p>© {new Date().getFullYear()} {site.name}. {site.hebrewName}.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-sand">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-sand">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
