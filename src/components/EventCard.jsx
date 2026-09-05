import { Calendar, Clock, MapPin } from 'lucide-react'
import Button from './Button'
import { useLanguage } from '../i18n/LanguageContext'

export default function EventCard({ event }) {
  const { t } = useLanguage()
  return (
    <article className="rounded-3xl border border-sand/70 bg-white p-6 shadow-soft">
      {event.date ? (
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-earth">
          <Calendar size={16} aria-hidden="true" />
          {event.date}
        </p>
      ) : null}
      <h3 className="mt-3 font-display text-2xl font-semibold text-forest">{event.title}</h3>
      {event.description ? <p className="mt-3 text-muted leading-relaxed">{event.description}</p> : null}
      <div className="mt-4 space-y-2 text-sm text-muted">
        {event.time ? (
          <p className="flex items-center gap-2">
            <Clock size={16} aria-hidden="true" /> {event.time}
          </p>
        ) : null}
        {event.location ? (
          <p className="flex items-center gap-2">
            <MapPin size={16} aria-hidden="true" /> {event.location}
          </p>
        ) : null}
      </div>
      {event.cta ? (
        <Button to={event.cta.to || '/contact'} className="mt-6">
          {event.cta.label || t('register')}
        </Button>
      ) : null}
    </article>
  )
}
