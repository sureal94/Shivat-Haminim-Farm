import { Check } from 'lucide-react'
import Seo from '../components/Seo'
import Hero from '../components/Hero'
import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import FeatureCard from '../components/FeatureCard'
import ProjectCard from '../components/ProjectCard'
import GalleryGrid from '../components/GalleryGrid'
import CTASection from '../components/CTASection'
import Button from '../components/Button'
import { home, seo } from '../data/siteContent'
import { farmImages } from '../data/images'
import { projects } from '../data/projects'
import { galleryItems } from '../data/gallery'

const galleryPreview = galleryItems.slice(0, 8)

export default function Home() {
  return (
    <>
      <Seo title={seo.home.title} description={seo.home.description} path="/" />

      <Hero
        image={farmImages.hero}
        heading={home.hero.heading}
        text={home.hero.text}
        primaryCta={home.hero.primaryCta}
        secondaryCta={home.hero.secondaryCta}
      />

      <section id="welcome" className="scroll-mt-24">
        <div className="grid lg:grid-cols-2 min-h-[32rem]">
          <div className="bg-cream relative min-h-[20rem] lg:min-h-0">
            <img
              src={farmImages.welcome}
              alt="Hands-on growing at Shivat Haminim Farm"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="bg-white flex items-center">
            <FadeIn className="px-6 py-16 sm:px-10 lg:px-16 xl:px-20 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-earth mb-3">
                {home.intro.eyebrow}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest leading-tight">
                {home.intro.heading}
              </h2>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                {home.intro.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader heading={home.whatWeDo.heading} />
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {home.whatWeDo.cards.map((card, i) => (
              <FeatureCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                text={card.text}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn className="relative">
            <div
              className="organic-blob absolute -inset-6 sm:-inset-10 bg-sage/25 -z-0"
              aria-hidden="true"
            />
            <img
              src={farmImages.accessibility}
              alt="Time outdoors at Shivat Haminim Farm"
              className="relative z-10 w-full object-cover organic-blob shadow-soft"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest leading-tight">
              {home.accessibility.heading}
            </h2>
            <div className="mt-6 space-y-4 text-muted leading-relaxed">
              {home.accessibility.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-8 space-y-3">
              {home.accessibility.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-ink">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cream text-forest">
                    <Check size={16} aria-hidden="true" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <FadeIn>
            <blockquote>
              <p className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-forest leading-tight">
                “{home.philosophy.quote}”
              </p>
              <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-earth">
                {home.philosophy.attribution}
              </footer>
            </blockquote>
            <p className="mt-8 text-lg text-muted leading-relaxed">
              {home.philosophy.text}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader heading={home.waysToHelp.heading} />
          <div className="grid gap-6 md:grid-cols-3">
            {home.waysToHelp.cards.map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.08}>
                <article className="h-full flex flex-col rounded-3xl bg-cream border border-sand/60 p-8 md:p-10 shadow-soft">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-forest">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-muted leading-relaxed flex-1">{card.text}</p>
                  <div className="mt-8">
                    <Button to={card.to}>{card.button}</Button>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader heading={home.fundraising.heading} text={home.fundraising.intro} />
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader heading={home.gallery.heading} />
          <GalleryGrid items={galleryPreview} />
          <div className="mt-10 text-center">
            <Button to="/gallery">View Full Gallery</Button>
          </div>
        </div>
      </section>

      <CTASection
        heading={home.cta.heading}
        text={home.cta.text}
        image={farmImages.cta}
      />
    </>
  )
}
