import { useState } from 'react'
import { donate, site } from '../data/siteContent'
import DonationSelector from './DonationSelector'
import Button from './Button'

export default function DonationForm({ projectId }) {
  const [selected, setSelected] = useState(50)
  const [custom, setCustom] = useState('')
  const [anonymous, setAnonymous] = useState(false)
  const [status, setStatus] = useState(null)

  const amount = selected === 'custom' ? custom : selected
  const ready = site.donationUrl && Number(amount) > 0

  const onSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    if (!site.donationUrl) {
      setStatus('unconfigured')
      return
    }
    const url = new URL(site.donationUrl)
    url.searchParams.set('amount', String(amount))
    if (projectId) url.searchParams.set('project', projectId)
    if (data.get('name') && !anonymous) url.searchParams.set('name', data.get('name'))
    if (data.get('email')) url.searchParams.set('email', data.get('email'))
    window.location.assign(url.toString())
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-white border border-sand/70 p-6 sm:p-8 shadow-soft space-y-6">
      {!site.donationUrl ? (
        <div className="rounded-2xl bg-cream border border-sand px-4 py-3 text-sm text-earth" role="status">
          Payment is not connected yet. Set <code className="font-semibold">VITE_DONATION_URL</code> in
          a <code className="font-semibold">.env</code> file before going live. This form collects
          the gift details, but will not process a payment until that URL is added.
        </div>
      ) : null}

      <DonationSelector
        amounts={donate.amounts}
        selected={selected}
        custom={custom}
        onSelect={setSelected}
        onCustom={setCustom}
      />

      <label className="block">
        <span className="text-sm font-medium text-forest">Name</span>
        <input
          name="name"
          type="text"
          autoComplete="name"
          disabled={anonymous}
          className="mt-2 w-full rounded-2xl border border-sand px-4 py-3 disabled:bg-cream"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-forest">Email</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full rounded-2xl border border-sand px-4 py-3"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-forest">Optional message</span>
        <textarea name="message" rows="4" className="mt-2 w-full rounded-2xl border border-sand px-4 py-3" />
      </label>

      <label className="flex items-center gap-3 text-sm text-muted">
        <input
          type="checkbox"
          checked={anonymous}
          onChange={(e) => setAnonymous(e.target.checked)}
          className="h-4 w-4 accent-forest"
        />
        Give anonymously
      </label>

      <Button type="submit" variant="terracotta" className="w-full">
        {ready ? `Donate $${amount}` : 'Donate'}
      </Button>

      {status === 'unconfigured' ? (
        <p className="text-sm text-earth" role="alert">
          The donation provider still needs to be connected. Please email{' '}
          <a className="underline" href={`mailto:${site.contact.email}`}>
            {site.contact.email}
          </a>{' '}
          to give in the meantime.
        </p>
      ) : null}
    </form>
  )
}
