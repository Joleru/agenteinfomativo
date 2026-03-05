"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { Bot, X, Send, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  })

  const isLoading = status === "streaming" || status === "submitted"

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    sendMessage({ text: input })
    setInput("")
  }

  return (
    <>
      {/* Toggle button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Abrir chat de cotizaciones"
          className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110 active:scale-95"
        >
          <Bot className="h-7 w-7" />
        </button>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[480px] w-[360px] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border bg-primary px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-foreground">
                  Asistente NexaDigital
                </p>
                <p className="text-xs text-primary-foreground/60">
                  Cotizaciones al instante
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Minimizar chat"
                className="rounded-md p-1.5 text-primary-foreground/60 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Minus className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Cerrar chat"
                className="rounded-md p-1.5 text-primary-foreground/60 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 py-4"
          >
            {messages.length === 0 && (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Bot className="h-6 w-6" />
                </div>
                <p className="mt-3 text-sm font-medium text-foreground">
                  Hola, soy tu asistente virtual
                </p>
                <p className="mt-1 max-w-[240px] text-xs text-muted-foreground">
                  Cuentame sobre tu proyecto y te dare una cotizacion
                  aproximada al instante.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  {[
                    "Quiero una tienda online",
                    "Necesito una pagina web",
                    "Cuanto cuesta el hosting?",
                  ].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => {
                        sendMessage({ text: suggestion })
                      }}
                      className="rounded-lg border border-border bg-background px-3 py-2 text-xs text-foreground transition-colors hover:border-accent/30 hover:bg-secondary"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg) => {
              const isUser = msg.role === "user"
              return (
                <div
                  key={msg.id}
                  className={`mb-3 flex ${isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      isUser
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-secondary text-secondary-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.parts.map((part, i) => {
                      if (part.type === "text") {
                        return <span key={i}>{part.text}</span>
                      }
                      return null
                    })}
                  </div>
                </div>
              )
            })}

            {isLoading && messages[messages.length - 1]?.role === "user" && (
              <div className="mb-3 flex justify-start">
                <div className="flex gap-1.5 rounded-2xl bg-secondary px-4 py-3 rounded-bl-md">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/40 [animation-delay:0ms]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/40 [animation-delay:150ms]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/40 [animation-delay:300ms]" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-border bg-card px-4 py-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu consulta..."
              disabled={isLoading}
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
            />
            <Button
              type="submit"
              size="icon"
              disabled={isLoading || !input.trim()}
              className="h-8 w-8 shrink-0 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Enviar</span>
            </Button>
          </form>
        </div>
      )}
    </>
  )
}
