import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { DOCTORS, WA_URL } from "@/lib/data";

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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

export function generateStaticParams() {
  return DOCTORS.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Metadata {
  return {
    title: "Especialista — Órbita Centro de Neurodesarrollo",
    description: "Conoce a nuestro especialista en neurodesarrollo.",
  };
}

export default async function DoctorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doctor = DOCTORS.find((d) => d.slug === slug);
  if (!doctor) notFound();

  const others = DOCTORS.filter((d) => d.slug !== slug);

  return (
    <>
      <Nav activePage="equipo" />

      {/* PROFILE */}
      <section style={{ paddingBottom: 40 }}>
        <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 60, alignItems: "start" }}>
          <FadeIn direction="left">
            <div
              style={{
                width: "100%",
                aspectRatio: "3/4",
                borderRadius: 140,
                background: COLOR_MAP[doctor.color] || "var(--sage)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontFamily: "var(--font-serif), 'EB Garamond', serif", fontSize: 72, fontWeight: 600, color: "rgba(255,255,255,0.5)" }}>
                {doctor.initials}
              </span>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <div>
              <p className="section-label">Equipo m&eacute;dico</p>
              <h1 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", marginBottom: 8 }}>{doctor.name}</h1>
              <p style={{ fontSize: 18, color: "var(--sage)", fontWeight: 600, marginBottom: 28 }}>{doctor.role}</p>
              <p style={{ maxWidth: 520, fontSize: 17, lineHeight: 1.75, marginBottom: 32 }}>{doctor.bio}</p>

              {/* Specialties */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 40 }}>
                {doctor.specialties.map((s) => (
                  <span key={s} className="cond-tag">{s}</span>
                ))}
              </div>

              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-wa">
                {WA_ICON}
                Agendar cita con {doctor.name.split(" ")[0]} {doctor.name.split(" ")[1]}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* OTHER DOCTORS */}
      <section className="equipo" style={{ background: "var(--cream)" }}>
        <FadeIn>
          <div className="equipo-header">
            <p className="section-label" style={{ justifyContent: "center" }}>Conoce al resto del equipo</p>
            <h2>M&aacute;s especialistas</h2>
          </div>
        </FadeIn>
        <div className="equipo-grid">
          {others.map((d) => (
            <Link key={d.slug} href={`/equipo/${d.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="doc">
                <div className="doc-pill" style={{ background: COLOR_MAP[d.color] || "var(--sage)" }}>
                  <span style={{ fontFamily: "var(--font-serif), 'EB Garamond', serif", fontSize: 56, fontWeight: 600, color: "rgba(255,255,255,0.5)" }}>
                    {d.initials}
                  </span>
                  <div className="doc-overlay">
                    <h3>{d.name}</h3>
                    <p>{d.role}</p>
                  </div>
                </div>
                <p className="doc-name">{d.name}</p>
                <p className="doc-role">{d.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
