import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import { seo, site } from '../data/siteContent'

export default function Terms() {
  return (
    <>
      <Seo title={seo.terms.title} description={seo.terms.description} path="/terms" />
      <PageHero
        heading="Website Terms"
        text="A short, honest note about using this website."
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-8 text-muted leading-relaxed">
          <p>
            This page is a simple placeholder, not a complete legal agreement. {site.name} shares
            this website so people can learn about the farm, find contact details, and see how to
            visit, volunteer, or support the work.
          </p>

          <div>
            <h2 className="font-display text-2xl font-bold text-forest">Informational content</h2>
            <p className="mt-3">
              The text and images are shared to describe the farm as we understand it today. We do
              not make legal, medical, or fundraising claims beyond what is written on these pages.
              Details such as programs and visiting arrangements can change. Please contact us to
              confirm.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-forest">Contact and donations</h2>
            <p className="mt-3">
              Messages sent through the contact form are for reaching the farm. Online donations
              are not processed on this site unless a donation provider has been connected. Until
              then, a gift cannot be completed through the donate form.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-forest">Questions</h2>
            <p className="mt-3">
              If you have questions about this website, email{' '}
              <a className="underline text-forest" href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
