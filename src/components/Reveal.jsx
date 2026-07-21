import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  stagger = false,
  y = 24,
  duration = 0.8,
  delay = 0,
  start = 'top 85%',
}) {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const targets = stagger ? Array.from(rootRef.current.children) : rootRef.current
      gsap.set(targets, { opacity: 0, y })
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration,
        delay,
        stagger: stagger ? 0.12 : 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: rootRef.current,
          start,
          once: true,
        },
      })
    }, rootRef)
    return () => ctx.revert()
  }, [stagger, y, duration, delay, start])

  return (
    <Tag ref={rootRef} className={className}>
      {children}
    </Tag>
  )
}
