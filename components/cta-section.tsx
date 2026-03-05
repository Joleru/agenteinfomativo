import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
          Listo para llevar tu negocio al siguiente nivel?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed text-pretty">
          Cuentanos tu idea y recibe una cotizacion personalizada sin compromiso.
          Dominio, hosting y soporte incluido en todos nuestros planes.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-8"
          >
            <a href="#contacto">
              Solicitar cotizacion
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border text-foreground hover:bg-card px-8"
          >
            <a href="#servicios">Ver servicios</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
