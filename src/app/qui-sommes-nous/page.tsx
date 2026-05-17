import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink, Eyebrow, PageFrame } from "@/components/site";
import { architectNotes, values, visuals, whatsappUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "Association infertilité au Cameroun",
  description:
    "Découvrez RhéaEspoir Cameroun, association à Yaoundé dédiée à l'information sur l'infertilité, la PMA, l'adoption et la santé mentale.",
  alternates: {
    canonical: "/qui-sommes-nous",
  },
};

export default function AboutPage() {
  return (
    <PageFrame>
      <section className="section-shell grid gap-10 py-16 md:py-24 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <div className="reveal">
          <Eyebrow>Qui sommes-nous</Eyebrow>
          <h1 className="balanced mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Une association née pour rompre l'isolement autour de l'infertilité.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
            RhéaEspoir Cameroun est une association à but non lucratif et apolitique
            basée à Yaoundé. Elle rend accessible l'information sur l'infertilité, la
            procréation médicalement assistée, l'adoption et la santé mentale, dans le
            respect du parcours intime de chaque personne.
          </p>
          <p className="mt-4 text-base leading-8 text-[var(--muted)]">
            Nous croyons que chaque couple en quête de parentalité mérite des réponses
            fiables, une écoute attentive et un espace où les tabous peuvent être nommés
            sans honte.
          </p>
          <div className="mt-8">
            <ButtonLink href={whatsappUrl()} target="_blank">Contacter l'équipe</ButtonLink>
          </div>
        </div>
        <div className="premium-shell reveal reveal-delay-1 overflow-hidden rounded-[2rem] p-2">
          <div className="relative h-[420px] overflow-hidden rounded-[calc(2rem-0.5rem)] md:h-[520px]">
            <Image src={visuals.care} alt="Professionnels de santé et accompagnement" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-white/70 py-20 md:py-28">
        <div className="section-shell grid gap-6 lg:grid-cols-[1.1fr_0.95fr_0.95fr]">
          <article className="premium-shell reveal rounded-[2rem] p-2">
            <div className="premium-core h-full rounded-[calc(2rem-0.5rem)] p-8">
            <h2 className="text-2xl font-semibold">Notre mission</h2>
            <p className="mt-4 leading-8 text-[var(--muted)]">
              Vulgariser les connaissances sur la PMA et les options d'adoption, faciliter
              l'accès à l'information et sensibiliser à la santé mentale, souvent négligée
              dans le parcours vers la parentalité.
            </p>
            </div>
          </article>
          <article className="premium-shell reveal reveal-delay-1 rounded-[2rem] p-2">
            <div className="premium-core h-full rounded-[calc(2rem-0.5rem)] p-8">
            <h2 className="text-2xl font-semibold">Notre public</h2>
            <p className="mt-4 leading-8 text-[var(--muted)]">
              Couples, femmes, hommes, proches, professionnels de santé et bienfaiteurs
              qui veulent comprendre, soutenir ou contribuer à une communauté plus solidaire.
            </p>
            </div>
          </article>
          <article className="premium-shell reveal reveal-delay-2 rounded-[2rem] p-2">
            <div className="premium-core h-full rounded-[calc(2rem-0.5rem)] p-8">
            <h2 className="text-2xl font-semibold">Notre approche</h2>
            <p className="mt-4 leading-8 text-[var(--muted)]">
              Une plateforme confidentielle, des événements, des échanges avec une
              psychologue, des vidéos, reportages et ressources pour mieux comprendre les
              réalités de l'infertilité au Cameroun.
            </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section-shell grid gap-10 py-20 md:py-28 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <Eyebrow>Pourquoi RhéaEspoir</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight">
            Parce que devenir parent est un rêve légitime, mais parfois un chemin semé d'obstacles.
          </h2>
        </div>
        <div className="grid gap-4">
          {architectNotes.map((note, index) => (
            <article key={note.title} className={`rounded-3xl bg-white p-6 ring-1 ring-[var(--line)] reveal reveal-delay-${index + 1}`}>
              <h3 className="text-xl font-semibold tracking-tight">{note.title}</h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">{note.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-16 md:py-24">
        <Eyebrow>Valeurs</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight">
          Un cadre confidentiel, respectueux et profondément humain.
        </h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div key={value} className="rounded-2xl border border-[var(--line)] bg-white p-5 text-lg font-semibold text-[var(--teal)]">
              {value}
            </div>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}
