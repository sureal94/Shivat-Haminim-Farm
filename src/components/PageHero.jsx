export default function PageHero({ heading, text, image }) {
  return (
    <section className="relative overflow-hidden bg-forest">
      {image ? (
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/85 to-forest/55" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sand mb-3">
          Shivat Haminim Farm
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white max-w-3xl leading-tight">
          {heading}
        </h1>
        {text ? (
          <p className="mt-5 max-w-2xl text-lg text-cream/90 leading-relaxed">{text}</p>
        ) : null}
      </div>
    </section>
  )
}
