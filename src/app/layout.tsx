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
    icon: [{ url: "/favicon.png", sizes: "32x32", type: "image/png" }],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${garamond.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}
