import { useLocation } from 'react-router-dom'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import DonationForm from '../components/DonationForm'
import { donate, seo, site } from '../data/siteContent'
import { farmImages } from '../data/images'
import { projects } from '../data/projects'

export default function Donate() {
  const { hash } = useLocation()
  const projectId = hash.replace('#', '')
  const selectedProject = projects.find((project) => project.id === projectId)

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
          </FadeIn>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            heading="Projects your gift can support"
            text="Choose a project to learn more, then use the form below. Online payment is only available if a donation provider has been connected."
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
              Make a gift
            </h2>
            <p className="mt-4 text-center text-muted leading-relaxed">
              {site.donationUrl
                ? selectedProject
                  ? `This form will send you to the donation page, noting ${selectedProject.title}.`
                  : 'This form will send you to the connected donation page.'
                : 'Online payment is not connected on this website yet. The form below will not charge a card or process a gift until VITE_DONATION_URL is set. In the meantime, please email the farm to give.'}
            </p>
            {!site.donationUrl ? (
              <p className="mt-3 text-center text-sm text-earth">
                Write to{' '}
                <a className="underline font-semibold" href={`mailto:${site.contact.email}`}>
                  {site.contact.email}
                </a>{' '}
                if you would like to support the farm now.
              </p>
            ) : null}
            <div className="mt-8">
              <DonationForm projectId={selectedProject?.id} />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
