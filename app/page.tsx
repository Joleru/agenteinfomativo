import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
import { Portfolio } from "@/components/portfolio"
import { CtaSection } from "@/components/cta-section"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ChatWidget } from "@/components/chat-widget"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Portfolio />
      <CtaSection />
      <Contact />
      <Footer />
      <ChatWidget />
      <WhatsAppButton />
    </main>
  )
}
