import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/StaggerChildren";
import { DOCTORS } from "@/lib/data";

const WA_URL =
  "https://wa.me/528182751125?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita";

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const PHONE_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MAIL_ICON = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#dddee0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const CONDICIONES = [
  "Trastorno del Espectro Autista (TEA)",
  "TDAH",
  "S\u00edndrome de Down",
  "S\u00edndrome de Tourette",
  "Dislexia",
  "Disgraf\u00eda",
  "Discalculia",
  "Trastornos del lenguaje",
  "Problemas motores",
  "Retrasos en el desarrollo",
  "Ansiedad",
  "Problemas de sue\u00f1o",
  "Dificultades de alimentaci\u00f3n",
  "Discapacidad intelectual",
  "Altas capacidades",
];

export default function Home() {
  return (
    <>
      <Nav activePage="home" />

      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="hero-content">
          <FadeIn delay={0.1}>
            <div className="hero-badge">
              <span className="hero-badge-icon" />
              Atenci&oacute;n integral para cada etapa del desarrollo.
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1>
              Atenci&oacute;n integral para{" "}
              <em>neurodesarrollo</em> y bienestar
            </h1>
          </FadeIn>
          <FadeIn delay={0.35}>
            <p className="hero-sub">
              En &Oacute;rbita Centro de Neurodesarrollo, unimos medicina,
              terapias y ciencia para acompa&ntilde;ar a ni&ntilde;os,
              adolescentes y j&oacute;venes hacia una vida m&aacute;s plena.
            </p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <div className="hero-ctas">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-wa">
                {WA_ICON}
                Agenda Tu Cita
              </a>
              <a href="tel:8182751125" className="btn-phone">
                <span className="btn-phone-icon">{PHONE_ICON}</span>
                81 8275 1125
              </a>
            </div>
          </FadeIn>
        </div>
        <FadeIn direction="right" delay={0.3}>
          <div className="hero-visual">
            <div className="hero-blob" />
            <div className="hero-img">
              <Image src="/images/hero-child.png" alt="Niña jugando con bloques de colores" fill style={{ objectFit: "contain", objectPosition: "center bottom" }} priority />
            </div>
            <div className="sparkle" style={{ top: 30, right: 60, width: 18, height: 18 }} />
            <div className="sparkle" style={{ bottom: 100, right: 20, width: 12, height: 12, opacity: 0.3 }} />
            <div className="sparkle" style={{ top: "60%", left: 10, width: 14, height: 14, opacity: 0.4 }} />
            <div className="hero-float">
              <div className="hero-float-num">98%</div>
              <div className="hero-float-label">
                Satisfacci&oacute;n de<br />nuestras familias
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ═══ TRUST BAR ═══ */}
      <FadeIn>
        <div className="trust-bar">
          <p className="trust-bar-label">Alianzas y colaboraciones</p>
          <div className="trust-logos">
            <span className="trust-logo">TecSalud</span>
            <span className="trust-logo">AINE A.C.</span>
            <span className="trust-logo">Fundaci&oacute;n FEMSA</span>
            <span className="trust-logo">RCD Down</span>
            <span className="trust-logo">SDBP</span>
          </div>
        </div>
      </FadeIn>

      {/* ═══ PROCESO ═══ */}
      <section className="proceso">
        <FadeIn>
          <div className="proceso-header">
            <p className="section-label" style={{ justifyContent: "center" }}>C&oacute;mo funciona</p>
            <h2>Tu camino en &Oacute;rbita</h2>
          </div>
        </FadeIn>
        <StaggerChildren className="proceso-steps" staggerDelay={0.15}>
          <StaggerItem>
            <div className="paso">
              <div className="paso-blob"><span className="paso-num">01</span></div>
              <div className="paso-body"><h3>Evaluaci&oacute;n y Diagn&oacute;stico especializado</h3></div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="paso">
              <div className="paso-blob"><span className="paso-num">02</span></div>
              <div className="paso-body"><h3>Plan de Intervenci&oacute;n Personalizado</h3></div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="paso">
              <div className="paso-blob"><span className="paso-num">03</span></div>
              <div className="paso-body"><h3>Seguimiento del Plan de Intervenci&oacute;n</h3></div>
            </div>
          </StaggerItem>
        </StaggerChildren>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section className="about">
        <div className="about-grid">
          <FadeIn direction="left">
            <div className="about-img" style={{ background: "#000", overflow: "hidden" }}>
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              >
                <source src="/videos/satisfaccion.mp4" type="video/mp4" />
              </video>
              <div className="about-stat">
                <div className="s-sparkle" />
                <div className="s-num">98%</div>
                <div className="s-label">Satisfacci&oacute;n de<br />nuestras familias</div>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <div className="about-text">
              <h2>Comprometidos con una atenci&oacute;n centrada en cada persona</h2>
              <p>En &Oacute;rbita brindamos un acompa&ntilde;amiento humano y especializado, con planes de atenci&oacute;n basados en evidencia cient&iacute;fica.</p>
              <br />
              <p>Nuestro enfoque transdisciplinario garantiza que cada ni&ntilde;o, adolescente o joven reciba la mejor oportunidad para desarrollar su m&aacute;ximo potencial, siempre de la mano de su familia.</p>
              <div className="about-values">
                <span className="about-val"><span className="about-val-dot" /> Integridad</span>
                <span className="about-val"><span className="about-val-dot" /> Innovaci&oacute;n</span>
                <span className="about-val"><span className="about-val-dot" /> Inclusi&oacute;n</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ ¿A QUIÉNES ATENDEMOS? ═══ */}
      <section className="atendemos">
        <FadeIn>
          <h2>&iquest;A qui&eacute;nes atendemos?</h2>
        </FadeIn>
        <div className="atendemos-layout">
          <FadeIn delay={0.1}>
            <div className="atende-card">
              <div className="atende-card-img" style={{ background: "rgba(163,180,162,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 13, color: "#888" }}>Foto</span>
              </div>
              <div className="atende-card-body">
                <h3>Crecemos con ellos desde el inicio</h3>
                <p>Desde reci&eacute;n nacidos hasta los 21 a&ntilde;os.</p>
              </div>
              <div className="atende-card-arc" />
            </div>
          </FadeIn>
          <div className="atendemos-center" style={{ background: "linear-gradient(135deg, rgba(163,180,162,0.1), rgba(190,174,151,0.06))", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 14, color: "#888" }}>Foto principal</span>
          </div>
          <FadeIn delay={0.2}>
            <div className="atende-card">
              <div className="atende-card-img" style={{ background: "rgba(161,155,227,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 13, color: "#888" }}>Foto</span>
              </div>
              <div className="atende-card-body">
                <h3>Especialistas en diversidad</h3>
                <p>Atendemos a personas con neurodivergencias como TEA, TDAH, etc.</p>
              </div>
              <div className="atende-card-arc" />
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="atende-card">
              <div className="atende-card-img" style={{ background: "rgba(251,166,73,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 13, color: "#888" }}>Foto</span>
              </div>
              <div className="atende-card-body">
                <h3>Presente en cada etapa</h3>
                <p>Apoyo desde la estimulaci&oacute;n temprana hasta la transici&oacute;n a la vida adulta.</p>
              </div>
              <div className="atende-card-arc" />
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="atende-card">
              <div className="atende-card-img" style={{ background: "rgba(102,220,196,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 13, color: "#888" }}>Foto</span>
              </div>
              <div className="atende-card-body">
                <h3>Respuesta a sus retos &uacute;nicos</h3>
                <p>Atenci&oacute;n a necesidades en comunicaci&oacute;n, conducta y habilidades sociales.</p>
              </div>
              <div className="atende-card-arc" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ SERVICIOS ═══ */}
      <section className="servicios">
        <div className="servicios-top">
          <FadeIn>
            <div>
              <p className="section-label">Nuestros servicios</p>
              <h2>Nuestros servicios especializados en neurodesarrollo</h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/servicios" className="btn-outline">Ver M&aacute;s Servicios</Link>
          </FadeIn>
        </div>
        <StaggerChildren className="servicios-grid" staggerDelay={0.12}>
          {[
            { color: "yellow", title: "Pediatr\u00eda del desarrollo y comportamiento", desc: "Evaluaci\u00f3n y seguimiento del desarrollo infantil.", slug: "pediatria-desarrollo" },
            { color: "lavender", title: "Terapia conductual", desc: "Intervenci\u00f3n en habilidades adaptativas y de comportamiento.", slug: "terapia-conductual" },
            { color: "lime", title: "Psicopedagog\u00eda", desc: "Apoyo al aprendizaje y estrategias escolares.", slug: "psicopedagogia" },
            { color: "teal", title: "Psiquiatr\u00eda infantil", desc: "Salud mental en ni\u00f1os y adolescentes.", slug: "psiquiatria-infantil" },
            { color: "coral", title: "Terapia de lenguaje", desc: "Desarrollo de comunicaci\u00f3n, habla y lenguaje.", slug: "terapia-lenguaje" },
            { color: "sky", title: "Acompa\u00f1amiento familiar", desc: "Orientaci\u00f3n para familias, escuelas y organizaciones.", slug: "acompanamiento-familiar" },
          ].map((s) => (
            <StaggerItem key={s.slug}>
              <Link href={`/servicios/${s.slug}`} className={`srv-card srv--${s.color}`}>
                <div className="srv-img" style={{ background: "rgba(0,0,0,0.03)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 13, color: "#888" }}>Foto</span>
                </div>
                <div className="srv-info">
                  <span className="srv-arrow">&nearr;</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* ═══ EQUIPO ═══ */}
      <section className="equipo">
        <FadeIn>
          <div className="equipo-header">
            <p className="section-label" style={{ justifyContent: "center" }}>Nuestro equipo</p>
            <h2>Personal M&eacute;dico y Terap&eacute;utico</h2>
          </div>
        </FadeIn>
        <StaggerChildren className="equipo-grid" staggerDelay={0.12}>
          {DOCTORS.slice(0, 4).map((d) => (
            <StaggerItem key={d.slug}>
              <Link href={`/equipo/${d.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div className="doc">
                  <div className="doc-pill">
                    <Image src={d.photo} alt={d.name} fill style={{ objectFit: "cover", objectPosition: "top" }} />
                    <div className="doc-overlay">
                      <h3>{d.name}</h3>
                      <p>{d.role}</p>
                    </div>
                  </div>
                  <p className="doc-name">{d.name}</p>
                  <p className="doc-role">{d.role}</p>
                  <a href="tel:8182751125" className="doc-phone">{PHONE_ICON}</a>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* ═══ CONDICIONES ═══ */}
      <section className="condiciones">
        <FadeIn>
          <p className="section-label">Condiciones que atendemos</p>
          <h2>Aqu&iacute; acompa&ntilde;amos historias, no etiquetas</h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="cond-tags" style={{ marginTop: 40 }}>
            {CONDICIONES.map((c) => (
              <span key={c} className="cond-tag">{c}</span>
            ))}
          </div>
        </FadeIn>
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
                <span style={{ fontSize: 14, color: "#888", marginBottom: 20 }}>Foto del equipo</span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ═══ TESTIMONIOS ═══ */}
      <section className="testimonios">
        <FadeIn>
          <div className="testimonios-header">
            <p className="section-label" style={{ justifyContent: "center" }}>Lo que dicen las familias</p>
            <h2>Experiencias reales, atenci&oacute;n excepcional</h2>
          </div>
        </FadeIn>
        <StaggerChildren className="testimonios-grid" staggerDelay={0.15}>
          {[
            { text: "Desde que llegamos a \u00d3rbita, todo cambi\u00f3. Por primera vez sentimos que alguien entiende a nuestro hijo y nos entiende a nosotros como familia.", author: "Familia Rodr\u00edguez", since: "Paciente desde 2023" },
            { text: "La diferencia con otros lugares es que aqu\u00ed no tienes que repetir la historia en cada consultorio. Todos saben qu\u00e9 est\u00e1 pasando.", author: "Familia Garza", since: "Paciente desde 2024" },
            { text: "Nos dieron claridad cuando no sab\u00edamos ni por d\u00f3nde empezar. Hoy vemos avances reales y eso no tiene precio.", author: "Familia Mart\u00ednez", since: "Paciente desde 2023" },
          ].map((t, i) => (
            <StaggerItem key={i}>
              <div className="test">
                <div className="test-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="test-text">{t.text}</p>
                <p className="test-author">{t.author}</p>
                <p className="test-role">{t.since}</p>
              </div>
            </StaggerItem>
          ))}
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
              <span className="contacto-card-arrow">&nearr;</span>
              <h3>Ll&aacute;manos Ahora</h3>
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="contacto-card">
              <span className="contacto-card-icon">{MAIL_ICON}</span>
              <span className="contacto-card-arrow">&nearr;</span>
              <h3>Whatsapp</h3>
            </a>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </>
  );
}
