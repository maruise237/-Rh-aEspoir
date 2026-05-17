import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, PageFrame } from "@/components/site";
import { forumStats, forumTopics } from "@/lib/data";

export const metadata: Metadata = {
  title: "Forum infertilité et fertilité",
  description:
    "Forum RhéaEspoir en lecture seule avec astuces de fertilité, hygiène de vie, alimentation et soutien communautaire autour de l'infertilité.",
  alternates: {
    canonical: "/forum",
  },
};

export default function ForumPage() {
  return (
    <PageFrame>
      <section className="section-shell py-16">
        <Eyebrow>Forum vitrine</Eyebrow>
        <h1 className="balanced mt-4 max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
          Un espace communautaire archivé, prêt pour une future V2 interactive.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          Pour ce lancement, le forum est volontairement en lecture seule : aucune
          inscription, aucun compte et aucune donnée utilisateur stockée.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {forumStats.map((stat) => (
            <div key={stat.label} className="rounded-3xl bg-white p-6 ring-1 ring-[var(--line)]">
              <p className="text-3xl font-semibold text-[var(--teal)]">{stat.value}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl bg-white ring-1 ring-[var(--line)]">
          {forumTopics.map((topic) => (
            <Link key={topic.slug} href={`/forum/${topic.slug}`} className="block p-7 hover:bg-[#fff3eb]">
              <p className="text-sm font-semibold text-[var(--rose)]">{topic.author} · {topic.date}</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">{topic.title}</h2>
              <p className="mt-3 leading-7 text-[var(--muted)]">{topic.body}</p>
              <p className="mt-4 text-sm font-medium text-[var(--teal)]">
                {topic.replies} réponse · {topic.views} vues
              </p>
            </Link>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}
