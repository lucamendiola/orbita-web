import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/StaggerChildren";

const WA_URL =
  "https://wa.me/528182751125?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita";

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

export const metadata: Metadata = {
  title: "Nosotros — Órbita Centro de Neurodesarrollo",
  description:
    "Conoce nuestra misión, visión y al equipo transdisciplinario que acompaña a niños y adolescentes en cada etapa de su neurodesarrollo.",
};

export default function Nosotros() {
  return (
    <>
      <Nav activePage="nosotros" />

      {/* ═══ HERO ═══ */}
      <section className="nosotros-hero">
        <FadeIn>
          <div className="nosotros-hero-img" style={{ overflow: "hidden" }}>
            <Image
              src="/images/team-full.png"
              alt="Equipo completo de Órbita Centro de Neurodesarrollo"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="nosotros-hero-card">
            <h1>Tu salud, nuestra prioridad</h1>
            <p>
              Agenda tu cita o env&iacute;anos un mensaje, estaremos felices de atenderte.
            </p>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-wa">
              {WA_ICON}
              Agenda Tu Cita
            </a>
          </div>
        </FadeIn>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section className="nosotros-about">
        <div className="nosotros-about-top">
          <FadeIn direction="left">
            <h2>Atenci&oacute;n integral para cada etapa del desarrollo.</h2>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <div
              className="nosotros-photo"
              style={{
                height: 300,
                borderRadius: 20,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image src="/images/consulta-1.jpg" alt="Sesión de terapia en Órbita" fill style={{ objectFit: "cover" }} />
            </div>
          </FadeIn>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40, marginTop: 40, alignItems: "start" }}>
          <FadeIn direction="left" delay={0.1}>
            <div
              className="nosotros-photo"
              style={{
                height: 360,
                borderRadius: 20,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image src="/images/consulta-2.jpg" alt="Consulta médica en Órbita" fill style={{ objectFit: "cover" }} />
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <div className="nosotros-about-text">
              <p>
                M&aacute;s que una cl&iacute;nica, &Oacute;rbita es un lugar donde cada persona
                encuentra comprensi&oacute;n, respeto y apoyo. Dise&ntilde;amos programas personalizados
                que integran salud, educaci&oacute;n y acompa&ntilde;amiento emocional, buscando
                siempre el equilibrio entre ciencia y humanidad.
              </p>
              <br />
              <p>
                Nuestro objetivo es que cada paciente alcance su m&aacute;ximo potencial y
                viva una vida plena.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ COMPROMISO (Misión + Visión) ═══ */}
      <section className="compromiso">
        <FadeIn>
          <h2>Nuestro compromiso</h2>
        </FadeIn>
        <StaggerChildren className="compromiso-grid" staggerDelay={0.15}>
          <StaggerItem>
            <div className="compromiso-card">
              <div
                className="compromiso-card-img"
                style={{
                  background: "linear-gradient(135deg, rgba(102,220,196,0.1), rgba(163,180,162,0.08))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: 13, color: "#888" }}>Foto equipo</span>
              </div>
              <span className="compromiso-label">Misi&oacute;n</span>
              <div className="compromiso-card-body">
                <p>
                  Acompa&ntilde;ar a ni&ntilde;os y adolescentes hacia una autonom&iacute;a plena en su
                  desarrollo, integrando medicina, psicolog&iacute;a y terapias basadas en
                  evidencia cient&iacute;fica. Trabajamos de la mano con la familia para construir
                  un camino de crecimiento integral.
                </p>
              </div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="compromiso-card">
              <div
                className="compromiso-card-img"
                style={{
                  background: "linear-gradient(135deg, rgba(161,155,227,0.1), rgba(102,204,255,0.06))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: 13, color: "#888" }}>Foto instalaciones</span>
              </div>
              <span className="compromiso-label">Visi&oacute;n</span>
              <div className="compromiso-card-body">
                <p>
                  Ser el centro de referencia en neurodesarrollo en M&eacute;xico, reconocido
                  por la calidad de nuestra atenci&oacute;n transdisciplinaria, nuestro compromiso
                  con la investigaci&oacute;n y nuestra capacidad de transformar la vida de las
                  familias que acompa&ntilde;amos.
                </p>
              </div>
            </div>
          </StaggerItem>
        </StaggerChildren>
      </section>

      {/* ═══ CTA BANNER ═══ */}
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
                <Image src="/images/team-fadein.png" alt="Equipo Órbita" width={400} height={280} style={{ objectFit: "contain", objectPosition: "bottom" }} />
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ═══ EQUIPO ═══ */}
      <section className="equipo">
        <FadeIn>
          <div className="equipo-header">
            <p className="section-label" style={{ justifyContent: "center" }}>Nuestro equipo</p>
            <h2>Personal M&eacute;dico y Terap&eacute;utico</h2>
          </div>
        </FadeIn>
        <StaggerChildren className="equipo-grid" staggerDelay={0.12}>
          {[
            { initials: "JL", name: "Dr. Juan Francisco Lozano", role: "Pediatr\u00eda del Desarrollo", photo: "/team/dr-lozano.png", slug: "dr-juan-francisco-lozano" },
            { initials: "MJ", name: "Dra. Mar\u00eda Jos\u00e9 Delgado", role: "Pediatra \u00b7 S\u00edndrome de Down", photo: "/team/dra-delgado.png", slug: "dra-maria-jose-delgado" },
            { initials: "SG", name: "Dra. Sof\u00eda Garc\u00eda", role: "Terapia Conductual", photo: "/team/dra-garcia.png", slug: "dra-sofia-garcia" },
            { initials: "DP", name: "Lic. Daniela P\u00e1ez", role: "Terapia de Lenguaje", photo: "/team/lic-paez.png", slug: "lic-daniela-paez" },
          ].map((d) => (
            <StaggerItem key={d.initials}>
              <Link href={`/equipo/${d.slug}`} className="doc">
                <div className="doc-pill" style={{ overflow: "hidden", position: "relative" }}>
                  <Image src={d.photo} alt={d.name} fill style={{ objectFit: "cover", objectPosition: "top" }} />
                  <div className="doc-overlay">
                    <h3>{d.name}</h3>
                    <p>{d.role}</p>
                  </div>
                </div>
                <p className="doc-name">{d.name}</p>
                <p className="doc-role">{d.role}</p>
                <span className="doc-phone">{PHONE_ICON}</span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* ═══ BLOG PREVIEW (Masonry) ═══ */}
      <section className="blog-masonry">
        <div className="blog-masonry-top">
          <FadeIn>
            <h2>Historias, tips y acompa&ntilde;amiento para ti y tu familia</h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <Link href="/blog" className="btn-outline">Ver M&aacute;s Blogs</Link>
          </FadeIn>
        </div>
        <StaggerChildren className="blog-masonry-grid" staggerDelay={0.12}>
          <StaggerItem>
            <Link href="/blog" className="blog-m-card blog-m-card--featured" style={{ display: "flex", flexDirection: "column" }}>
              <div className="blog-m-img" style={{ position: "relative", flex: 1 }}>
                <Image src="/images/blog-orbita-origen.png" alt="Por qué nació Órbita" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="blog-m-body">
                <h3>&iquest;Por qu&eacute; naci&oacute; &Oacute;rbita y qu&eacute; significa?</h3>
                <p>
                  &Oacute;rbita no es solo un nombre, es una filosof&iacute;a: poner a cada persona y su
                  familia en el centro.
                </p>
                <div className="blog-m-meta">
                  <span className="blog-m-tag">atenci&oacute;n</span>
                  <span className="blog-m-date">August 29, 2025</span>
                </div>
              </div>
            </Link>
          </StaggerItem>
          <StaggerItem>
            <Link href="/blog" className="blog-m-card">
              <div className="blog-m-img" style={{ position: "relative" }}>
                <Image src="/images/blog-red-apoyo.png" alt="Crear una red de apoyo" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="blog-m-body">
                <h3>Lo que es crear una red de apoyo</h3>
                <p>Una red de apoyo s&oacute;lida puede transformar la vida de ni&ntilde;os y familias.</p>
                <div className="blog-m-meta">
                  <span className="blog-m-tag">prevenci&oacute;n</span>
                  <span className="blog-m-date">December 27, 2025</span>
                </div>
              </div>
            </Link>
          </StaggerItem>
          <StaggerItem>
            <Link href="/blog" className="blog-m-card">
              <div className="blog-m-img" style={{ position: "relative" }}>
                <Image src="/images/blog-preocupacion.jpg" alt="Cuando hay preocupación" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="blog-m-body">
                <h3>Cuando hay preocupaci&oacute;n, &iquest;d&oacute;nde empezar?</h3>
                <p>Pasos claros y acompa&ntilde;amiento para dar los primeros pasos.</p>
                <div className="blog-m-meta">
                  <span className="blog-m-tag">salud mental</span>
                  <span className="blog-m-date">December 26, 2025</span>
                </div>
              </div>
            </Link>
          </StaggerItem>
        </StaggerChildren>
      </section>

      {/* ═══ CONTACTO CARDS ═══ */}
      <section className="contacto" style={{ paddingBottom: 80 }}>
        <FadeIn>
          <div className="contacto-cards">
            <a href="tel:8182751125" className="contacto-card">
              <span className="contacto-card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#dddee0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span className="contacto-card-arrow">↗</span>
              <h3>Ll&aacute;manos Ahora</h3>
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="contacto-card">
              <span className="contacto-card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#dddee0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <span className="contacto-card-arrow">↗</span>
              <h3>Whatsapp</h3>
            </a>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </>
  );
}
