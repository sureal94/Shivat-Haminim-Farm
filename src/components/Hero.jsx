import { ChevronDown } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import Button from './Button'
import { useLanguage } from '../i18n/LanguageContext'

export default function Hero({ image, heading, text, primaryCta, secondaryCta }) {
  const { t } = useLanguage()
  const reduce = useReducedMotion()

  return (
    <section className="relative min-h-[88vh] flex items-end overflow-hidden">
      <img
        src={image}
        alt={t('heroAlt')}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-forest/45 to-forest/15" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 pb-20 pt-32">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1]">
            {heading}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-cream/95 leading-relaxed max-w-2xl">
            {text}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button to={primaryCta.to} variant="cream">
              {primaryCta.label}
            </Button>
            <Button to={secondaryCta.to} variant="ghost">
              {secondaryCta.label}
            </Button>
          </div>
        </motion.div>
      </div>

      <a
        href="#welcome"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 hover:text-white"
        aria-label={t('scrollIntro')}
      >
        <ChevronDown className="motion-safe:animate-bounce" />
      </a>
    </section>
  )
}
