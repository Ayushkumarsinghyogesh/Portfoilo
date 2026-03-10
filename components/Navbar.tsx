"use client"

export default function Navbar() {
  return (
    <nav className="fixed w-full flex justify-between p-6 bg-black/60 backdrop-blur-md z-50">
      <h1 className="text-xl font-bold">Portfolio</h1>

      <div className="space-x-6">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}