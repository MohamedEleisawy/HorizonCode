"use client"

import { Check, ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useEffect, useRef, useState } from "react"

const plans = [
  {
    name: "Business",
    description: "Pour les entreprises qui veulent se demarquer",
    price: "1 490",
    period: "a partir de",
    features: [
      "Site avance (10+ pages)",
      "Design sur mesure premium",
      "Integration CMS",
      "Optimisation SEO avancee",
      "Analytics & tableau de bord",
      "Formulaire de contact integre",
      "3 mois de support inclus",
    ],
    popular: false,
  },
   {
    name: "Essentiel",
    description: "Ideal pour lancer votre presence en ligne",
    price: "690",
    period: "a partir de",
    features: [
      "Site vitrine (jusqu'a 5 pages)",
      "Design responsive moderne",
      "Optimisation SEO de base",
      "Contact",
      "1 mois de support inclus",
    ],
    popular: true,
  },
  {
    name: "Premium",
    description: "Solutions sur mesure sans limites",
    price: "Sur devis",
    period: "",
    features: [
      "Application web complete",
      "Architecture personnalisee",
      "Audit & conseil inclus",
      "Formation de votre equipe",
      "Support prioritaire",
      "Maintenance continue",
    ],
    popular: false,
  },
]

function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height
      setMouse({ x, y })
    }

    const el = containerRef.current
    if (el) {
      el.addEventListener("mousemove", handleMouseMove)
      return () => el.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const shapes = [
    { size: "w-16 h-16", rounded: "rounded-2xl", color: "bg-primary/8 border border-primary/10", top: "8%", left: "5%", speed: 25, rotate: "rotate-12" },
    { size: "w-10 h-10", rounded: "rounded-full", color: "bg-violet-500/8 border border-violet-500/10", top: "15%", right: "8%", speed: 35, rotate: "-rotate-6" },
    { size: "w-14 h-14", rounded: "rounded-xl", color: "bg-primary/6 border border-primary/8", bottom: "20%", left: "3%", speed: 20, rotate: "rotate-45" },
    { size: "w-8 h-8", rounded: "rounded-lg", color: "bg-violet-400/8 border border-violet-400/10", bottom: "12%", right: "6%", speed: 40, rotate: "rotate-12" },
    { size: "w-12 h-12", rounded: "rounded-full", color: "bg-primary/5 border border-primary/8", top: "50%", left: "10%", speed: 30, rotate: "" },
    { size: "w-6 h-6", rounded: "rounded-md", color: "bg-violet-500/6 border border-violet-500/8", top: "40%", right: "12%", speed: 45, rotate: "-rotate-12" },
    { size: "w-20 h-20", rounded: "rounded-3xl", color: "bg-primary/4 border border-primary/6", top: "60%", left: "50%", speed: 15, rotate: "rotate-6" },
    { size: "w-5 h-5", rounded: "rounded-full", color: "bg-primary/10 border border-primary/12", top: "25%", left: "40%", speed: 50, rotate: "" },
  ]

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <div
          key={i}
          className={`absolute ${shape.size} ${shape.rounded} ${shape.color} ${shape.rotate} backdrop-blur-sm transition-transform duration-700 ease-out`}
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
            transform: `translate(${mouse.x * shape.speed}px, ${mouse.y * shape.speed}px) ${shape.rotate ? "" : ""}`,
          }}
        />
      ))}
      <div
        className="absolute w-72 h-72 rounded-full bg-primary/5 blur-3xl transition-transform duration-1000 ease-out"
        style={{
          top: "10%",
          left: "15%",
          transform: `translate(${mouse.x * 12}px, ${mouse.y * 12}px)`,
        }}
      />
      <div
        className="absolute w-56 h-56 rounded-full bg-violet-500/5 blur-3xl transition-transform duration-1000 ease-out"
        style={{
          bottom: "15%",
          right: "10%",
          transform: `translate(${mouse.x * 18}px, ${mouse.y * 18}px)`,
        }}
      />
    </div>
    
  )
}

export function Pricing() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="tarifs" className="py-28 lg:py-36 relative">
      <FloatingElements />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-20 animate-fade-up ${titleVisible ? "visible" : ""}`}
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10">
            Tarification
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight text-balance">
            Des offres{" "}
            <span className="gradient-text">transparentes</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Un excellent rapport qualite-prix. Pas de frais caches, pas de mauvaises surprises.
          </p>
        </div>

        <div ref={cardsRef} className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl border p-8 hover-lift animate-fade-up delay-${index + 1} ${cardsVisible ? "visible" : ""} ${
                plan.popular
                  ? "bg-foreground text-background border-foreground shadow-2xl shadow-foreground/10 scale-[1.03]"
                  : "bg-background/80 backdrop-blur-sm border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 gradient-btn px-5 py-1.5 text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full">
                  Recommande
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-xl font-bold ${plan.popular ? "text-background" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mt-1 ${plan.popular ? "text-background/60" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                {plan.period && (
                  <span className={`text-xs uppercase tracking-wide ${plan.popular ? "text-background/50" : "text-muted-foreground"}`}>
                    {plan.period}{" "}
                  </span>
                )}
                <div className="flex items-baseline gap-1">
                  <span className={`text-5xl font-extrabold ${plan.popular ? "text-background" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-lg ${plan.popular ? "text-background/60" : "text-muted-foreground"}`}>
                      EUR
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-3.5 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                        plan.popular ? "text-background/70" : "text-primary"
                      }`}
                    />
                    <span className={plan.popular ? "text-background/80" : "text-muted-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="mailto:eleisawy19@gmail.com"
                className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${
                  plan.popular
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "gradient-btn text-primary-foreground hover:shadow-lg hover:shadow-primary/20"
                }`}
              >
                Demander un devis
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <p className={`text-center text-sm text-muted-foreground mt-12 animate-fade-up delay-5 ${cardsVisible ? "visible" : ""}`}>
          * Les tarifs sont indicatifs et peuvent varier selon la complexite du projet. Devis gratuit et sans engagement.
        </p>
      </div>
    </section>
  )
}
