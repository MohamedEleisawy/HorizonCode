import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-gradient-to-br from-primary/5 to-purple-200/10 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 left-[5%] w-96 h-96 rounded-full bg-gradient-to-tr from-indigo-100/20 to-violet-100/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 left-1/2 w-64 h-64 rounded-full bg-gradient-to-b from-blue-50/30 to-transparent blur-2xl animate-pulse-glow" style={{ animationDelay: "3.5s" }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-hero-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-medium text-muted-foreground mb-8 border border-border">
            <Sparkles className="h-4 w-4 text-primary" />
            Agence digitale nouvelle generation
          </div>

          <h1 className="animate-hero-2 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[1.05] text-balance">
            Des sites web{" "}
            {/* <span className="gradient-text">tendance</span> */}
            <br />
            <span className="gradient-text">a prix accessible </span>
          </h1>

          <p className="animate-hero-3 mt-8 text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            HorizonCode conçoit des sites modernes, performants et au design actuel qui captent
            l{"'"}attention de vos clients. La qualite premium, sans le prix premium.
          </p>

          <div className="animate-hero-4 mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:eleisawy19@gmail.com"
              className="gradient-btn text-primary-foreground font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              Demarrer un projet
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              href="#services"
              className="text-foreground font-semibold px-8 py-4 rounded-full text-base border border-border hover:bg-muted hover:border-primary/30 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Decouvrir nos services
            </Link>
          </div>
        </div>

        {/* Floating glass cards with staggered float animation */}
        <div className="animate-hero-cards hidden lg:flex items-center justify-center gap-6 mt-20">
          <div className="animate-float glass-card rounded-2xl px-6 py-4 flex items-center gap-3 shadow-lg hover-lift" style={{ animationDelay: "0s" }}>
            <div className="w-10 h-10 rounded-xl gradient-btn flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">{"</>"}</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Code moderne</p>
              <p className="text-xs text-muted-foreground">React, Next.js, Tailwind</p>
            </div>
          </div>
          <div className="animate-float glass-card rounded-2xl px-6 py-4 flex items-center gap-3 shadow-lg hover-lift" style={{ animationDelay: "0.8s" }}>
            <div className="w-10 h-10 rounded-xl bg-foreground flex items-center justify-center">
              <span className="text-background font-bold text-lg">A</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Design tendance</p>
              <p className="text-xs text-muted-foreground">Moderne et attractif</p>
            </div>
          </div>
          <div className="animate-float glass-card rounded-2xl px-6 py-4 flex items-center gap-3 shadow-lg hover-lift" style={{ animationDelay: "1.6s" }}>
            <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">24h</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Reponse rapide</p>
              <p className="text-xs text-muted-foreground">Support reactif</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
