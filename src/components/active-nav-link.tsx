"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type ActiveNavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
};

export function ActiveNavLink({
  href,
  children,
  className = "",
  activeClassName = "",
  onClick,
  style,
}: ActiveNavLinkProps) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      onClick={onClick}
      style={style}
      className={`${className} ${active ? activeClassName : ""}`}
    >
      {children}
    </Link>
  );
}
