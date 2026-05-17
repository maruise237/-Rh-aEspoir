import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, PageFrame } from "@/components/site";
import { events } from "@/lib/data";

export const metadata: Metadata = {
  title: "Événements fertilité et soutien psychologique",
  description:
    "Ateliers et conférences RhéaEspoir à Yaoundé autour de la fertilité, de la PMA, du stress, du bien-être et du soutien aux couples infertiles.",
  alternates: {
    canonical: "/evenements",
  },
};

export default function EventsPage() {
  return (
    <PageFrame>
      <section className="section-shell py-16">
        <Eyebrow>Événements</Eyebrow>
        <h1 className="balanced mt-4 max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
          Des rencontres pour apprendre, respirer et se sentir entouré.
        </h1>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {events.map((event) => (
            <Link key={event.slug} href={`/evenements/${event.slug}`} className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-[var(--line)]">
              <img src={event.image} alt="" className="h-72 w-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="p-7">
                <p className="text-sm font-semibold text-[var(--rose)]">{event.date} · {event.place}</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">{event.title}</h2>
                <p className="mt-3 leading-7 text-[var(--muted)]">{event.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}
