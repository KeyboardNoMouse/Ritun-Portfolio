import Reveal from './Reveal.jsx'
import HandWrittenTitle from './ui/hand-writing-text.jsx'
import { SocialLinksButton } from './ui/share-button.jsx'

const EMAIL = 'ritunjain246@gmail.com'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 text-center md:px-10">
        <p className="flex items-center justify-center gap-3 font-display text-xs uppercase tracking-widest2 text-sakura">
          <span className="h-px w-8 bg-sakura/60" />
          The Dojo
          <span className="h-px w-8 bg-sakura/60" />
        </p>

        <HandWrittenTitle title="Let's Connect" subtitle="Always up for a good conversation." />

        <Reveal as="div" y={24} delay={0.1} className="-mt-4">
          <a
            href={`mailto:${EMAIL}`}
            data-cursor="flower"
            className="inline-block break-all font-display text-2xl font-black normal-case text-blade transition-colors hover:text-sakura sm:text-4xl md:text-5xl"
          >
            {EMAIL}
          </a>

          <div className="mt-12 flex justify-center">
            <SocialLinksButton />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
