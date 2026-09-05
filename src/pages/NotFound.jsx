import Seo from '../components/Seo'
import Button from '../components/Button'
import { useLanguage } from '../i18n/LanguageContext'

export default function NotFound() {
  const { t } = useLanguage()
  return (
    <>
      <Seo
        title={t('notFoundTitle')}
        description={t('notFoundDescription')}
        path="/"
      />
      <section className="bg-cream min-h-[60vh] flex items-center">
        <div className="mx-auto max-w-xl px-4 sm:px-6 py-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-earth">404</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-forest">
            {t('notFoundHeading')}
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            {t('notFoundText')}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Button to="/">{t('backHome')}</Button>
            <Button to="/contact" variant="secondary">
              {t('contactUs')}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
