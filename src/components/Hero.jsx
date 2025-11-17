import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay gradients for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 w-full">
        <div className="pt-28 md:pt-40">
          <motion.span
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 text-xs font-medium bg-white/70 backdrop-blur rounded-full px-3 py-1 border border-white/30 shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Available for freelance
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: 'easeOut' }}
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            Building delightful, modern web experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="mt-4 text-gray-600 max-w-xl"
          >
            I craft interactive, performant apps with React, TypeScript, and design systems. Let’s bring your idea to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            className="mt-6 flex items-center gap-3"
          >
            <a href="#projects" className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors">See my work</a>
            <a href="#contact" className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">Get in touch</a>
          </motion.div>
        </div>

        <div className="pt-24 md:pt-40">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/60 via-white/10 to-transparent rounded-3xl" />
          </motion.div>
        </div>
      </div>

      {/* subtle scanline shine */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-6 bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
    </section>
  )
}
