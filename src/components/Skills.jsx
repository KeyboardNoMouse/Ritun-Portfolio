import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { skillGroups } from '../data/skills.js'

export default function Skills() {
  return (
    <section id="skills" className="relative border-b border-obsidian-line/60 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading eyebrow="The Arsenal" title="Skills" />

        <Reveal as="div" stagger className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="mb-4 font-display text-xs uppercase tracking-widest2 text-sakura">
                {group.label}
              </h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-body text-base text-steel"
                  >
                    <span className="h-px w-4 bg-obsidian-line" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
