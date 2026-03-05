export function Footer() {
  return (
    <footer className="border-t border-border bg-primary py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-serif text-xl font-bold text-primary-foreground">
              NexaDigital
            </span>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/60">
              Transformamos ideas en experiencias digitales que generan
              resultados reales para tu negocio.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
              Navegacion
            </h4>
            <div className="mt-4 flex flex-col gap-2.5">
              {["Inicio", "Servicios", "Portafolio", "Contacto"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="text-sm text-primary-foreground/50 transition-colors hover:text-primary-foreground"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
              Servicios
            </h4>
            <div className="mt-4 flex flex-col gap-2.5 text-sm text-primary-foreground/50">
              <span>Sitios Web</span>
              <span>Tiendas Online</span>
              <span>Aplicaciones Web</span>
              <span>Dominio y Hosting</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
              Contacto
            </h4>
            <div className="mt-4 flex flex-col gap-2.5 text-sm text-primary-foreground/50">
              <span>contacto@nexadigital.com</span>
              <span>+52 (55) 1234-5678</span>
              <span>Ciudad de Mexico, Mexico</span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/40">
          <p>
            {"2026 NexaDigital. Todos los derechos reservados."}
          </p>
        </div>
      </div>
    </footer>
  )
}
