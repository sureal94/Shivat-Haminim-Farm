import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import EventCard from '../components/EventCard'
import Button from '../components/Button'
import FadeIn from '../components/FadeIn'
import { eventsPage, seo } from '../data/siteContent'
import { events } from '../data/events'
import { farmImages } from '../data/images'

export default function Events() {
  return (
    <>
      <Seo title={seo.events.title} description={seo.events.description} path="/events" />
      <PageHero
        heading={eventsPage.hero.heading}
        text={eventsPage.hero.text}
        image={farmImages.community}
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {events.length === 0 ? (
            <FadeIn>
              <div className="rounded-3xl bg-white border border-sand/70 p-8 sm:p-12 text-center shadow-soft">
                <p className="text-lg text-muted leading-relaxed">{eventsPage.empty}</p>
                <div className="mt-8">
                  <Button to="/contact">Contact Us About a Visit</Button>
                </div>
              </div>
            </FadeIn>
          ) : (
            <div className="grid gap-6">
              {events.map((event) => (
                <EventCard key={event.id || event.title} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
