"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">

      <motion.h1
        initial={{ opacity:0, y:50 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:1 }}
        className="text-5xl font-bold"
      >
        Hi, I'm Ayush Kumar
      </motion.h1>

      <motion.p
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:0.5 }}
        className="mt-4 text-gray-400"
      >
        Engineer | Developer | Problem Solver
      </motion.p>

      <a
        href="/resume.pdf"
        className="mt-6 bg-white text-black px-6 py-2 rounded-lg"
        download
      >
        Download Resume
      </a>

    </section>
  )
}