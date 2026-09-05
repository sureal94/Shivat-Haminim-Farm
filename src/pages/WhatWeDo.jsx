import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import FadeIn from '../components/FadeIn'
import { farmImages } from '../data/images'
import { useLanguage } from '../i18n/LanguageContext'

const sectionImages = [
  farmImages.planting,
  farmImages.community,
  farmImages.health,
  farmImages.accessibility,
  farmImages.welcome,
  farmImages.volunteer,
  farmImages.gardens,
]

export default function WhatWeDo() {
  const { content: { seo, whatWeDo }, direction } = useLanguage()
  return (
    <>
      <Seo title={seo.whatWeDo.title} description={seo.whatWeDo.description} path="/what-we-do" />
      <PageHero heading={whatWeDo.hero.heading} text={whatWeDo.hero.text} image={farmImages.planting} />

      {whatWeDo.sections.map((section, i) => {
        const imageLeft = (i % 2 === 0) !== (direction === 'rtl')
        return (
          <section
            key={section.id}
            id={section.id}
            className={`scroll-mt-24 ${i % 2 === 0 ? 'bg-white' : 'bg-cream'}`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <FadeIn className={imageLeft ? 'lg:order-1' : 'lg:order-2'}>
                <img
                  src={sectionImages[i % sectionImages.length]}
                  alt=""
                  className="w-full rounded-3xl object-cover aspect-[4/3] shadow-soft"
                />
              </FadeIn>
              <FadeIn delay={0.1} className={imageLeft ? 'lg:order-2' : 'lg:order-1'}>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest">
                  {section.title}
                </h2>
                <p className="mt-5 text-lg text-muted leading-relaxed">{section.text}</p>
              </FadeIn>
            </div>
          </section>
        )
      })}
    </>
  )
}
