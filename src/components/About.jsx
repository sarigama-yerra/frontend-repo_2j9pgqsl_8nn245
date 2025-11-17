export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">About me</h2>
        <p className="mt-4 text-gray-600">
          I’m a frontend engineer and product-minded designer who loves building crisp, usable interfaces. My toolkit includes React, TypeScript, Tailwind, and a strong eye for UX.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-3 text-left">
          <div className="rounded-xl border bg-white p-4 shadow-sm">
            <p className="text-sm text-gray-500">Experience</p>
            <p className="mt-1 font-semibold">5+ years</p>
          </div>
          <div className="rounded-xl border bg-white p-4 shadow-sm">
            <p className="text-sm text-gray-500">Projects shipped</p>
            <p className="mt-1 font-semibold">30+</p>
          </div>
          <div className="rounded-xl border bg-white p-4 shadow-sm">
            <p className="text-sm text-gray-500">Happy clients</p>
            <p className="mt-1 font-semibold">20+</p>
          </div>
        </div>
      </div>
    </section>
  )
}
