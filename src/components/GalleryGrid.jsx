import { useState } from 'react'
import Lightbox from './Lightbox'

export default function GalleryGrid({ items, masonry = true }) {
  const [index, setIndex] = useState(null)

  return (
    <>
      <ul className={masonry ? 'masonry list-none p-0 m-0' : 'grid gap-4 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0'}>
        {items.map((item, i) => (
          <li key={item.id} className={masonry ? 'masonry-item' : ''}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group block w-full overflow-hidden rounded-2xl bg-sand/40 text-left"
              aria-label={`Open image: ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  const fallback = e.currentTarget.nextElementSibling
                  if (fallback) fallback.hidden = false
                }}
              />
              <span hidden className="flex aspect-[4/3] items-center justify-center bg-sand text-earth text-sm">
                Image coming soon
              </span>
            </button>
          </li>
        ))}
      </ul>
      <Lightbox
        items={items}
        index={index}
        onClose={() => setIndex(null)}
        onPrev={() => setIndex((i) => (i === 0 ? items.length - 1 : i - 1))}
        onNext={() => setIndex((i) => (i === items.length - 1 ? 0 : i + 1))}
      />
    </>
  )
}
