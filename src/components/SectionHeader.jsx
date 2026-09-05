import FadeIn from './FadeIn'

export default function SectionHeader({ eyebrow, heading, text, align = 'center', light = false }) {
  const alignClass = align === 'left' ? 'text-start max-w-2xl' : 'text-center mx-auto max-w-3xl'

  return (
    <FadeIn className={`${alignClass} mb-10 md:mb-14`}>
      {eyebrow ? (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.22em] mb-3 ${
            light ? 'text-sand' : 'text-earth'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-tight ${
          light ? 'text-white' : 'text-forest'
        }`}
      >
        {heading}
      </h2>
      {text ? (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${light ? 'text-cream/90' : 'text-muted'}`}>
          {text}
        </p>
      ) : null}
    </FadeIn>
  )
}
