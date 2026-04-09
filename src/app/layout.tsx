import type { Metadata } from "next";
import { EB_Garamond, Nunito } from "next/font/google";
import "./globals.css";

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://orbitaclinica.com"),
  title: "Órbita Centro de Neurodesarrollo — Atención integral para neurodesarrollo",
  description:
    "Centro transdisciplinario en Monterrey. Integramos medicina, psicología y terapias basadas en evidencia para acompañar a niños y adolescentes en cada etapa de su desarrollo.",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "any", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Órbita Centro de Neurodesarrollo",
    description:
      "Atención integral para neurodesarrollo y bienestar. Unimos medicina, terapias y ciencia para acompañar a niños, adolescentes y jóvenes.",
    url: "https://orbitaclinica.com",
    type: "website",
    locale: "es_MX",
    siteName: "Órbita Centro de Neurodesarrollo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Órbita Centro de Neurodesarrollo",
    description:
      "Atención integral para neurodesarrollo y bienestar en Monterrey.",
  },
  robots: { index: true, follow: true },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "Órbita Centro de Neurodesarrollo",
  url: "https://orbitaclinica.com",
  telephone: "+528182751125",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Gómez Morín 300, Local 1120",
    addressLocality: "San Pedro Garza García",
    addressRegion: "Nuevo León",
    postalCode: "66278",
    addressCountry: "MX",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  medicalSpecialty: [
    "Pediatrics",
    "Neurology",
    "Psychiatry",
    "Speech-Language Pathology",
  ],
  sameAs: ["https://www.instagram.com/orbita.clinica/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${garamond.variable} ${nunito.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
