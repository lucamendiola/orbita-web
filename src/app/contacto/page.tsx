import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/StaggerChildren";
import { WA_URL } from "@/lib/data";

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const metadata: Metadata = {
  title: "Contacto — Órbita Centro de Neurodesarrollo",
  description:
    "Agenda tu cita en Órbita Centro de Neurodesarrollo. Av. Gómez Morín 300, San Pedro Garza García, N.L. WhatsApp: 81 8275 1125.",
};

export default function Contacto() {
  return (
    <>
      <Nav activePage="contacto" />

      {/* ═══ HERO + MAP ═══ */}
      <section className="contacto-page">
        <div className="contacto-hero">
          {/* Left: text + contact methods */}
          <FadeIn direction="left">
            <div className="contacto-hero-text">
              <p className="section-label">Contacto</p>
              <h1>Estamos listos para acompa&ntilde;arte</h1>
              <p>
                &iquest;Tienes dudas o necesitas una cita? Escr&iacute;benos por WhatsApp
                o ll&aacute;manos directamente. Estaremos felices de atenderte.
              </p>

              <div className="contacto-methods">
                {/* WhatsApp */}
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="contacto-method">
                  <div className="contacto-method-icon contacto-method-icon--wa">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div className="contacto-method-text">
                    <h3>WhatsApp</h3>
                    <p>Escr&iacute;benos al 81 8275 1125</p>
                  </div>
                </a>

                {/* Phone */}
                <a href="tel:8182751125" className="contacto-method">
                  <div className="contacto-method-icon contacto-method-icon--phone">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="contacto-method-text">
                    <h3>Ll&aacute;manos</h3>
                    <p>81 8275 1125</p>
                  </div>
                </a>

                {/* Location */}
                <a
                  href="https://maps.google.com/?q=Av.+Gomez+Morin+300,+Valle+del+Campestre,+San+Pedro+Garza+Garcia,+66278"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contacto-method"
                >
                  <div className="contacto-method-icon contacto-method-icon--location">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="contacto-method-text">
                    <h3>Vis&iacute;tanos</h3>
                    <p>Av. G&oacute;mez Mor&iacute;n 300, Local 1120<br />Valle del Campestre, San Pedro Garza Garc&iacute;a 66278</p>
                  </div>
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Right: Google Maps */}
          <FadeIn direction="right" delay={0.2}>
            <div className="contacto-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.123!2d-100.3461!3d25.6533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bfde888f44e1%3A0x4b0e6c8c9f1b7a3e!2sAv.%20G%C3%B3mez%20Mor%C3%ADn%20300%2C%20Valle%20del%20Campestre%2C%2066278%20San%20Pedro%20Garza%20Garc%C3%ADa%2C%20N.L.!5e0!3m2!1ses!2smx!4v1710000000000!5m2!1ses!2smx"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicaci&oacute;n de &Oacute;rbita Centro de Neurodesarrollo"
              />
            </div>
          </FadeIn>
        </div>

        {/* Info cards */}
        <StaggerChildren className="contacto-info-row" staggerDelay={0.12}>
          <StaggerItem>
            <div className="contacto-info-card">
              <div className="contacto-info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3>Horarios</h3>
              <p>
                Lunes a Viernes: 9:00 AM &ndash; 7:00 PM<br />
                S&aacute;bado: 9:00 AM &ndash; 2:00 PM<br />
                Domingo: Cerrado
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="contacto-info-card">
              <div className="contacto-info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--lavender)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3>Edades que atendemos</h3>
              <p>
                Reci&eacute;n nacidos hasta los 21 a&ntilde;os.<br />
                Evaluaci&oacute;n, diagn&oacute;stico, terapia y acompa&ntilde;amiento integral.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="contacto-info-card">
              <div className="contacto-info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3>Alianza con TecSalud</h3>
              <p>
                Operamos dentro del complejo TecSalud G&oacute;mez Mor&iacute;n,
                con acceso a investigaci&oacute;n y pr&aacute;ctica cl&iacute;nica de primer nivel.
              </p>
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
                <img src="/images/team-fadein.png" alt="Equipo Órbita" style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "bottom" }} />
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ═══ BLOG ═══ */}
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
              <div className="blog-m-img" style={{ background: "var(--teal)", flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>Imagen</span>
              </div>
              <div className="blog-m-body">
                <h3>&iquest;Por qu&eacute; naci&oacute; &Oacute;rbita y qu&eacute; significa?</h3>
                <p>&Oacute;rbita no es solo un nombre, es una filosof&iacute;a.</p>
                <div className="blog-m-meta">
                  <span className="blog-m-tag">atenci&oacute;n</span>
                  <span className="blog-m-date">August 29, 2025</span>
                </div>
              </div>
            </Link>
          </StaggerItem>
          <StaggerItem>
            <Link href="/blog" className="blog-m-card">
              <div className="blog-m-img" style={{ background: "var(--orange-bg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 13, color: "#888" }}>Imagen</span>
              </div>
              <div className="blog-m-body">
                <h3>Lo que es crear una red de apoyo</h3>
                <p>Una red s&oacute;lida transforma la vida de familias.</p>
                <div className="blog-m-meta">
                  <span className="blog-m-tag">prevenci&oacute;n</span>
                  <span className="blog-m-date">December 27, 2025</span>
                </div>
              </div>
            </Link>
          </StaggerItem>
          <StaggerItem>
            <Link href="/blog" className="blog-m-card">
              <div className="blog-m-img" style={{ background: "var(--teal-bg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 13, color: "#888" }}>Imagen</span>
              </div>
              <div className="blog-m-body">
                <h3>Cuando hay preocupaci&oacute;n, &iquest;d&oacute;nde empezar?</h3>
                <p>Pasos claros para dar los primeros pasos.</p>
                <div className="blog-m-meta">
                  <span className="blog-m-tag">salud mental</span>
                  <span className="blog-m-date">December 26, 2025</span>
                </div>
              </div>
            </Link>
          </StaggerItem>
        </StaggerChildren>
      </section>

      <Footer />
    </>
  );
}
