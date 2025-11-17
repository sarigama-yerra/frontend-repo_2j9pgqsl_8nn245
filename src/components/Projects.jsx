import { motion } from 'framer-motion'
import { ExternalLink, Code, Star } from 'lucide-react'

const projects = [
  {
    title: 'AI Chat Assistant',
    description: 'Conversational UI powered by LLMs with streaming responses and memory.',
    tags: ['React', 'FastAPI', 'LLM'],
    link: '#',
    stars: 312,
  },
  {
    title: 'Design System Kit',
    description: 'A set of accessible UI components following shadcn/ui patterns.',
    tags: ['Radix', 'Tailwind'],
    link: '#',
    stars: 157,
  },
  {
    title: '3D Playground',
    description: 'Interactive Spline + Three.js experiments for web storytelling.',
    tags: ['Spline', 'Three'],
    link: '#',
    stars: 89,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}
const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      {/* top divider glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-gray-100 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Selected work</h2>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">View all</a>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p) => (
            <motion.a
              variants={item}
              key={p.title}
              href={p.link}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group rounded-2xl border border-gray-200/70 bg-white p-5 shadow-sm hover:shadow-lg transition-all overflow-hidden"
            >
              {/* hover gradient sheen */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-500/10 to-violet-600/10 blur-xl" />
              </div>

              <div className="flex items-start justify-between">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-500 to-violet-600 flex items-center justify-center text-white shadow">
                  <Code size={18} />
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star size={16} />
                  <span className="text-xs font-medium">{p.stars}</span>
                </div>
              </div>
              <h3 className="mt-4 font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">{t}</span>
                ))}
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-sm text-gray-700 group-hover:text-gray-900">
                Visit <ExternalLink size={16} />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
