import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import { seo, site } from '../data/siteContent'

export default function Privacy() {
  return (
    <>
      <Seo title={seo.privacy.title} description={seo.privacy.description} path="/privacy" />
      <PageHero
        heading="Privacy Policy"
        text="A short, honest note about how this website handles information."
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-8 text-muted leading-relaxed">
          <p>
            This website is an informational site for {site.name}. It is not a full legal privacy
            policy drafted by a lawyer. If you need something more formal, please contact the farm
            and we will update this page as the site grows.
          </p>

          <div>
            <h2 className="font-display text-2xl font-bold text-forest">What this site collects</h2>
            <p className="mt-3">
              If you use the contact form, you choose to send your name, email, optional phone
              number, subject, and message. Those details are meant for the farm so we can reply.
              If a form service has not been connected, the form opens a message to{' '}
              <a className="underline text-forest" href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-forest">Donations</h2>
            <p className="mt-3">
              Online payment is not connected on this website unless a donation provider URL has
              been configured. This site does not process card payments itself. If a provider is
              added later, that provider will have its own privacy practices.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-forest">Questions</h2>
            <p className="mt-3">
              For privacy questions, email{' '}
              <a className="underline text-forest" href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>{' '}
              or call{' '}
              <a className="underline text-forest" href={`tel:${site.contact.phoneTel}`}>
                {site.contact.phoneDisplay}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
