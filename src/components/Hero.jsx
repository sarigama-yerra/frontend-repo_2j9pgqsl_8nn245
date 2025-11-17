import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 w-full">
        <div className="pt-28 md:pt-40">
          <p className="inline-flex items-center gap-2 text-xs font-medium bg-white/70 backdrop-blur rounded-full px-3 py-1 border border-white/30 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Available for freelance
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Building delightful, modern web experiences
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl">
            I craft interactive, performant apps with React, TypeScript, and design systems. Let’s bring your idea to life.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#projects" className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors">See my work</a>
            <a href="#contact" className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">Get in touch</a>
          </div>
        </div>

        <div className="pt-24 md:pt-40">
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/70 via-white/20 to-transparent" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white" />
    </section>
  )
}
