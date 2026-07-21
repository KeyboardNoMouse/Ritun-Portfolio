import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
  const dotRef = useRef(null)
  // Compute this synchronously on first render (not inside the effect) so the
  // dot element already exists in the DOM — and its ref is attached — by the
  // time the effect below runs. Starting `enabled` as false and flipping it
  // inside the effect meant the component returned null on the first paint,
  // so gsap.quickTo below ran against a still-null ref, threw, and silently
  // aborted before the mousemove listener was ever registered — the cursor
  // simply vanished.
  const [enabled] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches
  )
  const quickX = useRef(null)
  const quickY = useRef(null)

  useEffect(() => {
    if (!enabled) return

    document.documentElement.classList.add('has-custom-cursor')

    quickX.current = gsap.quickTo(dotRef.current, 'x', { duration: 0.12, ease: 'power3' })
    quickY.current = gsap.quickTo(dotRef.current, 'y', { duration: 0.12, ease: 'power3' })

    const onMove = (e) => {
      quickX.current(e.clientX)
      quickY.current(e.clientY)
    }
    const onDown = () => gsap.to(dotRef.current, { scale: 0.6, duration: 0.15 })
    const onUp = () => gsap.to(dotRef.current, { scale: 1, duration: 0.15 })

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        width: 8,
        height: 8,
        background: '#ffb7c5',
        boxShadow: '0 0 12px 2px rgba(255,183,197,0.75)',
      }}
    />
  )
}
