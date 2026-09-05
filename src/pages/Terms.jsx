import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import { useLanguage } from '../i18n/LanguageContext'

export default function Terms() {
  const { content: { seo, site }, t } = useLanguage()
  return (
    <>
      <Seo title={seo.terms.title} description={seo.terms.description} path="/terms" />
      <PageHero
        heading={t('termsHeading')}
        text={t('termsHero')}
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-8 text-muted leading-relaxed">
          <p>{t('termsIntro', { farm: site.name })}</p>

          <div>
            <h2 className="font-display text-2xl font-bold text-forest">{t('informationHeading')}</h2>
            <p className="mt-3">{t('information')}</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-forest">{t('contactDonationsHeading')}</h2>
            <p className="mt-3">{t('contactDonations')}</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-forest">{t('questions')}</h2>
            <p className="mt-3">
              {t('termsQuestions')}{' '}
              <a dir="ltr" className="underline text-forest" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
