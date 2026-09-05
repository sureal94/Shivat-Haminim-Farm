import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import FadeIn from '../components/FadeIn'
import Button from '../components/Button'
import { farmImages } from '../data/images'
import { useLanguage } from '../i18n/LanguageContext'

export default function WaysToHelp() {
  const { content: { seo, waysToHelp }, t } = useLanguage()
  return (
    <>
      <Seo title={seo.waysToHelp.title} description={seo.waysToHelp.description} path="/ways-to-help" />
      <PageHero
        heading={waysToHelp.hero.heading}
        text={waysToHelp.hero.text}
        image={farmImages.volunteer}
      />

      <section id="volunteer" className="scroll-mt-24 bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest">
              {waysToHelp.volunteer.heading}
            </h2>
            <p className="mt-4 text-xl text-earth font-medium leading-relaxed">
              {waysToHelp.volunteer.intro}
            </p>
            <div className="mt-6 space-y-4 text-lg text-muted leading-relaxed">
              {waysToHelp.volunteer.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8">
              <Button to="/contact" variant="terracotta">
                {waysToHelp.volunteer.cta}
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold text-forest">{waysToHelp.donate.heading}</h2>
            <p className="mt-5 text-lg text-muted leading-relaxed">{waysToHelp.donate.text}</p>
            <div className="mt-8">
              <Button to="/donate">{t('donate')}</Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold text-forest">{waysToHelp.visit.heading}</h2>
            <p className="mt-5 text-lg text-muted leading-relaxed">{waysToHelp.visit.text}</p>
            <div className="mt-8">
              <Button to="/contact">{t('planVisit')}</Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold text-forest">
              {waysToHelp.partnerships.heading}
            </h2>
            <p className="mt-5 text-lg text-muted leading-relaxed">{waysToHelp.partnerships.text}</p>
            <div className="mt-8">
              <Button to="/contact">{t('partnership')}</Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold text-forest">{waysToHelp.other.heading}</h2>
            <p className="mt-5 text-lg text-muted leading-relaxed">{waysToHelp.other.text}</p>
            <div className="mt-8">
              <Button to="/contact">{t('getInTouch')}</Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
