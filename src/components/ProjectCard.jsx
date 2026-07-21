import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="group relative rounded-2xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 220, damping: 22 }}
    >
      {/* Sweeping blade-light border */}
      <div className="pointer-events-none absolute -inset-px overflow-hidden rounded-2xl">
        <div
          className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
            hovered ? 'animate-blade-spin' : ''
          }`}
          style={{
            background:
              'conic-gradient(from 0deg, transparent 0%, #ffb7c5 8%, transparent 22%)',
          }}
        />
      </div>

      <div className="relative flex h-full min-h-[420px] flex-col justify-between rounded-2xl border border-obsidian-line bg-obsidian-raised p-7 [margin:1px]">
        <div>
          <p className="font-display text-xs uppercase tracking-widest2 text-steel">
            {project.tagline}
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold text-blade sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 font-body text-sm leading-relaxed text-steel">
            {project.description}
          </p>
        </div>

        <div className="tech-reveal mt-8">
          <div className="mb-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-obsidian-line px-3 py-1 font-display text-[10px] uppercase tracking-widest2 text-sakura"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-5">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="shuriken"
                className="inline-flex items-center gap-1.5 font-display text-xs uppercase tracking-widest2 text-blade transition-colors hover:text-sakura"
              >
                <Code2 size={14} /> Code
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 font-display text-xs uppercase tracking-widest2 text-steel/50">
                <Code2 size={14} /> Private
              </span>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="flower"
                className="inline-flex items-center gap-1.5 font-display text-xs uppercase tracking-widest2 text-blade transition-colors hover:text-sakura"
              >
                Live <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
