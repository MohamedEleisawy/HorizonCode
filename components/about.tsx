"use client"

import { Target, Eye, Sparkles, TrendingUp, Zap, Users, Rocket, Globe } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const values = [
  {
    icon: Target,
    title: "Rigueur",
    description: "Chaque ligne de code est pensee pour durer. Methodologies eprouvees, standards eleves.",
  },
  {
    icon: Eye,
    title: "Transparence",
    description: "Tarifs affiches, communication claire, suivi en temps reel. Zero zone d'ombre.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Veille permanente sur les tendances pour vous offrir toujours ce qui se fait de mieux.",
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: "Un site qui attire",
    description: "Design tendance qui capte l'attention des le premier regard et vous demarque de la concurrence.",
  },
  {
    icon: Zap,
    title: "Des resultats concrets",
    description: "Sites rapides, optimises SEO, qui convertissent vos visiteurs en clients reels.",
  },
  {
    icon: Users,
    title: "Experience utilisateur",
    description: "Navigation intuitive et fluide qui donne envie a vos visiteurs de rester et de revenir.",
  },
  {
    icon: Globe,
    title: "Presence pro en ligne",
    description: "Une image de marque forte et coherente qui inspire confiance a vos futurs clients.",
  },
  {
    icon: Rocket,
    title: "Lancement rapide",
    description: "De l'idee au site en ligne, un processus efficace pour etre visible rapidement.",
  },
]

export function About() {
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation()
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation({ threshold: 0.1 })
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="apropos" className="py-28 lg:py-36 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Story */}
        <div
          ref={storyRef}
          className={`max-w-3xl mb-24 animate-fade-up ${storyVisible ? "visible" : ""}`}
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            A propos
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-8 text-balance">
            L{"'"}histoire d{"'"}<span className="gradient-text">HorizonCode</span>
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-base">
            <p>
              HorizonCode est nee d{"'"}un constat simple : trop d{"'"}entreprises passent a cote d{"'"}opportunites parce
              que leur site web ne reflete pas leur vrai potentiel. Designs depasses, navigation confuse, sites
              qui n{"'"}inspirent pas confiance... Le resultat ? Des clients perdus avant meme d{"'"}avoir pris contact.
            </p>
            <p>
              Notre mission est de changer ca. Nous creons des sites web au design actuel, qui suivent les
              tendances du moment, qui attirent l{"'"}oeil et qui donnent envie d{"'"}aller plus loin. Le tout a un
              prix juste et accessible, parce que la qualite ne devrait pas etre un luxe reserve aux gros budgets.
            </p>
            <p>
              Chaque projet est une opportunite de prouver qu{"'"}un site beau, rapide et efficace peut etre accessible
              a tous. C{"'"}est cette conviction qui guide chacune de nos creations.
            </p>
          </div>
        </div>

        {/* Values + Benefits */}
        <div className="grid lg:grid-cols-2 gap-16">
          <div ref={valuesRef}>
            <h3 className={`text-2xl font-bold text-foreground mb-8 animate-fade-left ${valuesVisible ? "visible" : ""}`}>
              Nos valeurs
            </h3>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`flex gap-5 p-6 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover-lift animate-fade-left delay-${index + 1} ${valuesVisible ? "visible" : ""}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={benefitsRef}>
            <h3 className={`text-2xl font-bold text-foreground mb-8 animate-fade-right ${benefitsVisible ? "visible" : ""}`}>
              Ce que vous gagnez
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-4 rounded-xl hover:bg-background transition-all duration-300 hover:translate-x-2 animate-fade-right delay-${index + 1} ${benefitsVisible ? "visible" : ""}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
