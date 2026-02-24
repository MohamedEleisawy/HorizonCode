"use client"

import Link from "next/link"
import { Logo } from "./logo"
import { ArrowUpRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const navigation = {
  main: [
    { name: "Services", href: "#services" },
    { name: "Tarifs", href: "#tarifs" },
    { name: "A propos", href: "#apropos" },
    { name: "Contact", href: "#contact" },
    // { name: "Portfolio", href: "https://votre-portfolio.com", external: true },
  ],
  services: [
    { name: "Developpement Web", href: "#services" },
    { name: "Audit Technique", href: "#services" },
    { name: "Maintenance", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
    { name: "SEO", href: "#services" },
  ],
}

export function Footer() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <footer ref={ref} className="border-t border-border">
      <div className={`mx-auto max-w-7xl px-6 lg:px-8 py-16 animate-fade-up ${isVisible ? "visible" : ""}`}>
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Logo />
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed mt-6">
              Des sites web modernes, performants et tendance a prix accessibles.
              La qualite premium, sans le prix premium.
            </p>
            <a
              href="mailto:eleisawy19@gmail.com"
              className="inline-block mt-6 text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-300"
            >
              eleisawy19@gmail.com
            </a>
          </div>

          <div>
            <h3 className="font-bold text-foreground text-sm uppercase tracking-wider mb-5">Navigation</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-300 flex items-center gap-1 inline-flex"
                  >
                    {item.name}
                    {item.external && <ArrowUpRight className="h-3 w-3" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground text-sm uppercase tracking-wider mb-5">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} HorizonCode. Tous droits reserves.
          </p>
          <div className="flex gap-8">
            <Link href="/mentions-legales" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300">
              Mentions legales
            </Link>
            <Link href="/confidentialite" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300">
              Confidentialite
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
