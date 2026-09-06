import { forwardRef } from 'react'
import { Accessibility } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const AccessibilityButton = forwardRef(function AccessibilityButton(
  { expanded, onClick },
  ref,
) {
  const { t } = useLanguage()

  return (
    <div className="a11y-trigger fixed z-[70] bottom-[max(1rem,env(safe-area-inset-bottom))] end-[max(1rem,env(safe-area-inset-inline-end,1rem))]">
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        aria-label={expanded ? t('accessibility.close') : t('accessibility.open')}
        aria-expanded={expanded}
        aria-haspopup="dialog"
        aria-controls="accessibility-settings-panel"
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-forest text-white shadow-[0_8px_24px_rgba(36,69,52,0.32)] transition duration-200 hover:-translate-y-0.5 hover:bg-forest-dark hover:shadow-[0_10px_28px_rgba(36,69,52,0.4)] focus-visible:bg-forest-dark"
      >
        <Accessibility size={28} strokeWidth={2.25} aria-hidden="true" />
        <span
          role="tooltip"
          className={`pointer-events-none absolute bottom-full end-0 mb-2 whitespace-nowrap rounded-lg bg-ink px-3 py-1.5 text-xs font-semibold text-white shadow-soft ${
            expanded ? 'hidden' : 'hidden group-hover:block group-focus-visible:block'
          }`}
        >
          {t('accessibility.tooltip')}
        </span>
      </button>
    </div>
  )
})

export default AccessibilityButton

