import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import { useLanguage } from '../i18n/LanguageContext'

export default function Privacy() {
  const { content: { seo, site }, t } = useLanguage()
  return (
    <>
      <Seo title={seo.privacy.title} description={seo.privacy.description} path="/privacy" />
      <PageHero
        heading={t('privacyHeading')}
        text={t('privacyHero')}
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-8 text-muted leading-relaxed">
          <p>{t('privacyIntro', { farm: site.name })}</p>

          <div>
            <h2 className="font-display text-2xl font-bold text-forest">{t('collectsHeading')}</h2>
            <p className="mt-3">{t('collects')}</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-forest">{t('donationsHeading')}</h2>
            <p className="mt-3">{t('privacyDonations')}</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-forest">{t('questions')}</h2>
            <p className="mt-3">
              {t('privacyQuestions')}{' '}
              <a dir="ltr" className="underline text-forest" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              {' · '}
              <a dir="ltr" className="underline text-forest" href={`tel:${site.contact.phoneTel}`}>{site.contact.phoneDisplay}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
