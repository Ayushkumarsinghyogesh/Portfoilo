"use client"

export default function Projects() {

  const projects = [
    {
      title:"Three Stage Compressor Analysis",
      desc:"Thermodynamic performance analysis using Python"
    },
    {
      title:"Portfolio Website",
      desc:"Modern responsive portfolio using Next.js"
    }
  ]

  return (
    <section id="projects" className="py-32 px-10 text-center">

      <h2 className="text-3xl font-bold mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-gray-900 p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold">
              {p.title}
            </h3>

            <p className="text-gray-400 mt-2">
              {p.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  )
}