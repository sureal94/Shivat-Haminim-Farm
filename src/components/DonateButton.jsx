import { useLanguage } from '../i18n/LanguageContext'
import { PAYPAL_DONATION_URL } from '../lib/paypal'
import Button from './Button'

export default function DonateButton({ className = '', variant = 'terracotta' }) {
  const { t } = useLanguage()

  return (
    <Button
      href={PAYPAL_DONATION_URL}
      variant={variant}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t('donatePaypal')} (${t('opensNewTab')})`}
    >
      {t('donatePaypal')}
    </Button>
  )
}
