import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, PageFrame } from "@/components/site";
import { articles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Actualités infertilité, PMA et fertilité",
  description:
    "Articles RhéaEspoir sur l'infertilité au Cameroun, la PMA, la FIV, la fertilité féminine et masculine, et le soutien émotionnel.",
  alternates: {
    canonical: "/actualites",
  },
};

export default function NewsPage() {
  return (
    <PageFrame>
      <section className="section-shell py-16">
        <Eyebrow>Actualités</Eyebrow>
        <h1 className="balanced mt-4 max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
          Articles sur l'infertilité, la PMA, la FIV et le soutien émotionnel.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          RhéaEspoir publie des contenus pédagogiques pour aider les couples au Cameroun
          à mieux comprendre les causes d'infertilité, les traitements de fertilité, les
          démarches de PMA et l'impact émotionnel du parcours.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <Link key={article.slug} href={`/actualites/${article.slug}`} className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-[var(--line)]">
              <img src={article.image} alt={article.imageAlt} className="h-56 w-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--rose)]">
                  {article.category} · {article.date}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">{article.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}
