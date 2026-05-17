import { articles, events, forumTopics } from "@/lib/data";

export const siteUrl = "https://xn--rhaespoir-c4a.com";
export const siteName = "RhéaEspoir";

export const seoKeywords = [
  "infertilité Cameroun",
  "infertilité Yaoundé",
  "association infertilité Cameroun",
  "bilan fertilité couple Cameroun",
  "PMA Cameroun",
  "procréation médicalement assistée Cameroun",
  "fécondation in vitro Cameroun",
  "consultation PMA Cameroun",
  "FIV Cameroun",
  "adoption Cameroun",
  "soutien psychologique infertilité",
  "couple infertile Cameroun",
  "fertilité féminine",
  "fertilité masculine",
  "spermogramme Cameroun",
  "endométriose infertilité",
  "infertilité inexpliquée",
  "soutien émotionnel infertilité",
  "RhéaEspoir",
];

export function absoluteUrl(path = "/") {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function allSitePaths() {
  return [
    "/",
    "/qui-sommes-nous",
    "/actualites",
    ...articles.map((article) => `/actualites/${article.slug}`),
    "/evenements",
    ...events.map((event) => `/evenements/${event.slug}`),
    "/forum",
    ...forumTopics.map((topic) => `/forum/${topic.slug}`),
    "/contact",
  ];
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: siteName,
    url: siteUrl,
    logo: absoluteUrl("/images/rhea/logo-rheaespoir.png"),
    description:
      "Association camerounaise d'information, d'écoute et de soutien autour de l'infertilité, de la PMA, de l'adoption et de la santé mentale.",
    areaServed: ["Cameroun", "Yaoundé", "Afrique francophone"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yaoundé",
      addressCountry: "CM",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+237693308269",
        contactType: "information et accompagnement",
        availableLanguage: ["fr"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+237696773606",
        contactType: "écoute",
        availableLanguage: ["fr"],
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    inLanguage: "fr-CM",
    about: [
      "infertilité",
      "procréation médicalement assistée",
      "adoption",
      "santé mentale",
      "soutien psychologique",
    ],
    publisher: organizationJsonLd(),
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
