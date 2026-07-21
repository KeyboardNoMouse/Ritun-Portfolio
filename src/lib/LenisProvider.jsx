import { createContext, useContext, useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const LenisContext = createContext(null)

export function useLenis() {
  return useContext(LenisContext)
}

export default function LenisProvider({ children }) {
  const lenisRef = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const lenis = new Lenis({
      duration: prefersReducedMotion ? 0 : 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: !prefersReducedMotion,
      wheelMultiplier: 1,
      touchMultiplier: 1.1,
    })
    lenisRef.current = lenis
    setReady(true)

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
    }
  }, [])

  const scrollTo = (target, opts) => {
    lenisRef.current?.scrollTo(target, { offset: -72, duration: 1.3, ...opts })
  }

  return (
    <LenisContext.Provider value={{ lenis: lenisRef, scrollTo, ready }}>
      {children}
    </LenisContext.Provider>
  )
}
