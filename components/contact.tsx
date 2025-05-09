"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Github, Linkedin, Twitter, Calendar, Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Message sent!: Thanks for reaching out. I'll get back to you soon.")
    setFormState({
      name: "",
      email: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-emerald-400 mx-auto mb-6"></div>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              Interested in working together? Schedule a call or send me a message!
            </p>
          </motion.div>

          <div className="w-full">
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {/* Contact Information */}
                <div className="bg-zinc-700/50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="text-emerald-400 mt-1 mr-4" size={20} />
                      <div>
                        <h5 className="font-medium">Location</h5>
                        <p className="text-zinc-300">Owerri, NG</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="text-emerald-400 mt-1 mr-4" size={20} />
                      <div>
                        <h5 className="font-medium">Email</h5>
                        <p className="text-zinc-300">convertprowp@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="text-emerald-400 mt-1 mr-4" size={20} />
                      <div>
                        <h5 className="font-medium">WhatsApp</h5>
                        <p className="text-zinc-300">+234 (812) 360-4476</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Schedule a Meeting */}
                <div className="bg-zinc-700/50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4">Schedule a Meeting</h4>
                  <p className="text-zinc-300 mb-4">
                    Book a call to discuss your project or any questions you might have.
                  </p>
                  <Button className="bg-emerald-500 hover:bg-emerald-600 text-zinc-900 w-full" asChild>
                    <a href="https://cal.com" target="_blank" rel="noopener noreferrer">
                      <Calendar className="mr-2" size={16} />
                      Book a Call
                    </a>
                  </Button>
                </div>

                {/* Connect with Me */}
                <div className="bg-zinc-700/50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4">Connect with Me</h4>
                  <p className="text-zinc-300 mb-4">
                    Follow me on social media to stay updated with my latest projects.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a
                      href="https://github.com/techgeeko"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-zinc-600 hover:bg-zinc-500 p-3 rounded-full transition-colors"
                    >
                      <Github className="text-zinc-200" size={20} />
                    </a>
                    <a
                      href="https://ng.linkedin.com/in/micheal-agulonye-0b7240225"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-zinc-600 hover:bg-zinc-500 p-3 rounded-full transition-colors"
                    >
                      <Linkedin className="text-zinc-200" size={20} />
                    </a>
                    <a
                      href="https://twitter.com/agulonye_m"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-zinc-600 hover:bg-zinc-500 p-3 rounded-full transition-colors"
                    >
                      <Twitter className="text-zinc-200" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Form */}
            {/* <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-zinc-700 border-zinc-600 focus-visible:ring-emerald-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="bg-zinc-700 border-zinc-600 focus-visible:ring-emerald-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                    className="bg-zinc-700 border-zinc-600 focus-visible:ring-emerald-400 min-h-[150px]"
                  />
                </div>

                <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-zinc-900 font-medium">
                  Send Message
                </Button>
              </form>
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}