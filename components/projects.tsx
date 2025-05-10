"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  problem: string
  solution: string
  result: string
  github: string
  live: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Go Invoice",
    description: "Go invoice is a streamlined invoice management software designed for freelancers and small businesses. Built with Nextjs, ShadCN UI, and XATA Postgresql for database, it allows users to generate, store, and manage invoices effortlessly through a clean and responsive interface.",
    image: "/goinvoice.png?height=600&width=800",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Resend", "Clerk"],
    problem:
      "Freelancers and small business owners waste time on manual, error-prone invoicing and risk missed payments",
    solution: "Created a software to help freelancers to Generate, Store, Edit and Filter invoices in one web app. Cloud hosted database for instant access.",
    result: "Helped freelancers and small business owners save time, and reduce missed due dates to zero.",
    github: "https://github.com",
    live: "https://goinvoice.ng",
  },
  {
    id: 2,
    title: "MedicTrack",
    description: "MedicTrack is a web app for doctors and clinics to manage appointments, patient records and follow-ups.",
    image: "/medictrack.png?height=600&width=800",
    tags: ["Nextjs", "Socket.io", "Node.js", "Express", "XATA Postgresql"],
    problem:
      "Small to mid-sized clinics rely on manual appointment scheduling and paper-based patient records, leading to double bookings, missed follow-ups, overload.",
    solution: "Built a platform for booking appointments, storing patient data, and automating reminders-all in one place.",
    result: "Reduced patient appointment friction by 30% and improved clinic productivity by streamlining appointment booking and patient management.",
    github: "https://github.com/Techgeeko/medictrack",
    live: "https://medictrack.vercel.app",
  },
  {
    id: 3,
    title: "Kreate Studio ",
    description: "A tool that helps content creators generate ideas and draft content using AI.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Next.js", "TypeScript", "GPT-4 API", "Tailwind CSS"],
    problem: "Content creators face writer's block and struggle to consistently produce high-quality content.",
    solution: "Developed a tool that uses AI to generate content ideas, outlines, and drafts based on user inputs.",
    result: "Helped content creators reduce content production time by 40% while maintaining quality.",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 4,
    title: "Smart Home Control System",
    description: "A web application that allows users to control and automate their smart home devices.",
    image: "/public/projects/goinvoice.png?height=600&width=800",
    tags: ["React", "IoT", "WebSockets", "Node.js", "Express"],
    problem:
      "Users had to use multiple apps to control different smart home devices, creating a fragmented experience.",
    solution:
      "Created a unified platform that integrates with various smart home APIs and provides a single interface.",
    result: "Simplified the smart home experience for users and enabled advanced automation scenarios.",
    github: "https://github.com",
    live: "https://example.com",
  },
]

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0)
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

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-emerald-400 mx-auto mb-6"></div>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and problem-solving approach.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <Image
                src={projects[activeProject].image || "/placeholder.svg"}
                alt={projects[activeProject].title}
                width={800}
                height={600}
                className="w-full object-contain aspect-video"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/70 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects[activeProject].tags.map((tag) => (
                    <Badge key={tag} className="bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{projects[activeProject].title}</h3>
                <p className="text-zinc-300 mb-4">{projects[activeProject].description}</p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-zinc-900"
                    asChild
                  >
                    <a href={projects[activeProject].github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      View Code
                    </a>
                  </Button>
                  <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-zinc-900" asChild>
                    <a href={projects[activeProject].live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-zinc-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-2">The Problem</h4>
              <p className="text-zinc-300">{projects[activeProject].problem}</p>
            </div>
            <div className="bg-zinc-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-2">The Solution</h4>
              <p className="text-zinc-300">{projects[activeProject].solution}</p>
            </div>
            <div className="bg-zinc-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-2">The Result</h4>
              <p className="text-zinc-300">{projects[activeProject].result}</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-between items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
            >
              <ArrowLeft size={20} />
            </Button>

            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all",
                    activeProject === index ? "bg-emerald-400" : "bg-zinc-700 hover:bg-zinc-600",
                  )}
                  aria-label={`View project ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
            >
              <ArrowRight size={20} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
