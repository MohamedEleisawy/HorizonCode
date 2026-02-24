"use client"

import { Palette, Zap, Shield, HeartHandshake } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: Palette,
    title: "Design actuel",
    description:
      "Des sites qui suivent les dernieres tendances du web design. Votre image de marque merite ce qu'il y a de mieux.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Sites ultra-rapides, optimises SEO et mobile-first. Chaque milliseconde compte pour vos conversions.",
  },
  {
    icon: Shield,
    title: "Transparence totale",
    description:
      "Tarifs clairs, pas de frais caches, suivi en temps reel. Vous savez exactement ou va votre investissement.",
  },
  {
    icon: HeartHandshake,
    title: "Prix accessible",
    description:
      "La qualite professionnelle sans le prix exorbitant. Un excellent rapport qualite-prix pour chaque projet.",
  },
]

export function WhyUs() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`max-w-2xl mb-20 animate-fade-up ${titleVisible ? "visible" : ""}`}
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10">
            Pourquoi HorizonCode
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight text-balance">
            Ce qui nous rend{" "}
            <span className="gradient-text">differents</span>
          </h2>
        </div>

        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover-lift animate-fade-up delay-${index + 1} ${cardsVisible ? "visible" : ""}`}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-[-8deg]" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
