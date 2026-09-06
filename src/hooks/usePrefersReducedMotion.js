import { useReducedMotion } from 'framer-motion'
import { useAccessibility } from '../accessibility/AccessibilityContext'

export default function usePrefersReducedMotion() {
  const osReduce = useReducedMotion()
  const { settings } = useAccessibility()
  return Boolean(osReduce || settings.reduceMotion)
}
