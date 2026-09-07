import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import {
  FORMSUBMIT_ACTION,
  FORMSUBMIT_AJAX,
  FORMSUBMIT_SUBJECT,
} from '../lib/farmEmail'
import Button from './Button'

const empty = { name: '', email: '', phone: '', subject: '', message: '' }

export default function ContactForm() {
  const { t } = useLanguage()
  const [values, setValues] = useState(empty)
  const [status, setStatus] = useState('idle')

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch(FORMSUBMIT_AJAX, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          subject: values.subject,
          message: values.message,
          _subject: FORMSUBMIT_SUBJECT,
          _captcha: 'false',
          _replyto: values.email,
        }),
      })

      const data = await res.json().catch(() => ({}))
      const failed = !res.ok || data.success === false || data.success === 'false'
      if (failed) throw new Error('Request failed')

      setValues(empty)
      setStatus('success')
    } catch {
      setStatus('error')
    }
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
    <form
      action={FORMSUBMIT_ACTION}
      method="POST"
      onSubmit={onSubmit}
      className="rounded-3xl bg-white border border-sand/70 p-6 sm:p-8 shadow-soft space-y-5"
    >
      <input type="hidden" name="_subject" value={FORMSUBMIT_SUBJECT} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_replyto" value={values.email} />

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
      {status === 'error' ? <p className="text-sm text-terracotta" role="alert">{t('failed')}</p> : null}
    </form>
  )
}
