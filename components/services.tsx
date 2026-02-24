"use client"

import { useState } from "react"
import {
  Code2,
  Search,
  Settings,
  ArrowRight,
  Layers,
  BarChart3,
  RefreshCw,
  CheckCircle2,
  Monitor,
  Smartphone,
  Globe,
  ShieldCheck,
  Gauge,
  FileSearch,
  Clock,
  HeadphonesIcon,
  DatabaseBackup,
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    id: "dev",
    icon: Code2,
    title: "Developpement Web",
    subtitle: "Creez votre presence en ligne",
    description:
      "Sites vitrines, e-commerce et applications web sur mesure. Nous utilisons les technologies les plus modernes pour creer des solutions performantes, esthetiques et parfaitement adaptees a votre activite.",
    features: [
      { icon: Monitor, label: "Sites vitrines & landing pages" },
      { icon: Globe, label: "Applications React / Next.js" },
      { icon: Smartphone, label: "Design responsive mobile-first" },
      { icon: Layers, label: "Integration CMS & e-commerce" },
    ],
    preview: {
      lines: [
        { color: "bg-primary/60", width: "w-3/4" },
        { color: "bg-muted-foreground/20", width: "w-full" },
        { color: "bg-muted-foreground/20", width: "w-5/6" },
        { color: "bg-primary/30", width: "w-2/3" },
        { color: "bg-muted-foreground/15", width: "w-full" },
        { color: "bg-muted-foreground/15", width: "w-4/5" },
      ],
      blocks: ["bg-primary/10", "bg-violet-500/10", "bg-blue-500/10"],
    },
  },
  {
    id: "audit",
    icon: Search,
    title: "Audit Technique",
    subtitle: "Optimisez l'existant",
    description:
      "Une analyse complete et detaillee de votre site web : performance, securite, referencement et accessibilite. Recevez un rapport clair avec un plan d'action concret pour ameliorer votre presence en ligne.",
    features: [
      { icon: ShieldCheck, label: "Audit de securite complet" },
      { icon: Gauge, label: "Analyse de performance" },
      { icon: BarChart3, label: "Optimisation SEO" },
      { icon: FileSearch, label: "Rapport detaille & plan d'action" },
    ],
    preview: {
      lines: [
        { color: "bg-emerald-500/50", width: "w-[92%]" },
        { color: "bg-amber-500/50", width: "w-[68%]" },
        { color: "bg-primary/50", width: "w-[85%]" },
        { color: "bg-emerald-500/50", width: "w-[95%]" },
        { color: "bg-red-400/40", width: "w-[42%]" },
        { color: "bg-emerald-500/50", width: "w-[78%]" },
      ],
      blocks: ["bg-emerald-500/10", "bg-amber-500/10", "bg-red-400/10"],
    },
  },
  {
    id: "maintenance",
    icon: Settings,
    title: "Maintenance & Support",
    subtitle: "Restez serein au quotidien",
    description:
      "Gardez votre site a jour, securise et performant sans effort. Un accompagnement continu avec des mises a jour regulieres, des sauvegardes automatiques et un support reactif quand vous en avez besoin.",
    features: [
      { icon: RefreshCw, label: "Mises a jour & correctifs" },
      { icon: DatabaseBackup, label: "Sauvegardes automatiques" },
      { icon: Clock, label: "Monitoring 24/7" },
      { icon: HeadphonesIcon, label: "Support technique prioritaire" },
    ],
    preview: {
      lines: [
        { color: "bg-emerald-500/50", width: "w-full" },
        { color: "bg-emerald-500/50", width: "w-full" },
        { color: "bg-emerald-500/50", width: "w-full" },
        { color: "bg-primary/40", width: "w-[90%]" },
        { color: "bg-emerald-500/50", width: "w-full" },
        { color: "bg-emerald-500/50", width: "w-full" },
      ],
      blocks: ["bg-emerald-500/10", "bg-primary/10", "bg-emerald-500/10"],
    },
  },
]

const miniServices = [
  { icon: Layers, label: "UI/UX Design" },
  { icon: BarChart3, label: "SEO & Analytics" },
  { icon: RefreshCw, label: "Refonte de site" },
]

export function Services() {
  const [activeService, setActiveService] = useState(0)
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({
    threshold: 0.05,
  })
  const { ref: miniRef, isVisible: miniVisible } = useScrollAnimation({
    threshold: 0.2,
  })

  const current = services[activeService]

  return (
    <section id="services" className="py-28 lg:py-36 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 animate-fade-up ${titleVisible ? "visible" : ""}`}
        >
          <div className="max-w-2xl">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10">
              Nos expertises
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight text-balance">
              Des services{" "}
              <span className="gradient-text">complets</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed lg:text-right">
            {"Une offre pensee pour couvrir tous vos besoins digitaux, de la creation a la maintenance."}
          </p>
        </div>

        {/* Interactive Tabs */}
        <div
          ref={contentRef}
          className={`animate-fade-up delay-1 ${contentVisible ? "visible" : ""}`}
        >
          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            {services.map((service, index) => {
              const Icon = service.icon
              const isActive = index === activeService
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`group relative flex items-center gap-3 px-6 py-4 rounded-2xl text-left transition-all duration-400 flex-1 ${
                    isActive
                      ? "bg-foreground text-background shadow-lg shadow-foreground/10"
                      : "bg-background border border-border text-foreground hover:border-primary/30 hover:shadow-md"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isActive
                        ? "bg-background/15"
                        : "bg-secondary group-hover:bg-primary/10"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 transition-all duration-300 ${
                        isActive
                          ? "text-background"
                          : "text-primary"
                      } ${service.id === "maintenance" && isActive ? "animate-[spin_3s_linear_infinite]" : ""}`}
                    />
                  </div>
                  <div>
                    <p className={`font-bold text-sm ${isActive ? "text-background" : "text-foreground"}`}>
                      {service.title}
                    </p>
                    <p className={`text-xs mt-0.5 ${isActive ? "text-background/60" : "text-muted-foreground"}`}>
                      {service.subtitle}
                    </p>
                  </div>
                  {isActive && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-foreground rotate-45 rounded-sm hidden sm:block" />
                  )}
                </button>
              )
            })}
          </div>

          {/* Content Panel */}
          <div
            key={current.id}
            className="grid lg:grid-cols-5 gap-6 rounded-3xl border border-border bg-background p-8 lg:p-10 shadow-sm animate-[hero-fade-up_0.5s_cubic-bezier(0.16,1,0.3,1)_both]"
          >
            {/* Left - Description & Features */}
            <div className="lg:col-span-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <current.icon className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                    {current.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
                  {current.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {current.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="group/feat flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-300"
                      style={{
                        animationDelay: `${idx * 80 + 200}ms`,
                      }}
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/feat:scale-110 transition-transform duration-300">
                        <feature.icon className="h-4.5 w-4.5 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {feature.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="mailto:eleisawy19@gmail.com"
                className="inline-flex items-center gap-2 mt-8 text-primary font-semibold text-sm group/cta hover:gap-3 transition-all duration-300"
              >
                Demander un devis gratuit
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
              </a>
            </div>

            {/* Right - Visual Showcase */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {/* Main visual card */}
              <div className="relative rounded-2xl overflow-hidden flex-1 min-h-[320px] bg-gradient-to-br from-[#1a2744] via-[#1e3058] to-[#2a1f5e] p-8 flex flex-col justify-between">
                {/* Floating decorative elements */}
                <div className="absolute top-6 right-6 w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 rotate-12 animate-float" />
                <div className="absolute bottom-16 right-16 w-14 h-14 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/20 animate-float-slow" />
                <div className="absolute top-1/2 right-1/3 w-8 h-8 rounded-lg bg-violet-500/15 border border-violet-500/10 -rotate-6 animate-float" />

                {/* Icon display */}
                <div className="relative z-10">
                  <div
                    className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center mb-6"
                    style={{ animation: "hero-fade-up 0.5s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}
                  >
                    <current.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Feature highlights as floating pills */}
                  <div className="flex flex-wrap gap-2">
                    {current.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 text-xs font-medium"
                        style={{
                          animation: `hero-fade-up 0.4s cubic-bezier(0.16,1,0.3,1) ${idx * 80 + 300}ms both`,
                        }}
                      >
                        <feature.icon className="h-3 w-3" />
                        {feature.label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom info */}
                <div
                  className="relative z-10 mt-8 pt-6 border-t border-white/10"
                  style={{ animation: "hero-fade-up 0.5s cubic-bezier(0.16,1,0.3,1) 0.6s both" }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-lg">{current.title}</p>
                      <p className="text-white/50 text-sm mt-0.5">{current.subtitle}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Status bar */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-xs font-semibold text-foreground">
                    {current.id === "dev" && "Technologies modernes, performances optimales"}
                    {current.id === "audit" && "25+ points de controle analyses"}
                    {current.id === "maintenance" && "Tous les systemes operationnels"}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {current.id === "dev" && "React, Next.js, Tailwind CSS"}
                    {current.id === "audit" && "Performance, SEO, Securite, Accessibilite"}
                    {current.id === "maintenance" && "Monitoring continu & support reactif"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional mini services */}
        <div ref={miniRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          {miniServices.map((service, index) => (
            <div
              key={index}
              className={`group flex items-center gap-3 p-5 rounded-2xl border border-border bg-background hover:shadow-lg hover:shadow-primary/5 hover-lift animate-scale-in delay-${index + 1} ${miniVisible ? "visible" : ""}`}
            >
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                <service.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="font-semibold text-sm text-foreground">
                {service.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
