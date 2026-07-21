import BladeMark from './BladeMark.jsx'
import { useLenis } from '../lib/LenisProvider.jsx'

export default function Footer() {
  const { scrollTo } = useLenis() ?? {}
  return (
    <footer className="border-t border-obsidian-line/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-10">
        <div className="flex items-center gap-2 text-steel">
          <BladeMark className="h-4 w-4 opacity-70" />
          <span className="font-body text-xs">
            © {new Date().getFullYear()} Ritun Jain. Built by hand.
          </span>
        </div>
        <button
          onClick={() => scrollTo?.('#top')}
          data-cursor="ring"
          className="font-display text-xs uppercase tracking-widest2 text-steel transition-colors hover:text-sakura"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  )
}
