"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { Logo } from "./logo"

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Tarifs", href: "#tarifs" },
  { name: "A propos", href: "#apropos" },
  // { name: "Portfolio", href: "https://votre-portfolio.com", external: true },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`animate-slide-down fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          <Link href="#accueil" className="flex-shrink-0 transition-transform hover:scale-105 duration-300">
            <Logo />
          </Link>

          <div className="hidden md:flex md:items-center md:gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-1 group"
              >
                {item.name}
                {item.external && <ArrowUpRight className="h-3 w-3" />}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <a
              href="mailto:eleisawy19@gmail.com"
              className="gradient-btn text-primary-foreground text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 active:scale-95"
            >
              Nous contacter
            </a>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-foreground transition-transform active:scale-90"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Ouvrir le menu</span>
            <div className="relative w-6 h-6">
              <Menu className={`h-6 w-6 absolute transition-all duration-300 ${mobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`} />
              <X className={`h-6 w-6 absolute transition-all duration-300 ${mobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`} />
            </div>
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
            mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-6 border-t border-border">
            <div className="flex flex-col gap-5">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-all duration-300 flex items-center gap-1 hover:translate-x-2"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms" }}
                >
                  {item.name}
                  {item.external && <ArrowUpRight className="h-3 w-3" />}
                </Link>
              ))}
              <a
                href="mailto:eleisawy19@gmail.com"
                className="gradient-btn text-primary-foreground text-sm font-semibold px-6 py-2.5 rounded-full w-fit"
                onClick={() => setMobileMenuOpen(false)}
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
