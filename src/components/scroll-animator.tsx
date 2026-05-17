"use client";

import { useEffect } from "react";

export function ScrollAnimator() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".reveal-on-scroll",
      ),
    );

    targets.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 55}ms`);

      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 1.08) {
        element.classList.add("is-visible");
      }
    });

    const fallback = window.setTimeout(() => {
      targets.forEach((element) => element.classList.add("is-visible"));
    }, 1600);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      },
    );

    targets.forEach((element) => observer.observe(element));

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return null;
}
