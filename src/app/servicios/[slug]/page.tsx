import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { SERVICES, WA_URL } from "@/lib/data";

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const CHECK_ICON = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
    <circle cx="10" cy="10" r="10" fill="var(--teal)" opacity="0.12" />
    <path d="M6 10.5l2.5 2.5 5.5-5.5" stroke="var(--teal)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  return {
    title: service ? `${service.title} — Órbita Centro de Neurodesarrollo` : "Servicio",
    description: service?.longDesc.slice(0, 155) || "Servicio especializado en neurodesarrollo.",
  };
}

export default async function ServicioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = SERVICES.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      <Nav activePage="servicios" />

      {/* HERO */}
      <section style={{ paddingBottom: 0 }}>
        <FadeIn>
          <p className="section-label">Servicios</p>
          <h1 style={{ maxWidth: 700, marginBottom: 24 }}>{service.title}</h1>
          <p style={{ maxWidth: 640, fontSize: 18, lineHeight: 1.8, marginBottom: 40, color: "var(--text-secondary)" }}>
            {service.longDesc}
          </p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-wa">
            {WA_ICON}
            Agenda tu cita
          </a>
        </FadeIn>
      </section>

      {/* IMAGE */}
      <FadeIn>
        <div style={{
          margin: "60px 80px 0",
          height: 420,
          borderRadius: 24,
          overflow: "hidden",
          position: "relative",
        }}>
          <img
            src={service.image}
            alt={service.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </FadeIn>

      {/* FOR WHOM + INCLUDES */}
      <section style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          {/* Left: For whom */}
          <FadeIn>
            <div>
              <p className="section-label" style={{ marginBottom: 16 }}>&iquest;Para qui&eacute;n es?</p>
              <p style={{ fontSize: 18, lineHeight: 1.8, color: "var(--text-secondary)" }}>
                {service.forWhom}
              </p>
            </div>
          </FadeIn>

          {/* Right: Includes */}
          <FadeIn delay={0.15}>
            <div>
              <p className="section-label" style={{ marginBottom: 24 }}>&iquest;Qu&eacute; incluye?</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                {service.includes.map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: 12, fontSize: 16, lineHeight: 1.6, color: "var(--text-secondary)" }}>
                    {CHECK_ICON}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: "var(--cream)", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <p className="section-label" style={{ textAlign: "center" }}>&iquest;C&oacute;mo funciona?</p>
            <h2 style={{ textAlign: "center", marginBottom: 60 }}>El proceso paso a paso</h2>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32 }}>
            {service.process.map((step, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{
                  background: "white",
                  borderRadius: 20,
                  padding: "32px 28px",
                  height: "100%",
                  border: "1px solid var(--border)",
                }}>
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: `var(--${service.color}-bg, var(--cream))`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 18,
                    color: "var(--heading)",
                    marginBottom: 20,
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-secondary)" }}>{step}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.faq.length > 0 && (
        <section style={{ padding: "80px 40px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <FadeIn>
              <p className="section-label" style={{ textAlign: "center" }}>Preguntas frecuentes</p>
              <h2 style={{ textAlign: "center", marginBottom: 48 }}>Lo que las familias nos preguntan</h2>
            </FadeIn>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {service.faq.map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div style={{
                    background: "var(--cream)",
                    borderRadius: 20,
                    padding: "32px 36px",
                  }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, color: "var(--heading)" }}>
                      {item.q}
                    </h3>
                    <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--text-secondary)", margin: 0 }}>
                      {item.a}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* OTHER SERVICES */}
      <section className="servicios" style={{ background: "var(--cream)" }}>
        <FadeIn>
          <div className="servicios-top">
            <div>
              <p className="section-label">M&aacute;s servicios</p>
              <h2>Otros servicios que ofrecemos</h2>
            </div>
            <Link href="/servicios" className="btn-outline">Ver todos</Link>
          </div>
        </FadeIn>
        <div className="servicios-grid">
          {others.map((s) => (
            <Link key={s.slug} href={`/servicios/${s.slug}`} className={`srv-card srv--${s.color}`}>
              <div className="srv-img" style={{ overflow: "hidden" }}>
                <img src={s.image} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <div className="srv-info">
                <span className="srv-arrow">↗</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
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
                <img src="/images/team-fadein.png" alt="Equipo Órbita" style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "bottom" }} />
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          section > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 0 20px !important;
          }
        }
      `}</style>
    </>
  );
}
