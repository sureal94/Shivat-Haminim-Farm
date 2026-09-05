import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import FadeIn from '../components/FadeIn'
import Button from '../components/Button'
import { seo, waysToHelp } from '../data/siteContent'
import { farmImages } from '../data/images'

export default function WaysToHelp() {
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
              <Button to="/donate">Donate</Button>
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
              <Button to="/contact">Plan a Visit</Button>
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
              <Button to="/contact">Talk About a Partnership</Button>
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
              <Button to="/contact">Get in Touch</Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
