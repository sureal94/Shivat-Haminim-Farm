import { motion } from 'framer-motion'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  y = 24,
  as = 'div',
}) {
  const reduce = usePrefersReducedMotion()
  const Component = motion[as] || motion.div

  return (
    <Component
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </Component>
  )
}
