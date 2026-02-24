"use client"

import { Mail, MapPin, ArrowUpRight, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Contact() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: btnRef, isVisible: btnVisible } = useScrollAnimation()

  return (
    <section id="contact" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`max-w-3xl mx-auto text-center animate-fade-up ${titleVisible ? "visible" : ""}`}
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-6 text-balance">
            Pret a donner vie a{" "}
            <span className="gradient-text">votre projet</span> ?
          </h2>
          <p className="text-lg text-muted-foreground mb-16">
            Envoyez-nous un email pour discuter de votre projet. Reponse garantie sous 24h.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div ref={cardsRef} className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className={`flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-background hover:shadow-lg hover:shadow-primary/5 hover-lift animate-scale-in delay-1 ${cardsVisible ? "visible" : ""}`}>
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Email</p>
              <a href="mailto:eleisawy19@gmail.com" className="text-sm font-semibold text-foreground hover:text-primary transition-colors duration-300">
                eleisawy19@gmail.com
              </a>
            </div>

            <div className={`flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-background hover:shadow-lg hover:shadow-primary/5 hover-lift animate-scale-in delay-2 ${cardsVisible ? "visible" : ""}`}>
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Localisation</p>
              <p className="text-sm font-semibold text-foreground">France - A distance</p>
            </div>

            {/* <div className={`flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-background hover:shadow-lg hover:shadow-primary/5 hover-lift animate-scale-in delay-3 ${cardsVisible ? "visible" : ""}`}>
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                <ArrowUpRight className="h-5 w-5 text-primary" />
              </div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Portfolio</p>
              <Link
                href="https://votre-portfolio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors duration-300"
              >
                Voir mes projets
              </Link>
            </div> */}
          </div>

          <div
            ref={btnRef}
            className={`text-center animate-scale-in delay-4 ${btnVisible ? "visible" : ""}`}
          >
            <a
              href="mailto:eleisawy19@gmail.com"
              className="gradient-btn inline-flex items-center gap-2 text-primary-foreground font-semibold px-10 py-4 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:scale-105 active:scale-95"
            >
              Envoyer un email
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
