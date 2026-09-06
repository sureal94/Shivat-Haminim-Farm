import { useCallback, useRef, useState } from 'react'
import AccessibilityButton from './AccessibilityButton'
import AccessibilityPanel from './AccessibilityPanel'

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef(null)

  const closePanel = useCallback(() => {
    setOpen(false)
    window.requestAnimationFrame(() => buttonRef.current?.focus())
  }, [])

  return (
    <div className="a11y-widget">
      <AccessibilityButton
        ref={buttonRef}
        expanded={open}
        onClick={() => setOpen((current) => !current)}
      />
      {open ? (
        <>
          <div
            className="fixed inset-0 z-[69] bg-transparent"
            aria-hidden="true"
            onClick={closePanel}
          />
          <AccessibilityPanel onClose={closePanel} />
        </>
      ) : null}
    </div>
  )
}

