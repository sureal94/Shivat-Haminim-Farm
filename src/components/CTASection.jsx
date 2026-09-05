import Button from './Button'
import FadeIn from './FadeIn'
import { useLanguage } from '../i18n/LanguageContext'

export default function CTASection({
  heading,
  text,
  image,
  primary,
  secondary,
}) {
  const { t } = useLanguage()
  const primaryAction = primary || { label: t('donate'), to: '/donate' }
  const secondaryAction = secondary || { label: t('involved'), to: '/ways-to-help' }
  return (
    <section className="relative overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-forest/75" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 py-20 md:py-28 text-center">
        <FadeIn>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            {heading}
          </h2>
          <p className="mt-5 text-lg text-cream/90 leading-relaxed">{text}</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Button to={primaryAction.to} variant="terracotta">{primaryAction.label}</Button>
            <Button to={secondaryAction.to} variant="ghost">{secondaryAction.label}</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
