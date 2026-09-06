import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { FARM_EMAIL, openFarmMailto } from '../lib/farmEmail'
import DonationSelector from './DonationSelector'
import Button from './Button'

export default function DonationForm({ projectId }) {
  const { content: { donate }, projects, t } = useLanguage()
  const [selected, setSelected] = useState(50)
  const [custom, setCustom] = useState('')
  const [anonymous, setAnonymous] = useState(false)
  const [status, setStatus] = useState(null)

  const amount = selected === 'custom' ? custom : selected
  const ready = Number(amount) > 0
  const selectedProject = projects.find((project) => project.id === projectId)

  const onSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    if (!ready) {
      setStatus('needAmount')
      return
    }

    const body = [
      `${t('name')}: ${anonymous ? t('anonymous') : data.get('name') || ''}`,
      `${t('email')}: ${data.get('email') || ''}`,
      `${t('amount')}: $${amount}`,
      selectedProject ? `${t('donationProject')}: ${selectedProject.title}` : null,
      `${t('anonymous')}: ${anonymous ? t('yes') : t('no')}`,
      '',
      data.get('message') || '',
    ]
      .filter((line) => line !== null)
      .join('\n')

    openFarmMailto(t('donationMailSubject'), body)
    setStatus('mailto')
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-white border border-sand/70 p-6 sm:p-8 shadow-soft space-y-6">
      <div className="rounded-2xl bg-cream border border-sand px-4 py-3 text-sm text-earth" role="status">
        {t('paymentConfig')}
      </div>

      <DonationSelector
        amounts={donate.amounts}
        selected={selected}
        custom={custom}
        onSelect={setSelected}
        onCustom={setCustom}
      />

      <label className="block">
        <span className="text-sm font-medium text-forest">{t('name')}</span>
        <input
          name="name"
          type="text"
          autoComplete="name"
          disabled={anonymous}
          className="mt-2 w-full rounded-2xl border border-sand px-4 py-3 disabled:bg-cream"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-forest">{t('email')}</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          dir="ltr"
          className="mt-2 w-full rounded-2xl border border-sand px-4 py-3 text-left"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-forest">{t('optionalMessage')}</span>
        <textarea name="message" rows="4" className="mt-2 w-full rounded-2xl border border-sand px-4 py-3" />
      </label>

      <label className="flex items-center gap-3 text-sm text-muted">
        <input
          type="checkbox"
          checked={anonymous}
          onChange={(e) => setAnonymous(e.target.checked)}
          className="h-4 w-4 accent-forest"
        />
        {t('anonymous')}
      </label>

      <Button type="submit" variant="terracotta" className="w-full" disabled={!ready}>
        {ready ? <>{t('donateAmount')} <span dir="ltr">${amount}</span></> : t('donate')}
      </Button>

      {status === 'mailto' ? (
        <p className="text-sm text-muted" role="status">
          {t('mailOpened')}{' '}
          <a dir="ltr" className="underline" href={`mailto:${FARM_EMAIL}`}>{FARM_EMAIL}</a>
        </p>
      ) : null}

      {status === 'needAmount' ? (
        <p className="text-sm text-earth" role="alert">{t('enterAmount')}</p>
      ) : null}
    </form>
  )
}
