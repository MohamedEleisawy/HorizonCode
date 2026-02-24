import Link from "next/link"
import type { Metadata } from "next"
import { Logo } from "@/components/logo"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Mentions Legales | HorizonCode",
  description: "Mentions legales du site HorizonCode - Agence digitale premium.",
}

export default function MentionsLegales() {
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
            Informations legales
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight text-balance">
            Mentions legales
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Derniere mise a jour : {new Date().toLocaleDateString("fr-FR", { month: "long", year: "numeric" })}
          </p>
        </div>

        <div className="prose-custom">
          {/* Section 1 */}
          <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-card border border-border">
            <h2 className="text-xl font-bold text-foreground mb-4">
              1. Editeur du site
            </h2>
            <div className="space-y-2 text-muted-foreground leading-relaxed">
              <p><span className="font-semibold text-foreground">Denomination :</span> HorizonCode</p>
              <p><span className="font-semibold text-foreground">Forme juridique :</span> Micro-entreprise / Entreprise individuelle</p>
              <p><span className="font-semibold text-foreground">Responsable de la publication :</span> HorizonCode</p>
              <p><span className="font-semibold text-foreground">Email :</span>{" "}
                <a href="mailto:eleisawy19@gmail.com" className="text-primary hover:text-primary/80 transition-colors duration-300">
                  eleisawy19@gmail.com
                </a>
              </p>
              <p><span className="font-semibold text-foreground">Activite :</span> Agence de services informatiques - Developpement web, audit technique, maintenance</p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-card border border-border">
            <h2 className="text-xl font-bold text-foreground mb-4">
              2. Hebergement
            </h2>
            <div className="space-y-2 text-muted-foreground leading-relaxed">
              <p><span className="font-semibold text-foreground">Hebergeur :</span> Vercel Inc.</p>
              <p><span className="font-semibold text-foreground">Adresse :</span> 440 N Baxter St, Los Angeles, CA 90004, Etats-Unis</p>
              <p><span className="font-semibold text-foreground">Site web :</span>{" "}
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors duration-300">
                  vercel.com
                </a>
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-card border border-border">
            <h2 className="text-xl font-bold text-foreground mb-4">
              3. Propriete intellectuelle
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              L&apos;ensemble du contenu de ce site (textes, images, logos, icones, elements graphiques, design, structure) est la propriete exclusive de HorizonCode ou de ses partenaires. Toute reproduction, distribution, modification ou utilisation de ces elements sans autorisation ecrite prealable est strictement interdite et pourrait constituer une contrefacon sanctionnee par le Code de la propriete intellectuelle.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-card border border-border">
            <h2 className="text-xl font-bold text-foreground mb-4">
              4. Limitation de responsabilite
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              HorizonCode s&apos;efforce de fournir sur ce site des informations aussi precises que possible. Toutefois, HorizonCode ne pourra etre tenu responsable des omissions, inexactitudes ou des carences dans la mise a jour de ces informations, qu&apos;elles soient de son fait ou du fait des tiers partenaires qui fournissent ces informations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Toutes les informations indiquees sur le site sont donnees a titre indicatif et sont susceptibles d&apos;evoluer. Par ailleurs, les renseignements figurant sur le site ne sont pas exhaustifs. Ils sont donnes sous reserve de modifications ayant ete apportees depuis leur mise en ligne.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-card border border-border">
            <h2 className="text-xl font-bold text-foreground mb-4">
              5. Liens hypertextes
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Le site HorizonCode peut contenir des liens hypertextes vers d&apos;autres sites internet. Cependant, HorizonCode n&apos;a pas la possibilite de verifier le contenu des sites ainsi visites et n&apos;assumera en consequence aucune responsabilite de ce fait. La navigation sur ces sites tiers se fait sous la seule responsabilite de l&apos;utilisateur.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-card border border-border">
            <h2 className="text-xl font-bold text-foreground mb-4">
              6. Cookies
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Le site HorizonCode peut utiliser des cookies a des fins de mesure d&apos;audience et de performances (Vercel Analytics). Ces cookies ne collectent aucune donnee personnelle identifiable et servent uniquement a ameliorer l&apos;experience de navigation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Vous pouvez configurer votre navigateur pour refuser les cookies. Cependant, cela pourrait affecter certaines fonctionnalites du site.
            </p>
          </section>

          {/* Section 7 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-card border border-border">
            <h2 className="text-xl font-bold text-foreground mb-4">
              7. Droit applicable
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Tout litige en relation avec l&apos;utilisation du site HorizonCode est soumis au droit francais. Il est fait attribution exclusive de juridiction aux tribunaux competents.
            </p>
          </section>
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
            href="/confidentialite"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Politique de confidentialite
          </Link>
        </div>
      </main>
    </div>
  )
}
