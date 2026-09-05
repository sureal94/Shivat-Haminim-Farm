import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'
import FadeIn from '../components/FadeIn'
import { farmImages } from '../data/images'
import { useLanguage } from '../i18n/LanguageContext'

export default function Contact() {
  const { content: { contact, seo, site }, t } = useLanguage()
  return (
    <>
      <Seo title={seo.contact.title} description={seo.contact.description} path="/contact" />
      <PageHero heading={contact.hero.heading} text={contact.hero.text} image={farmImages.welcome} />

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold text-forest">{t('contactHeading')}</h2>
            <p className="mt-4 text-muted leading-relaxed">
              {site.location.cityHebrew} · {site.location.city}
              <br />
              {site.location.region}
            </p>

            <ul className="mt-8 space-y-5">
              <li>
                <a
                  href={`tel:${site.contact.phoneTel}`}
                  className="flex items-start gap-4 rounded-2xl bg-white border border-sand/70 p-4 hover:border-forest/30 transition"
                >
                  <Phone className="text-forest shrink-0 mt-0.5" size={22} aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-semibold text-earth">{t('phone')}</span>
                    <span dir="ltr" className="text-forest font-medium">{site.contact.phoneDisplay}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={site.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-2xl bg-white border border-sand/70 p-4 hover:border-forest/30 transition"
                >
                  <MessageCircle className="text-forest shrink-0 mt-0.5" size={22} aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-semibold text-earth">{t('whatsapp')}</span>
                    <span dir="ltr" className="text-forest font-medium">{site.contact.whatsappDisplay}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="flex items-start gap-4 rounded-2xl bg-white border border-sand/70 p-4 hover:border-forest/30 transition"
                >
                  <Mail className="text-forest shrink-0 mt-0.5" size={22} aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-semibold text-earth">{t('email')}</span>
                    <span dir="ltr" className="text-forest font-medium break-all">{site.contact.email}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-4 rounded-2xl bg-white border border-sand/70 p-4">
                <MapPin className="text-forest shrink-0 mt-0.5" size={22} aria-hidden="true" />
                <span>
                  <span className="block text-sm font-semibold text-earth">{t('address')}</span>
                  <span className="text-ink">{site.contact.address}</span>
                </span>
              </li>
            </ul>

            <div className="mt-8 overflow-hidden rounded-3xl border border-sand/70 bg-white shadow-soft">
              <iframe
                title={t('mapTitle', { farm: site.name, city: site.location.city })}
                src={site.location.mapEmbed}
                className="w-full h-72 border-0"
                loading="lazy"
              />
              <a
                href={site.location.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-sm font-semibold text-forest hover:text-earth"
              >
                {t('openMap')}
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-display text-3xl font-bold text-forest mb-6">{t('sendHeading')}</h2>
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
