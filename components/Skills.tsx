"use client"

export default function Skills() {

  const skills = [
    "Python",
    "JavaScript",
    "Next.js",
    "Machine Learning",
    "CAD",
    "Fluid Mechanics"
  ]

  return (
    <section id="skills" className="py-32 px-10 text-center">

      <h2 className="text-3xl font-bold mb-10">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">

        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-gray-800 p-6 rounded-xl"
          >
            {skill}
          </div>
        ))}

      </div>

    </section>
  )
}