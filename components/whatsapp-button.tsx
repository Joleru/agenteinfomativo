"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "5215512345678"
  const message = encodeURIComponent(
    "Hola, me interesa solicitar una cotizacion para un proyecto web."
  )
  const url = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-[#fff] shadow-lg transition-transform hover:scale-110 active:scale-95"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
