"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import Image from "next/image"
import { Lightbulb, Code, Cpu, Layers, Zap, CheckCircle } from "lucide-react"

export default function Approach() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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

  const steps = [
    {
      icon: <Lightbulb className="text-emerald-400" size={24} />,
      title: "Problem Analysis",
      description: "I start by thoroughly understanding the problem and defining clear objectives.",
    },
    {
      icon: <Cpu className="text-emerald-400" size={24} />,
      title: "AI-Assisted Research",
      description: "I leverage AI tools to research solutions and gather insights quickly.",
    },
    {
      icon: <Layers className="text-emerald-400" size={24} />,
      title: "Architecture Planning",
      description: "I design a scalable architecture with the right technologies for the job.",
    },
    {
      icon: <Code className="text-emerald-400" size={24} />,
      title: "Efficient Development",
      description: "I write clean, maintainable code with AI-enhanced productivity tools.",
    },
    {
      icon: <Zap className="text-emerald-400" size={24} />,
      title: "Testing & Optimization",
      description: "I rigorously test and optimize for performance, accessibility, and user experience.",
    },
    {
      icon: <CheckCircle className="text-emerald-400" size={24} />,
      title: "Continuous Improvement",
      description: "I iterate based on feedback and continuously improve the solution.",
    },
  ]

  return (
    <section id="approach" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Approach</h2>
            <div className="w-20 h-1 bg-emerald-400 mx-auto mb-6"></div>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              How I tackle problems and deliver exceptional solutions using modern development practices and AI tools.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-6">Case Study: AI-Enhanced Development Workflow</h3>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 border border-emerald-400">
                        {step.icon}
                      </div>
                      {index < steps.length - 1 && <div className="w-0.5 h-12 bg-emerald-400/30 mx-auto my-1"></div>}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold mb-1">{step.title}</h4>
                      <p className="text-zinc-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/process.svg?height=600&width=800"
                  alt="Development Process"
                  width={800}
                  height={600}
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/70 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-xl font-bold mb-2">Results from AI-Enhanced Workflow</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="text-emerald-400 mr-2" size={16} />
                      <span>40% faster development time</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-emerald-400 mr-2" size={16} />
                      <span>30% reduction in bugs</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-emerald-400 mr-2" size={16} />
                      <span>More time for creative problem-solving</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
