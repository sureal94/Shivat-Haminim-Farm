import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-forest text-white hover:bg-forest-dark shadow-soft hover:-translate-y-0.5',
  secondary:
    'bg-white text-forest border border-forest/20 hover:border-forest/40 hover:-translate-y-0.5',
  cream:
    'bg-cream text-forest hover:bg-sand hover:-translate-y-0.5',
  terracotta:
    'bg-terracotta text-white hover:bg-[#b56f4b] shadow-soft hover:-translate-y-0.5',
  ghost:
    'bg-transparent text-white border border-white/70 hover:bg-white/10',
}

export default function Button({
  to,
  href,
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}) {
  const classes = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-300 min-h-12 ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
