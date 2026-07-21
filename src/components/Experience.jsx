import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { timeline } from '../data/experience.js'

export default function Experience() {
  return (
    <section id="path" className="relative border-b border-obsidian-line/60 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading eyebrow="The Path" title="Journey" />

        <Reveal as="div" stagger y={28} className="relative mt-16 space-y-14">
          <div className="absolute bottom-0 left-[5px] top-1 hidden w-px bg-gradient-to-b from-sakura via-obsidian-line to-transparent sm:block" />
          {timeline.map((item) => (
            <div key={item.title} className="relative grid gap-2 pl-0 sm:grid-cols-[220px_1fr] sm:gap-10 sm:pl-8">
              <span className="absolute left-0 top-1.5 hidden h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-sakura shadow-glow-sm sm:block" />
              <p className="font-display text-xs uppercase tracking-widest2 text-sakura">
                {item.period}
              </p>
              <div>
                <h3 className="font-display text-xl font-bold text-blade">{item.title}</h3>
                <p className="mt-1 font-body text-sm text-steel">{item.org}</p>
                <p className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-steel/90">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
