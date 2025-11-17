import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-white to-[#f7f7fb] text-gray-900">
      {/* Ambient gradient blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-blue-500/20 to-violet-600/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-400/20 to-cyan-500/20 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="border-t py-10 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  )
}

export default App
