"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Code, Lightbulb, Zap, Sparkles } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="about" className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="relative">
              <div className="aspect-square rounded-lg overflow-hidden border-4 border-emerald-400 shadow-xl">
                <Image
                  src="/portfolio.jpg?height=600&width=600"
                  alt="Developer Portrait"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-zinc-900 p-4 rounded-lg shadow-lg">
                <p className="text-lg font-bold">5+ Years Experience</p>
                <p className="text-zinc-400">Frontend Development</p>
              </div>
            </motion.div>

            <div>
              <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-4">
                Frontend Developer & AI-Driven Builder
              </motion.h3>

              <motion.p variants={itemVariants} className="text-zinc-300 mb-6">
                I'm a passionate frontend developer with expertise in creating modern, responsive web applications. My
                journey in web development started 5 years ago, and I've been constantly evolving my skills to stay at
                the cutting edge of technology.
              </motion.p>

              <motion.p variants={itemVariants} className="text-zinc-300 mb-8">
                What sets me apart is my integration of AI tools into my development workflow, allowing me to solve
                complex problems efficiently and deliver high-quality solutions faster. I believe in writing clean,
                maintainable code and creating intuitive user experiences.
              </motion.p>

              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                <div className="flex items-start space-x-2">
                  <Code className="text-emerald-400 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Clean Code</h4>
                    <p className="text-zinc-400 text-sm">Maintainable & scalable</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Lightbulb className="text-emerald-400 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Problem Solver</h4>
                    <p className="text-zinc-400 text-sm">Creative solutions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Zap className="text-emerald-400 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Fast Learner</h4>
                    <p className="text-zinc-400 text-sm">Adaptable to new tech</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Sparkles className="text-emerald-400 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">AI Integration</h4>
                    <p className="text-zinc-400 text-sm">Enhanced workflows</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
