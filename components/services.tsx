import {
  Globe,
  ShoppingCart,
  Smartphone,
  Server,
  Search,
  PenTool,
} from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Sitios Web Corporativos",
    description:
      "Paginas web profesionales y adaptables que representan la identidad de tu marca con un diseno moderno y optimizado.",
  },
  {
    icon: ShoppingCart,
    title: "Tiendas Online",
    description:
      "E-commerce completo con pasarelas de pago, inventario y gestion de pedidos para que vendas las 24 horas.",
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Web",
    description:
      "Aplicaciones a medida, responsivas y de alto rendimiento que se adaptan a las necesidades de tu negocio.",
  },
  {
    icon: Server,
    title: "Dominio y Hosting",
    description:
      "Registro de dominio y alojamiento web incluido con certificado SSL, respaldos automaticos y velocidad garantizada.",
  },
  {
    icon: Search,
    title: "SEO y Posicionamiento",
    description:
      "Optimizacion para motores de busqueda que mejora tu visibilidad y atrae trafico cualificado a tu sitio.",
  },
  {
    icon: PenTool,
    title: "Diseno UI/UX",
    description:
      "Interfaces intuitivas y atractivas que ofrecen la mejor experiencia de usuario y maximizan las conversiones.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Nuestros Servicios
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
            Soluciones digitales completas para tu empresa
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Ofrecemos un servicio integral que cubre todas las necesidades
            digitales de tu negocio, desde el diseno hasta el hosting.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-lg border border-border bg-card p-8 transition-all hover:border-accent/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
