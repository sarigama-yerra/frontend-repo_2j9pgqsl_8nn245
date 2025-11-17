import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-2xl sm:text-3xl font-bold tracking-tight"
        >
          About me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="mt-4 text-gray-600"
        >
          I’m a frontend engineer and product-minded designer who loves building crisp, usable interfaces. My toolkit includes React, TypeScript, Tailwind, and a strong eye for UX.
        </motion.p>
        <div className="mt-8 grid grid-cols-3 gap-3 text-left">
          {[{k:'Experience',v:'5+ years'},{k:'Projects shipped',v:'30+'},{k:'Happy clients',v:'20+'}].map((s,i)=> (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i, ease: 'easeOut' }}
              className="rounded-xl border bg-white p-4 shadow-sm"
            >
              <p className="text-sm text-gray-500">{s.k}</p>
              <p className="mt-1 font-semibold">{s.v}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
