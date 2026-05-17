import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { Eyebrow, PageFrame } from "@/components/site";
import { forumTopics } from "@/lib/data";
import { absoluteUrl, breadcrumbJsonLd, organizationJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return forumTopics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = forumTopics.find((item) => item.slug === slug);
  if (!topic) return {};
  return {
    title: topic.title,
    description: `${topic.body} Forum RhéaEspoir en lecture seule sur la fertilité, l'hygiène de vie et l'accompagnement des couples.`,
    alternates: {
      canonical: `/forum/${topic.slug}`,
    },
    openGraph: {
      title: topic.title,
      description: topic.body,
      type: "article",
      url: absoluteUrl(`/forum/${topic.slug}`),
    },
  };
}

export default async function ForumTopicPage({ params }: Props) {
  const { slug } = await params;
  const topic = forumTopics.find((item) => item.slug === slug);
  if (!topic) notFound();

  return (
    <PageFrame>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "DiscussionForumPosting",
          headline: topic.title,
          articleBody: topic.body,
          datePublished: "2025",
          author: {
            "@type": "Person",
            name: topic.author,
          },
          publisher: organizationJsonLd(),
          mainEntityOfPage: absoluteUrl(`/forum/${topic.slug}`),
          inLanguage: "fr-CM",
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Forum", path: "/forum" },
          { name: topic.title, path: `/forum/${topic.slug}` },
        ])}
      />
      <section className="section-shell py-16">
        <Eyebrow>Forum en lecture seule</Eyebrow>
        <h1 className="balanced mt-4 max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
          {topic.title}
        </h1>
        <div className="mt-10 grid gap-5">
          <article className="rounded-3xl bg-white p-8 ring-1 ring-[var(--line)]">
            <p className="text-sm font-semibold text-[var(--rose)]">{topic.author} · {topic.date}</p>
            <p className="mt-4 text-lg leading-8 text-[var(--muted)]">{topic.body}</p>
            {"sections" in topic && (
              <div className="mt-6 space-y-5">
                {topic.sections.map((section) => (
                  <div key={section.title}>
                    <h2 className="text-2xl font-semibold tracking-tight">{section.title}</h2>
                    <ul className="mt-4 grid gap-3 text-base leading-7 text-[var(--muted)]">
                      {section.items.map((item) => (
                        <li key={item} className="rounded-2xl bg-[#fff9f5] p-4 ring-1 ring-[var(--line)]">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </article>
          <article className="ml-0 rounded-3xl bg-[#f4fbf8] p-8 ring-1 ring-[var(--line)] md:ml-12">
            <p className="text-sm font-semibold text-[var(--teal)]">Réponse archivée</p>
            <p className="mt-4 text-lg leading-8 text-[var(--muted)]">{topic.answer}</p>
          </article>
        </div>
      </section>
    </PageFrame>
  );
}
