import { motion } from 'framer-motion'

/**
 * HandWrittenTitle
 *
 * A large title with a hand-drawn circle/scribble that draws itself in
 * behind the text on mount, then the text and subtitle fade up after.
 * Adapted from a TSX/shadcn component into this project's plain JSX +
 * Tailwind setup, restyled to the site's obsidian/blade/sakura palette.
 */
export default function HandWrittenTitle({ title = 'Hand Written', subtitle }) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] },
        opacity: { duration: 0.5 },
      },
    },
  }

  return (
    <div className="relative mx-auto w-full max-w-4xl py-10 md:py-16">
      <div className="absolute inset-0">
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 600"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="h-full w-full"
        >
          <motion.path
            d="M 950 90
               C 1250 300, 1050 480, 600 520
               C 250 520, 150 480, 150 300
               C 150 120, 350 80, 600 80
               C 850 80, 950 180, 950 180"
            fill="none"
            strokeWidth="10"
            stroke="#ffb7c5"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={draw}
            className="opacity-90"
          />
        </motion.svg>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <motion.h2
          className="font-display text-4xl font-black uppercase tracking-tight text-blade sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            className="mt-3 font-body text-base text-steel/90 md:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  )
}
