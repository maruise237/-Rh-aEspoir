"use client";

import Link from "next/link";
import { useState } from "react";
import { ActiveNavLink } from "@/components/active-nav-link";
import { donationUrl, navItems, whatsappUrl } from "@/lib/data";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="relative grid size-11 place-items-center rounded-full border border-[var(--line)] bg-white text-[var(--foreground)] active:scale-[0.98]"
      >
        <span
          className={`absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? "rotate-45" : "-translate-y-1.5"
          }`}
        />
        <span
          className={`absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? "-rotate-45" : "translate-y-1.5"
          }`}
        />
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-label="Fermer le menu"
            className="fixed inset-0 z-40 bg-[#183d39]/18 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="fixed inset-x-4 top-24 z-50 overflow-hidden rounded-[2rem] border border-white/70 bg-[#fff9f5]/95 p-3 shadow-2xl shadow-rose-950/18 backdrop-blur-2xl">
            <nav
              className="premium-core grid gap-1 rounded-[calc(2rem-0.75rem)] p-3"
              aria-label="Navigation mobile"
            >
              {navItems.map((item, index) => (
                <ActiveNavLink
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{ animationDelay: `${index * 55}ms` }}
                  className="reveal rounded-2xl px-4 py-3 text-lg font-semibold tracking-tight text-[var(--foreground)] hover:bg-white"
                  activeClassName="bg-white text-[var(--teal)] ring-1 ring-[var(--line)]"
                >
                  {item.label}
                </ActiveNavLink>
              ))}
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                <Link
                  href={whatsappUrl()}
                  target="_blank"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-[var(--teal)] px-5 py-3 text-center text-sm font-semibold text-white"
                >
                  WhatsApp
                </Link>
                <Link
                  href={donationUrl}
                  target="_blank"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-[var(--rose)]/25 bg-white px-5 py-3 text-center text-sm font-semibold text-[var(--rose)]"
                >
                  Faire un don
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
