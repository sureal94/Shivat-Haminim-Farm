import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import DonateButton from '../components/DonateButton'
import { farmImages } from '../data/images'
import { useLanguage } from '../i18n/LanguageContext'

export default function Donate() {
  const { content: { donate, seo }, projects, t } = useLanguage()

  return (
    <>
      <Seo title={seo.donate.title} description={seo.donate.description} path="/donate" />
      <PageHero heading={donate.hero.heading} text={donate.hero.text} image={farmImages.gardens} />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest">
              {donate.why.heading}
            </h2>
            <div className="mt-6 space-y-4 text-lg text-muted leading-relaxed">
              {donate.why.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-6 text-muted leading-relaxed">{t('paypalIntro')}</p>
            <div className="mt-8">
              <DonateButton />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            heading={t('projectsHeading')}
            text={t('projectsText')}
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project, i) => (
              <FadeIn key={project.id} delay={i * 0.06}>
                <article
                  id={project.id}
                  className="scroll-mt-28 overflow-hidden rounded-3xl bg-white border border-sand/60 shadow-soft h-full"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="font-display text-2xl font-semibold text-forest">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-muted leading-relaxed">{project.description}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold text-forest text-center">
              {t('makeGift')}
            </h2>
            <p className="mt-4 text-center text-muted leading-relaxed">
              {t('paypalIntro')}
            </p>
            <div className="mt-8 flex justify-center">
              <DonateButton />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
