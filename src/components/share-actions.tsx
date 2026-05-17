"use client";

import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

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
  const [copied, setCopied] = useState(false);
  const [busy, setBusy] = useState(false);

  const shareUrl = useMemo(() => {
    if (typeof window === "undefined") return pathname;
    return `${window.location.origin}${pathname}`;
  }, [pathname]);

  async function copyLink() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        const field = document.createElement("textarea");
        field.value = shareUrl;
        field.setAttribute("readonly", "");
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.appendChild(field);
        field.select();
        document.execCommand("copy");
        document.body.removeChild(field);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  async function handleShare() {
    if (busy) return;
    setBusy(true);

    try {
      if (navigator.share) {
        await navigator.share({ title, text, url: shareUrl });
      } else {
        await copyLink();
      }
    } catch {
      await copyLink();
    } finally {
      setBusy(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      disabled={busy}
      className={`group inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-white font-semibold text-[var(--foreground)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--teal)]/30 hover:shadow-lg hover:shadow-teal-950/10 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-70 ${
        compact ? "px-3 py-2 text-xs" : "px-5 py-3 text-sm"
      } ${className}`}
    >
      <span className="grid size-7 place-items-center rounded-full bg-[#f4fbf8] text-[var(--teal)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        ↗
      </span>
      <span aria-live="polite">{busy ? "Partage..." : copied ? "Lien copié" : "Partager"}</span>
    </button>
  );
}
