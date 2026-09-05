import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import FadeIn from '../components/FadeIn'
import { farmImages } from '../data/images'
import { useLanguage } from '../i18n/LanguageContext'

export default function About() {
  const { content: { about, seo } } = useLanguage()
  const sections = [about.who, about.why, about.vision]
  return (
    <>
      <Seo title={seo.about.title} description={seo.about.description} path="/about" />
      <PageHero heading={about.hero.heading} text={about.hero.text} image={farmImages.about} />

      <div className="bg-white">
        {sections.map((section, i) => (
          <section
            key={section.heading}
            className={i % 2 === 1 ? 'bg-cream' : 'bg-white'}
          >
            <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 md:py-20">
              <FadeIn>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest">
                  {section.heading}
                </h2>
                <div className="mt-6 space-y-4 text-lg text-muted leading-relaxed">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </FadeIn>
            </div>
          </section>
        ))}

        <section className="bg-cream py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-6 md:grid-cols-2">
            {about.pillars.map((pillar, i) => (
              <FadeIn key={pillar.heading} delay={i * 0.05}>
                <article className="h-full rounded-3xl bg-white border border-sand/60 p-7 shadow-soft">
                  <h2 className="font-display text-2xl font-semibold text-forest">{pillar.heading}</h2>
                  <p className="mt-3 text-muted leading-relaxed">{pillar.text}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="bg-forest">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 md:py-20 text-center">
            <FadeIn>
              <p className="font-display text-2xl sm:text-3xl text-cream leading-relaxed">
                {about.invitation}
              </p>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  )
}
