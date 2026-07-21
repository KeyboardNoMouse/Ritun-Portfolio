import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLenis } from '../lib/LenisProvider.jsx'
import BladeMark from './BladeMark.jsx'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
  { href: '#path', label: 'Path' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const { scrollTo } = useLenis() ?? {}
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (href) => (e) => {
    e.preventDefault()
    setOpen(false)
    scrollTo?.(href)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-obsidian/85 backdrop-blur-md border-b border-obsidian-line' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          onClick={go('#top')}
          data-cursor="ring"
          className="flex items-center gap-2 font-display text-sm tracking-widest2 text-blade"
        >
          <BladeMark />
          <span className="hidden sm:inline">RITUN JAIN</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={go(l.href)}
                data-cursor="ring"
                className="font-display text-xs uppercase tracking-widest2 text-steel transition-colors hover:text-sakura"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          data-cursor="ring"
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className={`h-px w-6 bg-blade transition-transform ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
          <span className={`h-px w-6 bg-blade transition-transform ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-obsidian-line bg-obsidian/95 backdrop-blur-md md:hidden"
          >
            {LINKS.map((l) => (
              <li key={l.href} className="border-b border-obsidian-line/60">
                <a
                  href={l.href}
                  onClick={go(l.href)}
                  className="block px-6 py-4 font-display text-xs uppercase tracking-widest2 text-steel"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
