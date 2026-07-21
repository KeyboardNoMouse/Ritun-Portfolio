import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Standard shadcn-style className helper: merges conditional class lists
// (clsx) and then dedupes/resolves conflicting Tailwind classes (twMerge).
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
