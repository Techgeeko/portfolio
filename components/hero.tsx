"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const typingRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!typingRef.current) return

    const phrases = ["Frontend Developer", "React Specialist", "Next.js Expert", "AI-Driven Builder"]

    let phraseIndex = 0
    let charIndex = 0
    let isDeleting = false
    let typingSpeed = 100

    function typeText() {
      const currentPhrase = phrases[phraseIndex]

      if (isDeleting) {
        if (typingRef.current) {
          typingRef.current.textContent = currentPhrase.substring(0, charIndex - 1)
          charIndex--
        }
        typingSpeed = 50
      } else {
        if (typingRef.current) {
          typingRef.current.textContent = currentPhrase.substring(0, charIndex + 1)
          charIndex++
        }
        typingSpeed = 100
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true
        typingSpeed = 1500 // Pause at end of phrase
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        phraseIndex = (phraseIndex + 1) % phrases.length
        typingSpeed = 500 // Pause before typing next phrase
      }

      setTimeout(typeText, typingSpeed)
    }

    typeText()

    return () => {
      // Cleanup if needed
    }
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm <span className="text-emerald-400">Micheal Agulonye</span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-3xl font-medium mb-8 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            I'm a <span ref={typingRef} className="text-emerald-400"></span>
            <span className="animate-blink">|</span>
          </motion.div>

          <motion.p
            className="text-zinc-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Building modern web experiences with cutting-edge technologies and AI-powered workflows.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-zinc-900 font-medium" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-zinc-900"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-zinc-400 hover:text-emerald-400 transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  )
}
