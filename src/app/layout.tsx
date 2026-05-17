import type { Metadata } from "next";
import "./globals.css";
import { JsonLd } from "@/components/json-ld";
import { organizationJsonLd, seoKeywords, siteUrl, websiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RhéaEspoir | Infertilité, PMA, adoption et soutien au Cameroun",
    template: "%s | RhéaEspoir",
  },
  description:
    "Association à Yaoundé pour l'information et le soutien autour de l'infertilité, la PMA, la FIV, l'adoption et la santé mentale des couples au Cameroun.",
  keywords: seoKeywords,
  applicationName: "RhéaEspoir",
  authors: [{ name: "RhéaEspoir Cameroun" }],
  creator: "RhéaEspoir Cameroun",
  publisher: "RhéaEspoir Cameroun",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "RhéaEspoir",
    description:
      "Association camerounaise d'écoute, d'information et d'orientation autour de l'infertilité, de la PMA et de l'adoption.",
    type: "website",
    locale: "fr_CM",
    siteName: "RhéaEspoir",
    url: siteUrl,
    images: [
      {
        url: "/images/rhea/hero-grossesse.jpg",
        width: 1200,
        height: 630,
        alt: "RhéaEspoir accompagne les couples confrontés à l'infertilité",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RhéaEspoir | Infertilité, PMA et soutien au Cameroun",
    description:
      "Information, soutien psychologique et orientation pour les couples confrontés à l'infertilité au Cameroun.",
    images: ["/images/rhea/hero-grossesse.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
      </body>
    </html>
  );
}
