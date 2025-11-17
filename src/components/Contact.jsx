import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Thanks! I\'ll get back to you soon.')
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Let’s work together</h2>
          <p className="mt-2 text-gray-600">Tell me about your project and I’ll reach out.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Your name" className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
            <input required type="email" placeholder="Email" className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
          </div>
          <input placeholder="Budget (optional)" className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
          <textarea required placeholder="Tell me a bit about what you want to build" rows="5" className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />

          <div className="flex items-center justify-between">
            <p className="text-sm text-emerald-600">{status}</p>
            <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors">
              <Send size={16} /> Send
            </button>
          </div>
        </form>

        <div className="mt-10 flex items-center justify-center gap-3 text-gray-700">
          <Mail size={16} /> contact@yourdomain.dev
        </div>
      </div>
    </section>
  )
}
