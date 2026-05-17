import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { ButtonLink, Eyebrow, PageFrame } from "@/components/site";
import { events, whatsappUrl } from "@/lib/data";
import { absoluteUrl, breadcrumbJsonLd, organizationJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);
  if (!event) return {};
  return {
    title: event.title,
    description: event.excerpt,
    alternates: {
      canonical: `/evenements/${event.slug}`,
    },
    openGraph: {
      title: event.title,
      description: event.excerpt,
      type: "article",
      url: absoluteUrl(`/evenements/${event.slug}`),
      images: [{ url: event.image, width: 1200, height: 630, alt: event.title }],
    },
  };
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);
  if (!event) notFound();

  return (
    <PageFrame>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Event",
          name: event.title,
          description: event.excerpt,
          image: absoluteUrl(event.image),
          startDate: event.isoDate,
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          location: {
            "@type": "Place",
            name: event.place,
            address: {
              "@type": "PostalAddress",
              addressLocality: event.place,
              addressCountry: "CM",
            },
          },
          organizer: organizationJsonLd(),
          inLanguage: "fr-CM",
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Événements", path: "/evenements" },
          { name: event.title, path: `/evenements/${event.slug}` },
        ])}
      />
      <article className="section-shell py-16">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <div>
            <Eyebrow>Événement</Eyebrow>
            <h1 className="balanced mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              {event.title}
            </h1>
            <p className="mt-5 font-semibold text-[var(--rose)]">{event.date} · {event.place}</p>
          </div>
          <div className="relative h-[320px] overflow-hidden rounded-[2rem] shadow-2xl shadow-rose-950/10 md:h-[440px]">
            <Image src={event.image} alt={event.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-lg leading-9 text-[var(--muted)]">
          {event.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="pt-4">
            <ButtonLink href={whatsappUrl(undefined, `Bonjour RhéaEspoir, je souhaite des informations sur l'événement : ${event.title}`)} target="_blank">
              Demander des informations
            </ButtonLink>
          </div>
        </div>
      </article>
    </PageFrame>
  );
}
