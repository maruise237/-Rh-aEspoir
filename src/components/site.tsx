import Link from "next/link";
import Image from "next/image";
import { donationUrl, navItems, phones, visuals, whatsappUrl } from "@/lib/data";
import { MobileMenu } from "@/components/mobile-menu";
import { ScrollAnimator } from "@/components/scroll-animator";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)]/80 bg-[#fff9f5]/88 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.75)_inset]">
      <div className="section-shell flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-3" aria-label="RhéaEspoir accueil">
          <span className="grid size-12 place-items-center overflow-hidden rounded-2xl bg-white shadow-lg shadow-teal-900/10 ring-1 ring-[var(--line)]">
            <Image src={visuals.logo} alt="" width={48} height={48} className="h-full w-full object-contain p-1" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-semibold tracking-tight text-[var(--foreground)]">
              RhéaEspoir
            </span>
            <span className="block text-xs font-medium text-[var(--muted)]">
              Fertilité, écoute, espoir
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[var(--muted)] hover:bg-white hover:text-[var(--teal)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <Link
            href={donationUrl}
            className="hidden rounded-full border border-[var(--rose)]/25 px-4 py-2 text-sm font-semibold text-[var(--rose)] hover:bg-white sm:inline-flex"
            target="_blank"
          >
            Faire un don
          </Link>
          <Link
            href={whatsappUrl()}
            className="rounded-full bg-[var(--teal)] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-teal-900/15 hover:-translate-y-0.5 hover:bg-[#1c5d57]"
            target="_blank"
          >
            WhatsApp
          </Link>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[#183d39] text-white">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="text-2xl font-semibold tracking-tight">RhéaEspoir</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/72">
            Une communauté d'information, d'écoute et de solidarité pour les couples et
            familles touchés par l'infertilité, la PMA ou l'adoption.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
            Navigation
          </p>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/75 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
            Contact
          </p>
          <div className="mt-4 grid gap-2 text-sm text-white/75">
            {phones.map((phone) => (
              <Link key={phone.wa} href={whatsappUrl(phone.wa)} target="_blank" className="hover:text-white">
                {phone.value}
              </Link>
            ))}
            <span>Yaoundé, Cameroun</span>
          </div>
        </div>
      </div>
      <div className="section-shell flex flex-col gap-3 border-t border-white/10 py-5 text-xs text-white/58 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 RhéaEspoir. Tous droits réservés.</p>
        <p>
          Conception et développement par{" "}
          <Link
            href="https://kamtech.online"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-white underline decoration-white/25 underline-offset-4 hover:text-white/82"
          >
            Kamtech
          </Link>
        </p>
      </div>
    </footer>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="soft-noise js min-h-screen overflow-x-hidden">
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollAnimator />
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  target,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  target?: string;
}) {
  const styles = {
    primary:
      "bg-[var(--teal)] text-white shadow-xl shadow-teal-900/15 hover:-translate-y-0.5 hover:bg-[#1c5d57]",
    secondary:
      "bg-white text-[var(--foreground)] border border-[var(--line)] hover:-translate-y-0.5 hover:border-[var(--teal)]/30",
    quiet: "text-[var(--teal)] hover:text-[var(--rose)]",
  };

  return (
    <Link href={href} target={target} className={`group inline-flex items-center justify-center gap-3 rounded-full px-5 py-3 text-sm font-semibold active:scale-[0.98] ${styles[variant]}`}>
      <span>{children}</span>
      {variant !== "quiet" && (
        <span className="grid size-7 place-items-center rounded-full bg-black/5 text-xs transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-0.5">
          →
        </span>
      )}
    </Link>
  );
}

export function HeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="premium-shell soft-float relative min-h-[420px] overflow-hidden rounded-[2rem] p-2 md:min-h-[560px]">
      <div className="relative h-full min-h-[404px] overflow-hidden rounded-[calc(2rem-0.5rem)] md:min-h-[544px]">
        <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#183d39]/52 via-transparent to-white/10" />
        <div className="absolute bottom-5 left-5 max-w-xs rounded-3xl bg-white/88 p-5 shadow-2xl shadow-teal-950/10 backdrop-blur-xl">
          <p className="text-sm font-semibold text-[var(--teal)]">Soutien et espoir</p>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
            Un parcours plus clair quand l'attente devient difficile.
          </p>
        </div>
      </div>
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex rounded-full border border-[var(--rose)]/15 bg-white/72 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--rose)] shadow-sm">
      {children}
    </p>
  );
}
