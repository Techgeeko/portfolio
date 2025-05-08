"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleResumeClick = () => {
    toast.success("Resume downloaded: Your resume has been downloaded successfully.")
  }

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Approach", href: "#approach" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 py-4",
        scrolled ? "bg-zinc-900/90 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="#hero" className="text-xl font-bold text-emerald-400">
          Dev<span className="text-white">Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-zinc-300 hover:text-emerald-400 transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            variant="outline"
            className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-zinc-900"
            onClick={handleResumeClick}
          >
            Resume
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-zinc-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-zinc-900/95 backdrop-blur-md shadow-lg py-4">
          <ul className="flex flex-col space-y-4 px-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block py-2 text-zinc-300 hover:text-emerald-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Button
                variant="outline"
                className="w-full border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-zinc-900"
                onClick={() => {
                  handleResumeClick()
                  setIsOpen(false)
                }}
              >
                Resume
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
