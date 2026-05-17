import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ButtonLink, Eyebrow, PageFrame } from "@/components/site";
import { contact, donationUrl, phones, visuals, whatsappUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact RhéaEspoir Yaoundé",
  description:
    "Contactez RhéaEspoir à Yaoundé pour une première écoute autour de l'infertilité, de la PMA, de l'adoption ou du soutien psychologique.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <PageFrame>
      <section className="section-shell grid gap-10 py-16 md:py-24 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <div className="reveal">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="balanced mt-4 text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
            Une question, un doute, un besoin d'écoute : commencez par un message.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
            Le contact passe directement par WhatsApp pour réduire les obstacles :
            pas de compte, pas de formulaire compliqué, pas de données stockées dans une
            base du site. Vous écrivez, l'équipe vous répond et vous oriente.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={whatsappUrl()} target="_blank">Écrire sur WhatsApp</ButtonLink>
            <ButtonLink href={donationUrl} target="_blank" variant="secondary">Soutenir l'association</ButtonLink>
          </div>
        </div>
        <div className="premium-shell reveal reveal-delay-1 rounded-[2rem] p-2">
          <div className="relative h-[420px] overflow-hidden rounded-[calc(2rem-0.5rem)] md:h-[500px]">
            <Image src={visuals.calm} alt="Moment calme d'écoute et d'accompagnement" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-white/70 py-20 md:py-28">
        <div className="section-shell grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-[2rem] bg-[#183d39] p-8 text-white shadow-2xl shadow-teal-950/12">
            <h2 className="text-3xl font-semibold tracking-tight">Informations</h2>
            <div className="mt-7 grid gap-5 text-white/78">
              <p><span className="font-semibold text-white">Ville :</span> {contact.city}</p>
              <p><span className="font-semibold text-white">Email :</span> {contact.email}</p>
              <div>
                <p className="font-semibold text-white">Téléphones :</p>
                <div className="mt-2 grid gap-2">
                  {phones.map((phone) => (
                    <Link key={phone.wa} href={whatsappUrl(phone.wa)} target="_blank" className="hover:text-white">
                      {phone.label} · {phone.value}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 ring-1 ring-[var(--line)]">
            <h2 className="text-3xl font-semibold tracking-tight">Choisir un contact WhatsApp</h2>
            <p className="mt-3 leading-7 text-[var(--muted)]">
              Sélectionnez le contact le plus proche de votre besoin. Le message est
              prérempli pour vous aider à démarrer la conversation.
            </p>
            <div className="mt-6 grid gap-3">
              {phones.map((phone) => (
                <Link
                  key={phone.wa}
                  href={whatsappUrl(phone.wa)}
                  target="_blank"
                  className="flex flex-col justify-between gap-2 rounded-2xl border border-[var(--line)] p-5 hover:border-[var(--teal)]/40 hover:bg-[#f4fbf8] sm:flex-row sm:items-center"
                >
                  <span>
                    <span className="block font-semibold">{phone.label}</span>
                    <span className="text-sm text-[var(--muted)]">{phone.value}</span>
                  </span>
                  <span className="text-sm font-semibold text-[var(--teal)]">Ouvrir WhatsApp</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
