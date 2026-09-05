import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const item = items[index]

  useEffect(() => {
    if (index == null) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, onClose, onPrev, onNext])

  if (index == null || !item) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[80] bg-ink/90 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 cursor-default"
        aria-label="Close image viewer"
      />
      <div className="relative z-10 max-w-5xl w-full">
        <img
          src={item.src}
          alt={item.alt}
          className="max-h-[80vh] w-full object-contain rounded-2xl"
        />
        <p className="mt-3 text-center text-cream/90">{item.alt}</p>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-forest"
        aria-label="Close"
      >
        <X />
      </button>
      <button
        type="button"
        onClick={onPrev}
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-forest"
        aria-label="Previous image"
      >
        <ChevronLeft />
      </button>
      <button
        type="button"
        onClick={onNext}
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-forest"
        aria-label="Next image"
      >
        <ChevronRight />
      </button>
    </div>,
    document.body,
  )
}
