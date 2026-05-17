import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { ShareButton } from "@/components/share-actions";
import { ButtonLink, Eyebrow, PageFrame } from "@/components/site";
import { articles, whatsappUrl } from "@/lib/data";
import { absoluteUrl, breadcrumbJsonLd, organizationJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/actualites/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      locale: "fr_CM",
      url: absoluteUrl(`/actualites/${article.slug}`),
      publishedTime: article.date,
      authors: ["RhéaEspoir Cameroun"],
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <PageFrame>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.excerpt,
          image: absoluteUrl(article.image),
          author: organizationJsonLd(),
          publisher: organizationJsonLd(),
          mainEntityOfPage: absoluteUrl(`/actualites/${article.slug}`),
          inLanguage: "fr-CM",
          articleSection: article.category,
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Actualités", path: "/actualites" },
          { name: article.title, path: `/actualites/${article.slug}` },
        ])}
      />
      <article className="section-shell py-16">
        <div className="max-w-3xl">
          <Eyebrow>{article.category}</Eyebrow>
          <h1 className="balanced mt-4 text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
            {article.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <p className="text-sm font-medium text-[var(--muted)]">{article.date}</p>
            <ShareButton title={article.title} text={article.excerpt} compact />
          </div>
        </div>
        <div className="relative mt-10 h-[320px] overflow-hidden rounded-[2rem] shadow-2xl shadow-rose-950/10 md:h-[480px]">
          <Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 768px) 100vw, 1220px" className="object-cover" priority />
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-lg leading-9 text-[var(--muted)]">
          {article.body.map((paragraph) => (
            paragraph.startsWith("## ") ? (
              <h2 key={paragraph} className="pt-5 text-3xl font-semibold leading-tight tracking-tight text-[var(--foreground)]">
                {paragraph.replace("## ", "")}
              </h2>
            ) : (
              <p key={paragraph}>{paragraph}</p>
            )
          ))}
          <div className="rounded-3xl bg-white p-8 ring-1 ring-[var(--line)]">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">
              Besoin d'en parler ?
            </h2>
            <p className="mt-3 text-base leading-7">
              L'équipe RhéaEspoir peut vous orienter vers une écoute bienveillante et des
              ressources adaptées à votre situation.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <ButtonLink href={whatsappUrl()} target="_blank">Contacter via WhatsApp</ButtonLink>
              <ShareButton title={article.title} text={article.excerpt} />
            </div>
          </div>
        </div>
      </article>
    </PageFrame>
  );
}
