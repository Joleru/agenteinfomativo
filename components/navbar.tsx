"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Contacto", href: "#contacto" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2">
          <span
            className={`font-serif text-xl font-bold tracking-tight transition-colors ${
              scrolled ? "text-foreground" : "text-card"
            }`}
          >
            NexaDigital
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? "text-foreground" : "text-card"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <a href="#contacto">Cotizar ahora</a>
          </Button>
        </div>

        <button
          className={`md:hidden ${scrolled ? "text-foreground" : "text-card"}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-b border-border bg-background/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              size="sm"
              className="bg-accent text-accent-foreground hover:bg-accent/90 w-fit"
            >
              <a href="#contacto" onClick={() => setIsOpen(false)}>
                Cotizar ahora
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
