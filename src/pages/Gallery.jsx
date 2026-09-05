import { useMemo, useState } from 'react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import GalleryGrid from '../components/GalleryGrid'
import { farmImages } from '../data/images'
import { useLanguage } from '../i18n/LanguageContext'

export default function Gallery() {
  const { content: { seo }, galleryFilters, galleryItems, t } = useLanguage()
  const [filter, setFilter] = useState(galleryFilters[0])
  const activeFilter = galleryFilters.includes(filter) ? filter : galleryFilters[0]

  const items = useMemo(
    () =>
      activeFilter === galleryFilters[0]
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeFilter),
    [activeFilter, galleryFilters, galleryItems],
  )

  return (
    <>
      <Seo title={seo.gallery.title} description={seo.gallery.description} path="/gallery" />
      <PageHero
        heading={t('galleryHeading')}
        text={t('galleryText')}
        image={farmImages.hero}
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-2 mb-10" role="group" aria-label={t('filterGallery')}>
            {galleryFilters.map((label) => {
              const active = activeFilter === label
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
