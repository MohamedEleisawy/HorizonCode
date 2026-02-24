import Link from "next/link"
import type { Metadata } from "next"
import { Logo } from "@/components/logo"
import { ArrowLeft, Shield, Eye, Cookie, Lock, UserCheck, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Politique de Confidentialite | HorizonCode",
  description: "Politique de confidentialite du site HorizonCode - Protection de vos donnees personnelles.",
}

const sections = [
  {
    icon: Eye,
    title: "1. Collecte des donnees",
    content: [
      "Dans le cadre de son activite, HorizonCode est amenee a collecter les donnees suivantes lorsque vous nous contactez par email :",
    ],
    list: [
      "Nom et prenom",
      "Adresse email",
      "Toute information que vous nous communiquez volontairement par email",
    ],
    extra: "Aucune donnee personnelle n'est collectee automatiquement lors de la simple navigation sur le site, a l'exception des donnees anonymisees liees aux cookies d'analyse (voir section Cookies).",
  },
  {
    icon: Lock,
    title: "2. Utilisation des donnees",
    content: [
      "Les donnees personnelles collectees sont utilisees exclusivement dans le cadre suivant :",
    ],
    list: [
      "Repondre a vos demandes de contact et de devis",
      "Assurer le suivi de la relation commerciale",
      "Ameliorer nos services et votre experience utilisateur",
    ],
    extra: "HorizonCode s'engage a ne jamais vendre, louer ou ceder vos donnees personnelles a des tiers sans votre consentement prealable.",
  },
  {
    icon: Shield,
    title: "3. Protection des donnees",
    content: [
      "HorizonCode met en oeuvre toutes les mesures techniques et organisationnelles necessaires pour garantir la securite et la confidentialite de vos donnees personnelles, et notamment empecher qu'elles soient deformees, endommagees ou que des tiers non autorises y aient acces.",
    ],
  },
  {
    icon: UserCheck,
    title: "4. Vos droits",
    content: [
      "Conformement au Reglement General sur la Protection des Donnees (RGPD) et a la loi Informatique et Libertes, vous disposez des droits suivants concernant vos donnees personnelles :",
    ],
    list: [
      "Droit d'acces : obtenir la confirmation que vos donnees sont traitees et en obtenir une copie",
      "Droit de rectification : demander la correction de donnees inexactes ou incompletes",
      "Droit a l'effacement : demander la suppression de vos donnees dans les conditions prevues par la loi",
      "Droit a la portabilite : recevoir vos donnees dans un format structure et couramment utilise",
      "Droit d'opposition : vous opposer au traitement de vos donnees pour des motifs legitimes",
    ],
    extra: "Pour exercer ces droits, vous pouvez nous contacter a l'adresse : eleisawy19@gmail.com. Nous nous engageons a repondre dans un delai maximum de 30 jours.",
  },
  {
    icon: Cookie,
    title: "5. Cookies",
    content: [
      "Le site HorizonCode utilise Vercel Analytics pour mesurer l'audience du site. Ce service utilise des cookies strictement anonymes qui ne permettent pas d'identifier les visiteurs.",
    ],
    list: [
      "Cookies d'analyse (Vercel Analytics) : mesure d'audience anonyme, performances du site",
      "Cookies fonctionnels : necessaires au bon fonctionnement du site (preferences de navigation)",
    ],
    extra: "Aucun cookie publicitaire ou de tracking n'est utilise. Vous pouvez a tout moment desactiver les cookies via les parametres de votre navigateur.",
  },
  {
    icon: Mail,
    title: "6. Contact",
    content: [
      "Pour toute question relative a la presente politique de confidentialite ou pour toute demande relative a vos donnees personnelles, vous pouvez nous contacter :",
    ],
    extra: "Par email : eleisawy19@gmail.com",
  },
]

export default function Confidentialite() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-6 flex items-center justify-between">
          <Link href="/" aria-label="Retour a l'accueil">
            <Logo />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au site
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
        <div className="mb-12">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10">
            Protection des donnees
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight text-balance">
            Politique de confidentialite
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Derniere mise a jour : {new Date().toLocaleDateString("fr-FR", { month: "long", year: "numeric" })}
          </p>
        </div>

        {/* Intro */}
        <div className="p-6 sm:p-8 rounded-2xl bg-primary/5 border border-primary/10 mb-12">
          <p className="text-foreground leading-relaxed">
            Chez HorizonCode, la protection de vos donnees personnelles est une priorite. Cette politique de confidentialite a pour objectif de vous informer sur la maniere dont nous collectons, utilisons et protegeons vos informations lorsque vous utilisez notre site web.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <section
              key={section.title}
              className="p-6 sm:p-8 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <section.icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground pt-1.5">
                  {section.title}
                </h2>
              </div>

              {section.content.map((paragraph, idx) => (
                <p key={idx} className="text-muted-foreground leading-relaxed mb-4 ml-14">
                  {paragraph}
                </p>
              ))}

              {section.list && (
                <ul className="ml-14 mb-4 space-y-2">
                  {section.list.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.extra && (
                <p className="text-muted-foreground leading-relaxed ml-14">
                  {section.title === "6. Contact" ? (
                    <>
                      {"Par email : "}
                      <a
                        href="mailto:eleisawy19@gmail.com"
                        className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
                      >
                        eleisawy19@gmail.com
                      </a>
                    </>
                  ) : (
                    section.extra
                  )}
                </p>
              )}
            </section>
          ))}
        </div>

        {/* RGPD Note */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-muted/50 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-3">
            Conformite RGPD
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            HorizonCode s&apos;engage a respecter le Reglement General sur la Protection des Donnees (RGPD - UE 2016/679) entre en application le 25 mai 2018, ainsi que la loi Informatique et Libertes du 6 janvier 1978 modifiee. Si vous estimez que vos droits ne sont pas respectes, vous pouvez adresser une reclamation a la CNIL (Commission Nationale de l&apos;Informatique et des Libertes) via{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
            >
              www.cnil.fr
            </a>.
          </p>
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour a l&apos;accueil
          </Link>
          <Link
            href="/mentions-legales"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Mentions legales
          </Link>
        </div>
      </main>
    </div>
  )
}
