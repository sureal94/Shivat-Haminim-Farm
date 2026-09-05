import { Accessibility, Heart, Sprout, Users } from 'lucide-react'
import FadeIn from './FadeIn'

const icons = {
  sprout: Sprout,
  heart: Heart,
  accessibility: Accessibility,
  users: Users,
}

export default function FeatureCard({ icon, title, text, delay = 0 }) {
  const Icon = icons[icon] || Sprout
  return (
    <FadeIn delay={delay}>
      <article className="h-full rounded-3xl bg-white border border-sand/60 p-7 shadow-soft hover:-translate-y-1 transition duration-300">
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cream text-forest">
          <Icon aria-hidden="true" />
        </div>
        <h3 className="font-display text-xl font-semibold text-forest">{title}</h3>
        <p className="mt-3 text-muted leading-relaxed">{text}</p>
      </article>
    </FadeIn>
  )
}
