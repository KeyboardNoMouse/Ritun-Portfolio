import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SectionHeading({ eyebrow, title, align = 'left' }) {
  const rootRef = useRef(null)
  const eyebrowRef = useRef(null)
  const lineRef = useRef(null)
  const titleLines = Array.isArray(title) ? title : [title]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(eyebrowRef.current, { opacity: 0, x: -12 })
      gsap.set(lineRef.current.querySelectorAll('.reveal-line'), { yPercent: 110 })

      gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 82%',
          once: true,
        },
        defaults: { ease: 'power4.out' },
      })
        .to(eyebrowRef.current, { opacity: 1, x: 0, duration: 0.5 })
        .to(
          lineRef.current.querySelectorAll('.reveal-line'),
          { yPercent: 0, duration: 0.85, stagger: 0.08 },
          '-=0.25'
        )
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef} className={align === 'center' ? 'text-center' : 'text-left'}>
      <p
        ref={eyebrowRef}
        className="mb-4 flex items-center gap-3 font-display text-xs uppercase tracking-widest2 text-sakura"
        style={align === 'center' ? { justifyContent: 'center' } : undefined}
      >
        <span className="h-px w-8 bg-sakura/60" />
        {eyebrow}
      </p>
      <h2
        ref={lineRef}
        className="font-display text-4xl font-black uppercase leading-[1.02] text-blade sm:text-5xl md:text-6xl"
      >
        {titleLines.map((line, i) => (
          <span key={i} className="mask-reveal block">
            <span className="reveal-line block">{line}</span>
          </span>
        ))}
      </h2>
    </div>
  )
}
