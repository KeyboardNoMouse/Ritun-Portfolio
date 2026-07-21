export default function BladeMark({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 27 L24 8"
        stroke="#f4f4f2"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 6 L27 5 L26 12"
        stroke="#ffb7c5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="5" cy="27" r="1.6" fill="#ffb7c5" />
    </svg>
  )
}
