"use client";

import dynamic from "next/dynamic"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

const ThreeScene = dynamic(() => import("../components/ThreeScene"), { ssr: false })

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <ThreeScene />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}