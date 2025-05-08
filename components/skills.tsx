"use client"

import type React from "react"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Code, Palette, Database, Terminal, Cpu, Globe } from "lucide-react"

type Skill = {
  name: string
  level: number
}

type SkillCategory = {
  title: string
  icon: React.ReactNode
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Code className="text-emerald-400" size={24} />,
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
    ],
  },
  {
    title: "Styling",
    icon: <Palette className="text-emerald-400" size={24} />,
    skills: [
      { name: "Tailwind CSS", level: 90 },
      { name: "Styled Components", level: 85 },
      { name: "SASS/SCSS", level: 80 },
      { name: "CSS Modules", level: 85 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    title: "Backend",
    icon: <Database className="text-emerald-400" size={24} />,
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "PostgreSQL", level: 65 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    title: "Dev Tools",
    icon: <Terminal className="text-emerald-400" size={24} />,
    skills: [
      { name: "Git", level: 90 },
      { name: "Webpack", level: 75 },
      { name: "Jest", level: 80 },
      { name: "Cypress", level: 70 },
      { name: "Docker", level: 65 },
    ],
  },
  {
    title: "AI Tools",
    icon: <Cpu className="text-emerald-400" size={24} />,
    skills: [
      { name: "OpenAI API", level: 85 },
      { name: "Hugging Face", level: 75 },
      { name: "LangChain", level: 70 },
      { name: "AI Prompt Engineering", level: 80 },
      { name: "Vector Databases", level: 65 },
    ],
  },
  {
    title: "Other",
    icon: <Globe className="text-emerald-400" size={24} />,
    skills: [
      { name: "Responsive Design", level: 95 },
      { name: "Performance Optimization", level: 85 },
      { name: "Accessibility", level: 80 },
      { name: "SEO", level: 75 },
      { name: "UI/UX Principles", level: 85 },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
            <div className="w-20 h-1 bg-emerald-400 mx-auto mb-6"></div>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              Here&apos;s a breakdown of my technical skills and expertise across different categories.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <motion.div key={category.title} variants={itemVariants} className="bg-zinc-900 rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h3 className="text-xl font-bold ml-2">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-zinc-300">{skill.name}</span>
                        <span className="text-zinc-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-zinc-700 rounded-full h-2">
                        <div
                          className="bg-emerald-400 h-2 rounded-full"
                          style={{
                            width: `${skill.level}%`,
                            transition: "width 1s ease-in-out",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
