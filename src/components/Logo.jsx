import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

let cachedSrc

function removeBlackBackground(src) {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < data.data.length; i += 4) {
        if (data.data[i] < 30 && data.data[i + 1] < 30 && data.data[i + 2] < 30) {
          data.data[i + 3] = 0
        }
      }
      ctx.putImageData(data, 0, 0)
      resolve(canvas.toDataURL('image/png'))
    }
    img.onerror = () => resolve(src)
    img.src = src
  })
}

export default function Logo({ compact = false, className = '' }) {
  const { content: { site } } = useLanguage()
  const [src, setSrc] = useState(cachedSrc || '/logo.png')

  useEffect(() => {
    if (cachedSrc) {
      setSrc(cachedSrc)
      return
    }
    removeBlackBackground('/logo.png').then((next) => {
      cachedSrc = next
      setSrc(next)
    })
  }, [])

  return (
    <Link
      to="/"
      className={`flex items-center gap-3 rounded-full ${className}`}
      aria-label={`${site.name} home`}
    >
      <img
        src={src}
        alt=""
        className={`object-contain ${compact ? 'h-12 w-auto sm:h-14' : 'h-14 w-auto sm:h-16'}`}
      />
      <span className="sr-only">{site.name}</span>
    </Link>
  )
}
