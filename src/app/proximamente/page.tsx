import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Órbita Centro de Neurodesarrollo",
  description: "Sitio en preparación.",
  robots: { index: false, follow: false },
};

export default function Proximamente() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        background: "var(--cream-light, #fffaf7)",
        color: "var(--teal, #3d4e58)",
        fontFamily:
          "var(--font-nunito), 'Satoshi', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <Image
        src="/brand/logo-dark.png"
        alt="Órbita Centro de Neurodesarrollo"
        width={220}
        height={64}
        style={{ height: "auto", width: "min(220px, 60vw)", marginBottom: "2.5rem" }}
        priority
      />

      <h1
        style={{
          fontFamily: "var(--font-serif), 'EB Garamond', Georgia, serif",
          fontSize: "clamp(1.9rem, 5vw, 2.8rem)",
          fontWeight: 500,
          lineHeight: 1.15,
          margin: 0,
          maxWidth: "16ch",
        }}
      >
        Estamos preparando algo especial
      </h1>

      <p
        style={{
          marginTop: "1.25rem",
          fontSize: "clamp(1rem, 2.4vw, 1.15rem)",
          color: "var(--text, #555)",
          maxWidth: "44ch",
          lineHeight: 1.6,
        }}
      >
        Nuestro sitio estará disponible muy pronto. Mientras tanto, con gusto te
        atendemos por teléfono o WhatsApp.
      </p>

      <a
        href="https://wa.me/528182751125"
        style={{
          marginTop: "2.25rem",
          display: "inline-block",
          background: "var(--teal, #3d4e58)",
          color: "var(--cream, #fff7f2)",
          padding: "0.9rem 2rem",
          borderRadius: "var(--pill, 100px)",
          textDecoration: "none",
          fontWeight: 700,
          fontSize: "1rem",
        }}
      >
        Escríbenos por WhatsApp
      </a>

      <p
        style={{
          marginTop: "0.85rem",
          fontSize: "0.95rem",
          color: "var(--text-light, #888)",
        }}
      >
        o llámanos al{" "}
        <a href="tel:+528182751125" style={{ color: "var(--teal, #3d4e58)", fontWeight: 600 }}>
          81 8275 1125
        </a>
      </p>
    </main>
  );
}
