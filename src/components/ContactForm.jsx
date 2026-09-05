import { useState } from 'react'
import { site } from '../data/siteContent'
import Button from './Button'

const empty = { name: '', email: '', phone: '', subject: '', message: '' }

export default function ContactForm() {
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
        setError('The message could not be sent through the form. Please email us directly.')
        return
      }
    }

    const body = [`Name: ${values.name}`, `Email: ${values.email}`, `Phone: ${values.phone}`, '', values.message].join('\n')
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(values.subject || 'Message from the website')}&body=${encodeURIComponent(body)}`
    setStatus('mailto')
  }

  if (status === 'success') {
    return (
      <div className="rounded-3xl bg-cream border border-sand p-8" role="status">
        <h3 className="font-display text-2xl text-forest">Thank you</h3>
        <p className="mt-3 text-muted">Your message was sent. We will be in touch soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-white border border-sand/70 p-6 sm:p-8 shadow-soft space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="text-sm font-medium text-forest">Name</span>
          <input name="name" required value={values.name} onChange={onChange} autoComplete="name" className="mt-2 w-full rounded-2xl border border-sand px-4 py-3" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-forest">Email</span>
          <input name="email" type="email" required value={values.email} onChange={onChange} autoComplete="email" className="mt-2 w-full rounded-2xl border border-sand px-4 py-3" />
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-medium text-forest">Phone</span>
        <input name="phone" type="tel" value={values.phone} onChange={onChange} autoComplete="tel" className="mt-2 w-full rounded-2xl border border-sand px-4 py-3" />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-forest">Subject</span>
        <input name="subject" required value={values.subject} onChange={onChange} className="mt-2 w-full rounded-2xl border border-sand px-4 py-3" />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-forest">Message</span>
        <textarea name="message" required rows="5" value={values.message} onChange={onChange} className="mt-2 w-full rounded-2xl border border-sand px-4 py-3" />
      </label>
      <Button type="submit" className="w-full sm:w-auto" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </Button>
      {status === 'mailto' ? (
        <p className="text-sm text-muted" role="status">
          Your email app should open with the message. If it does not, write to{' '}
          <a className="underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
        </p>
      ) : null}
      {status === 'error' ? <p className="text-sm text-terracotta" role="alert">{error}</p> : null}
      {!site.contactEndpoint ? (
        <p className="text-xs text-muted">
          A dedicated email service can be connected later with VITE_CONTACT_ENDPOINT. For now, sending opens a message to the farm email.
        </p>
      ) : null}
    </form>
  )
}
