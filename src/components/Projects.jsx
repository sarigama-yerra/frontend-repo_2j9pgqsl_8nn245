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

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Selected work</h2>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">View all</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-500 to-violet-600 flex items-center justify-center text-white">
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
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -z-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
    </section>
  )
}
