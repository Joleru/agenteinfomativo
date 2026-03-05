"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

const categories = ["Todos", "Web", "E-commerce", "Aplicaciones"]

const projects = [
  {
    title: "Boutique Elena",
    category: "E-commerce",
    description: "Tienda online de moda con pasarela de pagos integrada",
    image: "/images/portfolio-1.jpg",
  },
  {
    title: "GrupoFinance Corp",
    category: "Web",
    description: "Sitio corporativo con dashboard de analiticas en tiempo real",
    image: "/images/portfolio-2.jpg",
  },
  {
    title: "Sabores del Chef",
    category: "Web",
    description: "Web de restaurante con reservas online y menu interactivo",
    image: "/images/portfolio-3.jpg",
  },
  {
    title: "InmoVista Premium",
    category: "Aplicaciones",
    description: "Plataforma inmobiliaria con busqueda avanzada y mapas",
    image: "/images/portfolio-4.jpg",
  },
]

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Todos")

  const filtered =
    activeFilter === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="portafolio" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Portafolio
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
            Proyectos que hablan por nosotros
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Cada proyecto es una muestra de nuestro compromiso con la calidad,
            la innovacion y los resultados.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeFilter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground border border-border hover:border-accent/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-lg bg-card border border-border"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/40" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground">
                    <ExternalLink className="h-4 w-4" />
                    Ver proyecto
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  {project.category}
                </span>
                <h3 className="mt-2 font-serif text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
