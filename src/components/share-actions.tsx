"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useMemo, useState } from "react";

type ShareButtonProps = {
  title?: string;
  text?: string;
  className?: string;
  compact?: boolean;
};

export function ShareButton({
  title = "RhéaEspoir",
  text = "Découvre RhéaEspoir, une association d'écoute et d'information autour de l'infertilité.",
  className = "",
  compact = false,
}: ShareButtonProps) {
  const pathname = usePathname();
  const menuId = useId();
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const shareUrl = useMemo(() => {
    if (typeof window === "undefined") return pathname;
    return `${window.location.origin}${pathname}`;
  }, [pathname]);

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(`${text} ${shareUrl}`);
  const encodedTitle = encodeURIComponent(title);

  useEffect(() => {
    if (!open) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  async function nativeShare() {
    try {
      if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
        await navigator.share({ title, text, url: shareUrl });
        setOpen(false);
      } else {
        await copyLink();
      }
    } catch {
      await copyLink();
    }
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch {
      const field = document.createElement("textarea");
      field.value = shareUrl;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      document.body.removeChild(field);
    } finally {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }
  }

  return (
    <span className="relative inline-flex">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        className={`group inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-white font-semibold text-[var(--foreground)] shadow-sm active:scale-[0.98] ${
          compact ? "px-3 py-2 text-xs" : "px-5 py-3 text-sm"
        } ${className}`}
      >
        <span className="grid size-7 place-items-center rounded-full bg-[#f4fbf8] text-[var(--teal)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5">
          ↗
        </span>
        <span>{copied ? "Lien copié" : "Partager"}</span>
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-label="Fermer le partage"
            className="fixed inset-0 z-40 cursor-default bg-transparent"
            onClick={() => setOpen(false)}
          />
          <div
            id={menuId}
            className="absolute right-0 top-[calc(100%+0.6rem)] z-50 w-[min(88vw,340px)] overflow-hidden rounded-[1.75rem] border border-white/70 bg-[#fff9f5]/96 p-2 shadow-2xl shadow-rose-950/18 backdrop-blur-xl"
          >
            <div className="premium-core rounded-[calc(1.75rem-0.5rem)] p-3">
              <p className="px-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--rose)]">
                Partager l'article
              </p>
              <div className="mt-3 grid gap-2">
                <button
                  type="button"
                  onClick={nativeShare}
                  className="flex items-center justify-between rounded-2xl bg-[var(--teal)] px-4 py-3 text-left text-sm font-semibold text-white"
                >
                  {copied ? "Lien copié" : "Partage rapide"}
                  <span className="text-white/80">↗</span>
                </button>
                <button
                  type="button"
                  onClick={copyLink}
                  className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-left text-sm font-semibold text-[var(--foreground)] ring-1 ring-[var(--line)]"
                >
                  Copier le lien
                  <span className="text-[var(--teal)]">{copied ? "Copié" : "⌘"}</span>
                </button>
                <Link
                  href={`https://wa.me/?text=${encodedText}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[var(--foreground)] ring-1 ring-[var(--line)]"
                >
                  WhatsApp
                  <span className="text-[var(--teal)]">↗</span>
                </Link>
                <Link
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[var(--foreground)] ring-1 ring-[var(--line)]"
                >
                  Facebook
                  <span className="text-[var(--teal)]">↗</span>
                </Link>
                <Link
                  href={`mailto:?subject=${encodedTitle}&body=${encodedText}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[var(--foreground)] ring-1 ring-[var(--line)]"
                >
                  Email
                  <span className="text-[var(--teal)]">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </span>
  );
}
