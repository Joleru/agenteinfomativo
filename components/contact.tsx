"use client"

import { useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contacto" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Contacto
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
            Hablemos de tu proyecto
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Cuentanos tu idea y te ayudaremos a llevarla al mundo digital.
            Respuesta garantizada en menos de 24 horas.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Correo</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  contacto@nexadigital.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Telefono</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  +52 (55) 1234-5678
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Ubicacion</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Ciudad de Mexico, Mexico
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-border bg-card p-6">
              <h3 className="font-serif text-base font-semibold text-foreground">
                Horario de atencion
              </h3>
              <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Lunes - Viernes</span>
                  <span className="text-foreground">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabado</span>
                  <span className="text-foreground">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo</span>
                  <span className="text-foreground">Cerrado</span>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 lg:col-span-3 rounded-lg border border-border bg-card p-8"
          >
            <h3 className="font-serif text-lg font-semibold text-foreground">
              Envianos un mensaje
            </h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name" className="text-foreground">Nombre</Label>
                <Input
                  id="name"
                  placeholder="Tu nombre"
                  required
                  className="bg-background"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-foreground">Correo</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@correo.com"
                  required
                  className="bg-background"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="subject" className="text-foreground">Asunto</Label>
              <Input
                id="subject"
                placeholder="Tipo de proyecto"
                required
                className="bg-background"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="message" className="text-foreground">Mensaje</Label>
              <Textarea
                id="message"
                rows={5}
                placeholder="Describe tu proyecto o consulta..."
                required
                className="bg-background resize-none"
              />
            </div>
            <Button
              type="submit"
              className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-fit self-end"
              disabled={submitted}
            >
              {submitted ? (
                "Mensaje enviado"
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Enviar mensaje
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
