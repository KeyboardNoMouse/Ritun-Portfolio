import { useState } from 'react'
import { Link as LinkIcon } from 'lucide-react'
import { cn } from '../../lib/utils.js'
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../icons.jsx'

/**
 * ShareButton
 *
 * A pill button that, on hover, slides open into a row of icon links.
 * `links` is an array of { icon, href?, onClick?, label? }.
 */
export default function ShareButton({ className, links, children, ...props }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative inline-flex justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Button */}
      <button
        type="button"
        data-cursor="flower"
        className={cn(
          'relative h-11 w-40 rounded-full px-4 py-2 flex items-center justify-center',
          'bg-obsidian-raised',
          'text-blade',
          'border border-obsidian-line',
          'transition-all duration-300',
          isHovered ? 'opacity-0' : 'opacity-100',
          className
        )}
        {...props}
      >
        <span className="flex items-center gap-2 font-display text-xs uppercase tracking-widest2">
          {children}
        </span>
      </button>

      {/* Hover Links */}
      <div className="absolute inset-0 flex h-11 w-40 justify-center">
        {links.map((link, index) => {
          const Icon = link.icon
          return (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              data-cursor="shuriken"
              className={cn(
                'h-11 w-10 flex items-center justify-center',
                'bg-sakura text-obsidian',
                'transition-all duration-300',
                index === 0 && 'rounded-l-full',
                index === links.length - 1 && 'rounded-r-full',
                'border-r border-obsidian/10 last:border-r-0',
                'hover:bg-blade',
                isHovered ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0',
                index === 0 && 'transition-all duration-200',
                index === 1 && 'delay-[50ms] transition-all duration-200',
                index === 2 && 'delay-100 transition-all duration-200',
                index === 3 && 'delay-150 transition-all duration-200'
              )}
            >
              <Icon className="size-4" />
            </a>
          )
        })}
      </div>
    </div>
  )
}

// Your real X / Twitter handle.
const X_URL = 'https://x.com/RitunJain07'

// Ready-made "connect with me" instance — links straight to your real
// profiles rather than a page-share intent.
export function SocialLinksButton({ className }) {
  const links = [
    { icon: GithubIcon, href: 'https://github.com/KeyboardNoMouse', label: 'GitHub' },
    { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/ritun-jain-23b683309/', label: 'LinkedIn' },
    { icon: InstagramIcon, href: 'https://instagram.com/_ritun_07/', label: 'Instagram' },
    { icon: TwitterIcon, href: X_URL, label: 'X / Twitter' },
  ]

  return (
    <ShareButton links={links} className={className}>
      <LinkIcon size={15} />
      Connect
    </ShareButton>
  )
}
