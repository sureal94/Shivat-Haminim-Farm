import { useMemo, useState } from 'react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import GalleryGrid from '../components/GalleryGrid'
import { seo } from '../data/siteContent'
import { farmImages } from '../data/images'
import { galleryFilters, galleryItems } from '../data/gallery'

export default function Gallery() {
  const [filter, setFilter] = useState('All')

  const items = useMemo(
    () =>
      filter === 'All'
        ? galleryItems
        : galleryItems.filter((item) => item.category === filter),
    [filter],
  )

  return (
    <>
      <Seo title={seo.gallery.title} description={seo.gallery.description} path="/gallery" />
      <PageHero
        heading="Gallery"
        text="A look at life, growing, and community at Shivat Haminim Farm."
        image={farmImages.hero}
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-2 mb-10" role="group" aria-label="Filter gallery">
            {galleryFilters.map((label) => {
              const active = filter === label
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setFilter(label)}
                  aria-pressed={active}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold min-h-11 transition ${
                    active
                      ? 'bg-forest text-white'
                      : 'bg-white text-forest border border-sand hover:border-forest/40'
                  }`}
                >
                  {label}
                </button>
              )
            })}
          </div>
          <GalleryGrid items={items} masonry />
        </div>
      </section>
    </>
  )
}
