import Link from "next/link";
import Image from "next/image";
import { ButtonLink, Eyebrow, HeroImage, PageFrame } from "@/components/site";
import {
  architectNotes,
  articles,
  donationUrl,
  faqs,
  impactStats,
  journeySteps,
  seoTopics,
  services,
  values,
  visuals,
  whatsappUrl,
} from "@/lib/data";

export default function Home() {
  return (
    <PageFrame>
      <section className="section-shell grid gap-12 py-16 md:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="reveal">
          <Eyebrow>Association RhéaEspoir</Eyebrow>
          <h1 className="balanced mt-5 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-tight text-[var(--foreground)] sm:text-5xl md:text-7xl">
            Ne plus traverser l'infertilité dans le silence.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            RhéaEspoir Cameroun rend accessible l'information sur l'infertilité, la PMA,
            l'adoption et la santé mentale. L'association crée un point d'appui humain
            pour les personnes qui cherchent à devenir parents et qui ont besoin de
            réponses fiables, de confidentialité et d'une communauté bienveillante.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={whatsappUrl()} target="_blank">Parler à l'association</ButtonLink>
            <ButtonLink href={donationUrl} target="_blank" variant="secondary">Faire un don</ButtonLink>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {impactStats.map((stat, index) => (
              <div key={stat.label} className={`reveal reveal-delay-${index + 1} rounded-3xl border border-[var(--line)] bg-white/72 p-5`}>
                <p className="font-mono text-3xl font-semibold text-[var(--teal)]">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <HeroImage src={visuals.hero} alt="Couple accompagné dans un moment calme" />
      </section>

      <section className="bg-white/70 py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-start">
          <div className="reveal">
            <Eyebrow>Notre mission</Eyebrow>
            <h2 className="balanced mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Informer, soutenir, sensibiliser : trois gestes pour redonner de la clarté.
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-[var(--muted)]">
              L'ancien site parlait déjà de soutien psychologique, de groupes de soutien,
              de ressources éducatives et d'aides financières. La nouvelle version rend
              ces chemins plus lisibles, plus rapides à consulter et plus crédibles.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`premium-shell reveal reveal-delay-${index + 1} rounded-[2rem] p-2 ${index === 0 ? "md:row-span-2" : ""}`}
              >
                <div className="premium-core h-full rounded-[calc(2rem-0.5rem)] p-7">
                  <p className="font-mono text-sm text-[var(--rose)]">0{index + 1}</p>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight">{service.title}</h3>
                  <p className="mt-4 text-base leading-8 text-[var(--muted)]">{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-12 py-20 md:py-28 lg:grid-cols-[0.95fr_1fr] lg:items-center">
        <div className="premium-shell reveal overflow-hidden rounded-[2rem] p-2">
          <div className="relative h-[460px] overflow-hidden rounded-[calc(2rem-0.5rem)]">
            <Image src={visuals.support} alt="Illustration RhéaEspoir autour du soutien" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
        <div className="reveal reveal-delay-1">
          <Eyebrow>Accompagnement humain</Eyebrow>
          <h2 className="balanced mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Une présence pour les couples, les femmes, les hommes et les proches.
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--muted)]">
            L'infertilité ne se résume pas à des examens. Elle touche le couple, la famille,
            le regard social, la foi en soi et parfois le silence. RhéaEspoir crée un cadre
            où l'on peut parler sans jugement et avancer avec des ressources concrètes.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {values.map((value) => (
              <span key={value} className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-medium text-[var(--teal)]">
                {value}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4fbf8] py-20 md:py-28">
        <div className="section-shell">
          <div className="max-w-3xl">
            <Eyebrow>Parcours utilisateur</Eyebrow>
            <h2 className="balanced mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Le site doit aider quelqu'un à savoir quoi faire ensuite.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {journeySteps.map((step, index) => (
              <article key={step.title} className={`reveal reveal-delay-${(index % 3) + 1} rounded-[2rem] bg-white p-6 ring-1 ring-[var(--line)] md:even:mt-10`}>
                <p className="font-mono text-sm text-[var(--rose)]">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-10 py-20 md:py-28 lg:grid-cols-[1fr_0.82fr] lg:items-center">
        <div className="reveal">
          <Eyebrow>Notre approche</Eyebrow>
          <h2 className="balanced mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Un site plus rassurant parce qu'il explique clairement ses limites.
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-[var(--muted)]">
            Le sujet est sensible. Le copywriting ne doit pas vendre un miracle : il doit
            donner de l'espoir, rappeler la nécessité d'un avis médical et faciliter la
            première conversation avec l'association.
          </p>
        </div>
        <div className="grid gap-4">
          {architectNotes.map((note, index) => (
            <article key={note.title} className={`premium-shell reveal reveal-delay-${index + 1} rounded-[2rem] p-2`}>
              <div className="premium-core rounded-[calc(2rem-0.5rem)] p-6">
                <h3 className="text-xl font-semibold tracking-tight">{note.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{note.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white/72 py-20 md:py-28">
        <div className="section-shell">
          <div className="max-w-3xl">
            <Eyebrow>Ressources clés</Eyebrow>
            <h2 className="balanced mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Infertilité, PMA, FIV, adoption et santé mentale : les sujets à comprendre.
            </h2>
            <p className="mt-5 leading-8 text-[var(--muted)]">
              Ces ressources structurent le site pour aider les visiteurs à trouver vite
              le bon contenu, tout en renforçant le positionnement naturel sur les
              recherches liées à l'infertilité au Cameroun.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {seoTopics.map((topic, index) => (
              <Link
                key={topic.title}
                href={topic.href}
                className={`premium-shell reveal reveal-delay-${(index % 3) + 1} rounded-[2rem] p-2`}
              >
                <div className="premium-core h-full rounded-[calc(2rem-0.5rem)] p-7">
                  <h3 className="text-2xl font-semibold tracking-tight">{topic.title}</h3>
                  <p className="mt-4 leading-8 text-[var(--muted)]">{topic.text}</p>
                  <span className="mt-5 inline-flex text-sm font-semibold text-[var(--teal)]">
                    Lire la ressource
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1fr]">
          <div>
            <Eyebrow>Questions fréquentes</Eyebrow>
            <h2 className="balanced mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Répondre clairement aux premières recherches des couples.
            </h2>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-3xl bg-white p-6 ring-1 ring-[var(--line)]">
                <h3 className="text-xl font-semibold tracking-tight">{faq.question}</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#183d39] py-20 text-white md:py-28">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
                Actualités
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                Comprendre pour mieux avancer
              </h2>
            </div>
            <ButtonLink href="/actualites" variant="secondary">Voir les articles</ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-[1.2fr_0.9fr_0.9fr]">
            {articles.slice(0, 3).map((article, index) => (
              <Link key={article.slug} href={`/actualites/${article.slug}`} className={`group reveal reveal-delay-${index + 1} overflow-hidden rounded-3xl bg-white text-[var(--foreground)] ${index === 0 ? "md:row-span-2" : ""}`}>
                <div className="relative h-48 overflow-hidden">
                  <Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-300 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--rose)]">
                    {article.category}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">{article.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
