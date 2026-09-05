import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const { direction, t } = useLanguage()
  const item = items[index]

  useEffect(() => {
    if (index == null) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') (direction === 'rtl' ? onNext : onPrev)()
      if (e.key === 'ArrowRight') (direction === 'rtl' ? onPrev : onNext)()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, onClose, onPrev, onNext, direction])

  if (index == null || !item) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[80] bg-ink/90 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={t('imageViewer')}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 cursor-default"
        aria-label={t('closeViewer')}
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
        className="absolute top-4 end-4 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-forest"
        aria-label={t('close')}
      >
        <X />
      </button>
      <button
        type="button"
        onClick={onPrev}
        className="absolute start-3 top-1/2 z-20 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-forest"
        aria-label={t('previousImage')}
      >
        {direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
      </button>
      <button
        type="button"
        onClick={onNext}
        className="absolute end-3 top-1/2 z-20 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-forest"
        aria-label={t('nextImage')}
      >
        {direction === 'rtl' ? <ChevronLeft /> : <ChevronRight />}
      </button>
    </div>,
    document.body,
  )
}
