import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/StaggerChildren";
import { DOCTORS, WA_URL } from "@/lib/data";

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const PHONE_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const COLOR_MAP: Record<string, string> = {
  lavender: "var(--lavender)",
  coral: "var(--coral)",
  "teal-light": "var(--teal-light)",
  orange: "var(--orange)",
  sky: "var(--sky)",
  lime: "var(--lime)",
};

export const metadata: Metadata = {
  title: "Equipo — Órbita Centro de Neurodesarrollo",
  description:
    "Conoce al equipo médico y terapéutico de Órbita. Especialistas en pediatría del desarrollo, terapia conductual, lenguaje, psicología y más.",
};

export default function Equipo() {
  return (
    <>
      <Nav activePage="equipo" />

      {/* HEADER */}
      <section style={{ textAlign: "center", paddingBottom: 20 }}>
        <FadeIn>
          <h1 style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>Personal M&eacute;dico y Terap&eacute;utico</h1>
          <p style={{ maxWidth: 520, margin: "16px auto 0", fontSize: 18 }}>
            Un equipo transdisciplinario que trabaja junto por el desarrollo de tu hijo.
          </p>
        </FadeIn>
      </section>

      {/* TEAM GRID */}
      <section className="equipo" style={{ borderBottom: "none" }}>
        <StaggerChildren className="equipo-grid" staggerDelay={0.12}>
          {DOCTORS.map((d) => (
            <StaggerItem key={d.slug}>
              <Link href={`/equipo/${d.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div className="doc">
                  <div className="doc-pill" style={{ background: COLOR_MAP[d.color] || "var(--sage)" }}>
                    <Image src={d.photo} alt={d.name} fill style={{ objectFit: "cover", objectPosition: "top" }} />
                    <div className="doc-overlay">
                      <h3>{d.name}</h3>
                      <p>{d.role}</p>
                    </div>
                  </div>
                  <p className="doc-name">{d.name}</p>
                  <p className="doc-role">{d.role}</p>
                  <span className="doc-phone">{PHONE_ICON}</span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* CTA */}
      <FadeIn>
        <div className="cta-banner">
          <div className="cta-banner-inner">
            <div className="cta-banner-text">
              <h2>Agenda tu cita para impulsar su desarrollo</h2>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-wa">
                {WA_ICON}
                Agenda Tu Cita
              </a>
              <div className="cta-banner-hours">
                <span><strong>Lunes &ndash; Viernes</strong>&nbsp; 9AM &ndash; 7PM</span>
                <span><strong>S&aacute;bado</strong>&nbsp; 9AM &ndash; 2PM</span>
              </div>
            </div>
            <div className="cta-banner-visual">
              <div className="cta-blob" />
              <div style={{ position: "relative", zIndex: 1, width: "100%", height: 280, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
                <span style={{ fontSize: 14, color: "#888", marginBottom: 20 }}>Foto del equipo</span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <Footer />
    </>
  );
}
