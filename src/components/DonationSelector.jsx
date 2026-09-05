export default function DonationSelector({ amounts, selected, custom, onSelect, onCustom }) {
  return (
    <fieldset>
      <legend className="font-display text-lg font-semibold text-forest mb-4">Donation amount</legend>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {amounts.map((amount) => {
          const active = selected === amount && !custom
          return (
            <button
              key={amount}
              type="button"
              onClick={() => onSelect(amount)}
              className={`min-h-12 rounded-2xl border text-sm font-semibold transition ${
                active
                  ? 'border-terracotta bg-terracotta text-white'
                  : 'border-sand bg-white text-forest hover:border-terracotta/50'
              }`}
              aria-pressed={active}
            >
              ${amount}
            </button>
          )
        })}
        <button
          type="button"
          onClick={() => onSelect('custom')}
          className={`min-h-12 rounded-2xl border text-sm font-semibold transition ${
            selected === 'custom'
              ? 'border-terracotta bg-terracotta text-white'
              : 'border-sand bg-white text-forest hover:border-terracotta/50'
          }`}
          aria-pressed={selected === 'custom'}
        >
          Custom
        </button>
      </div>
      {selected === 'custom' ? (
        <label className="mt-4 block">
          <span className="sr-only">Custom donation amount</span>
          <input
            type="number"
            min="1"
            inputMode="decimal"
            value={custom}
            onChange={(e) => onCustom(e.target.value)}
            placeholder="Enter amount"
            className="mt-2 w-full rounded-2xl border border-sand bg-white px-4 py-3"
          />
        </label>
      ) : null}
    </fieldset>
  )
}
