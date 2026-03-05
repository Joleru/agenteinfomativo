import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary-foreground/70">
          Desarrollo Web Profesional
        </p>
        <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-primary-foreground text-balance md:text-6xl lg:text-7xl">
          Creamos experiencias digitales que impulsan tu negocio
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 text-pretty">
          Sitios web a medida, tiendas online y aplicaciones con dominio, hosting
          y soporte incluido. Tu presencia digital, sin complicaciones.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-8"
          >
            <a href="#contacto">Solicitar cotizacion</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8"
          >
            <a href="#portafolio">Ver portafolio</a>
          </Button>
        </div>
      </div>

      <a
        href="#servicios"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        aria-label="Ir a servicios"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  )
}
