import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'shivatHaminimAccessibility'
const MIN_TEXT_SCALE = 0.9
const MAX_TEXT_SCALE = 1.2
const TEXT_STEP = 0.1

const defaultSettings = {
  textScale: 1,
  highContrast: false,
  grayscale: false,
  highlightLinks: false,
  readableFont: false,
  lineSpacing: false,
  reduceMotion: false,
}

const classNames = {
  highContrast: 'a11y-high-contrast',
  grayscale: 'a11y-grayscale',
  highlightLinks: 'a11y-highlight-links',
  readableFont: 'a11y-readable-font',
  lineSpacing: 'a11y-line-spacing',
  reduceMotion: 'a11y-reduce-motion',
}

const AccessibilityContext = createContext(null)

function clampTextScale(value) {
  const numericValue = Number(value)
  if (!Number.isFinite(numericValue)) return 1
  return Math.min(MAX_TEXT_SCALE, Math.max(MIN_TEXT_SCALE, numericValue))
}

function getInitialSettings() {
  if (typeof window === 'undefined') return defaultSettings

  try {
    const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY))
    if (!stored || typeof stored !== 'object') return defaultSettings

    return {
      ...defaultSettings,
      textScale: clampTextScale(stored.textScale),
      highContrast: stored.highContrast === true,
      grayscale: stored.grayscale === true,
      highlightLinks: stored.highlightLinks === true,
      readableFont: stored.readableFont === true,
      lineSpacing: stored.lineSpacing === true,
      reduceMotion: stored.reduceMotion === true,
    }
  } catch {
    return defaultSettings
  }
}

export function AccessibilityProvider({ children }) {
  const [settings, setSettings] = useState(getInitialSettings)

  useEffect(() => {
    const root = document.documentElement
    root.style.fontSize = `${settings.textScale * 100}%`

    Object.entries(classNames).forEach(([setting, className]) => {
      root.classList.toggle(className, settings[setting])
    })

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
    } catch {
      // Settings remain active for this visit when storage is unavailable.
    }
  }, [settings])

  const value = useMemo(
    () => ({
      settings,
      minTextScale: MIN_TEXT_SCALE,
      maxTextScale: MAX_TEXT_SCALE,
      increaseText: () =>
        setSettings((current) => ({
          ...current,
          textScale: clampTextScale(
            Math.round((current.textScale + TEXT_STEP) * 10) / 10,
          ),
        })),
      decreaseText: () =>
        setSettings((current) => ({
          ...current,
          textScale: clampTextScale(
            Math.round((current.textScale - TEXT_STEP) * 10) / 10,
          ),
        })),
      toggleSetting: (setting) => {
        if (!Object.hasOwn(defaultSettings, setting) || setting === 'textScale') return
        setSettings((current) => ({ ...current, [setting]: !current[setting] }))
      },
      resetSettings: () => setSettings(defaultSettings),
    }),
    [settings],
  )

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (!context) {
    throw new Error('useAccessibility must be used inside AccessibilityProvider')
  }
  return context
}

