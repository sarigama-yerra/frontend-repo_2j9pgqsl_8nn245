import { Menu, Github, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Work', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/60 border-b border-white/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-500 to-violet-600 shadow-lg" />
            <span className="font-semibold tracking-tight">Flames • Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-gray-100 transition-colors"><Github size={18} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-gray-100 transition-colors"><Linkedin size={18} /></a>
            <a href="#contact" className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              <Mail size={16} /> Contact
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            <Menu size={20} />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="px-2 py-2 rounded-lg hover:bg-gray-100 text-sm" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-gray-100 transition-colors"><Github size={18} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-gray-100 transition-colors"><Linkedin size={18} /></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
