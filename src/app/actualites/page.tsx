import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
  const featuredArticle = articles[0]!;
  const remainingArticles = articles.slice(1);
  const categories = Array.from(new Set(articles.map((article) => article.category)));

  return (
    <PageFrame>
      <section className="section-shell py-16">
        <Eyebrow>Actualités</Eyebrow>
        <h1 className="balanced mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Articles sur l'infertilité, la PMA, la FIV et le soutien émotionnel.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          RhéaEspoir publie des contenus pédagogiques pour aider les couples au Cameroun
          à mieux comprendre les causes d'infertilité, les traitements de fertilité, les
          démarches de PMA et l'impact émotionnel du parcours.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <span key={category} className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-medium text-[var(--teal)]">
              {category}
            </span>
          ))}
        </div>

        <Link
          href={`/actualites/${featuredArticle.slug}`}
          className="group mt-10 grid overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-[var(--line)] lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="relative min-h-[320px] overflow-hidden">
            <Image src={featuredArticle.image} alt={featuredArticle.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition duration-300 group-hover:scale-105" />
          </div>
          <div className="flex flex-col justify-center p-7 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--rose)]">
              À lire en premier · {featuredArticle.category}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{featuredArticle.title}</h2>
            <p className="mt-4 leading-8 text-[var(--muted)]">{featuredArticle.excerpt}</p>
            <span className="mt-6 text-sm font-semibold text-[var(--teal)]">Lire l'article</span>
          </div>
        </Link>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {remainingArticles.map((article) => (
            <Link key={article.slug} href={`/actualites/${article.slug}`} className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-[var(--line)]">
              <div className="relative h-56 overflow-hidden">
                <Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-300 group-hover:scale-105" />
              </div>
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
