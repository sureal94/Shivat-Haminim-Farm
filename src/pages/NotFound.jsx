import Seo from '../components/Seo'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page not found | Shivat Haminim Farm"
        description="This page could not be found. Return home or contact Shivat Haminim Farm."
        path="/"
      />
      <section className="bg-cream min-h-[60vh] flex items-center">
        <div className="mx-auto max-w-xl px-4 sm:px-6 py-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-earth">404</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-forest">
            This path is still growing
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            We could not find that page. You are welcome to return home, or write to us if you
            were looking for a visit, volunteer day, or another way to connect with the farm.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Button to="/">Back Home</Button>
            <Button to="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
