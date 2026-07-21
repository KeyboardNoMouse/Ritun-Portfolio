import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section id="work" className="relative border-b border-obsidian-line/60 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading eyebrow="The Forge" title={['Selected', 'Work']} />

        <Reveal
          as="div"
          stagger
          y={32}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
