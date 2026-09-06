import { useEffect, useRef } from 'react'
import {
  AlignVerticalSpaceAround,
  Contrast,
  Eye,
  Link as LinkIcon,
  Minus,
  Plus,
  RotateCcw,
  Type,
  Waves,
  X,
} from 'lucide-react'
import { useAccessibility } from '../accessibility/AccessibilityContext'
import { useLanguage } from '../i18n/LanguageContext'

const toggleOptions = [
  { setting: 'highContrast', label: 'highContrast', icon: Contrast },
  { setting: 'grayscale', label: 'grayscale', icon: Eye },
  { setting: 'highlightLinks', label: 'highlightLinks', icon: LinkIcon },
  { setting: 'readableFont', label: 'readableFont', icon: Type },
  { setting: 'lineSpacing', label: 'lineSpacing', icon: AlignVerticalSpaceAround },
  { setting: 'reduceMotion', label: 'reduceMotion', icon: Waves },
]

function ToggleControl({ setting, label, icon: Icon, enabled, onToggle }) {
  const { t } = useLanguage()

  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      aria-pressed={enabled}
      onClick={() => onToggle(setting)}
      className={`flex min-h-14 w-full items-center gap-3 rounded-2xl border px-4 py-3 text-start transition ${
        enabled
          ? 'border-forest bg-forest text-white'
          : 'border-sand/80 bg-white text-ink hover:border-forest/50'
      }`}
    >
      <Icon size={21} className="shrink-0" aria-hidden="true" />
      <span className="flex-1 font-semibold">{t(`accessibility.${label}`)}</span>
      <span
        aria-hidden="true"
        className={`relative h-6 w-11 shrink-0 rounded-full border transition ${
          enabled ? 'border-white/70 bg-white/25' : 'border-forest/25 bg-sand/45'
        }`}
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full transition-all ${
            enabled ? 'end-1 bg-white' : 'start-1 bg-forest'
          }`}
        />
      </span>
    </button>
  )
}

export default function AccessibilityPanel({ onClose }) {
  const { t } = useLanguage()
  const {
    settings,
    minTextScale,
    maxTextScale,
    increaseText,
    decreaseText,
    toggleSetting,
    resetSettings,
  } = useAccessibility()
  const panelRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    closeRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab') return
      const focusable = panelRef.current?.querySelectorAll(
        'button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (!focusable?.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <section
      ref={panelRef}
      id="accessibility-settings-panel"
      role="dialog"
      aria-modal="true"
      aria-labelledby="accessibility-panel-title"
      aria-describedby="accessibility-panel-subtitle"
      className="a11y-panel fixed z-[71] bottom-[calc(5.5rem+env(safe-area-inset-bottom,0px))] end-[max(1rem,env(safe-area-inset-inline-end,1rem))] max-h-[min(36rem,calc(100dvh-7.5rem))] w-[min(24rem,calc(100vw-2rem))] overflow-y-auto overscroll-contain rounded-3xl border border-sand bg-cream p-5 shadow-[0_18px_50px_rgba(36,69,52,0.28)] sm:p-6"
    >
      <div className="flex items-start gap-4">
        <div className="min-w-0 flex-1">
          <h2
            id="accessibility-panel-title"
            className="font-display text-2xl font-bold leading-tight text-forest"
          >
            {t('accessibility.title')}
          </h2>
          <p id="accessibility-panel-subtitle" className="mt-1 text-sm text-muted">
            {t('accessibility.subtitle')}
          </p>
        </div>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={t('accessibility.close')}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-forest shadow-soft transition hover:bg-sand/40"
        >
          <X size={22} aria-hidden="true" />
        </button>
      </div>

      <div className="mt-6 rounded-2xl border border-sand/80 bg-white p-4">
        <p className="font-semibold text-forest">{t('accessibility.textSize')}</p>
        <p className="mt-1 text-sm text-muted" aria-live="polite">
          {t('accessibility.currentTextSize', {
            size: Math.round(settings.textScale * 100),
          })}
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={increaseText}
            disabled={settings.textScale >= maxTextScale}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-forest px-3 text-sm font-semibold text-white transition hover:bg-forest-dark disabled:cursor-not-allowed disabled:opacity-45"
          >
            <Plus size={18} aria-hidden="true" />
            {t('accessibility.increaseText')}
          </button>
          <button
            type="button"
            onClick={decreaseText}
            disabled={settings.textScale <= minTextScale}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-forest px-3 text-sm font-semibold text-forest transition hover:bg-sand/35 disabled:cursor-not-allowed disabled:opacity-45"
          >
            <Minus size={18} aria-hidden="true" />
            {t('accessibility.decreaseText')}
          </button>
        </div>
      </div>

      <div className="mt-4 grid gap-3">
        {toggleOptions.map((option) => (
          <ToggleControl
            key={option.setting}
            {...option}
            enabled={settings[option.setting]}
            onToggle={toggleSetting}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={resetSettings}
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border-2 border-forest bg-white px-4 font-semibold text-forest transition hover:bg-sand/35"
      >
        <RotateCcw size={19} aria-hidden="true" />
        {t('accessibility.reset')}
      </button>
    </section>
  )
}

