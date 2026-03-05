"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 150, suffix: "+", label: "Proyectos entregados" },
  { value: 98, suffix: "%", label: "Clientes satisfechos" },
  { value: 5, suffix: "+", label: "Anos de experiencia" },
  { value: 24, suffix: "/7", label: "Soporte tecnico" },
]

function useCountUp(target: number, isVisible: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!isVisible) return
    let current = 0
    const step = Math.max(1, Math.floor(target / 40))
    const interval = setInterval(() => {
      current += step
      if (current >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(current)
      }
    }, 30)
    return () => clearInterval(interval)
  }, [target, isVisible])
  return count
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true)
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-primary py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <StatItem key={s.label} stat={s} visible={visible} />
        ))}
      </div>
    </section>
  )
}

function StatItem({
  stat,
  visible,
}: {
  stat: (typeof stats)[number]
  visible: boolean
}) {
  const count = useCountUp(stat.value, visible)
  return (
    <div className="text-center">
      <p className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
        {count}
        <span className="text-accent">{stat.suffix}</span>
      </p>
      <p className="mt-2 text-sm text-primary-foreground/60">{stat.label}</p>
    </div>
  )
}
