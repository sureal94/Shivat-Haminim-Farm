import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import Button from './Button'

const empty = { name: '', email: '', phone: '', subject: '', message: '' }

export default function ContactForm() {
  const { content: { site }, t } = useLanguage()
  const [values, setValues] = useState(empty)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setStatus('sending')

    if (site.contactEndpoint) {
      try {
        const res = await fetch(site.contactEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        })
        if (!res.ok) throw new Error('Request failed')
        setStatus('success')
        setValues(empty)
        return
      } catch {
        setStatus('error')
        setError(t('failed'))
        return
      }
    }

    const body = [`${t('name')}: ${values.name}`, `${t('email')}: ${values.email}`, `${t('phone')}: ${values.phone}`, '', values.message].join('\n')
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(values.subject || t('mailSubject'))}&body=${encodeURIComponent(body)}`
    setStatus('mailto')
  }

  if (status === 'success') {
    return (
      <div className="rounded-3xl bg-cream border border-sand p-8" role="status">
        <h3 className="font-display text-2xl text-forest">{t('thankYou')}</h3>
        <p className="mt-3 text-muted">{t('sent')}</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-white border border-sand/70 p-6 sm:p-8 shadow-soft space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="text-sm font-medium text-forest">{t('name')}</span>
          <input name="name" required value={values.name} onChange={onChange} autoComplete="name" className="mt-2 w-full rounded-2xl border border-sand px-4 py-3" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-forest">{t('email')}</span>
          <input dir="ltr" name="email" type="email" required value={values.email} onChange={onChange} autoComplete="email" className="mt-2 w-full rounded-2xl border border-sand px-4 py-3 text-left" />
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-medium text-forest">{t('phone')}</span>
        <input dir="ltr" name="phone" type="tel" value={values.phone} onChange={onChange} autoComplete="tel" className="mt-2 w-full rounded-2xl border border-sand px-4 py-3 text-left" />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-forest">{t('subject')}</span>
        <input name="subject" required value={values.subject} onChange={onChange} className="mt-2 w-full rounded-2xl border border-sand px-4 py-3" />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-forest">{t('message')}</span>
        <textarea name="message" required rows="5" value={values.message} onChange={onChange} className="mt-2 w-full rounded-2xl border border-sand px-4 py-3" />
      </label>
      <Button type="submit" className="w-full sm:w-auto" disabled={status === 'sending'}>
        {status === 'sending' ? t('sending') : t('send')}
      </Button>
      {status === 'mailto' ? (
        <p className="text-sm text-muted" role="status">
          {t('mailOpened')}{' '}
          <a dir="ltr" className="underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
        </p>
      ) : null}
      {status === 'error' ? <p className="text-sm text-terracotta" role="alert">{error}</p> : null}
      {!site.contactEndpoint ? (
        <p className="text-xs text-muted">
          {t('serviceNote')}
        </p>
      ) : null}
    </form>
  )
}
