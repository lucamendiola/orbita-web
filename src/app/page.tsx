import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/StaggerChildren";
import { DOCTORS, SERVICES, WA_URL } from "@/lib/data";
import { getAllPosts } from "@/lib/blog";

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const PHONE_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const COLOR_MAP: Record<string, string> = {
  lavender: "var(--lavender)", coral: "var(--coral)", "teal-light": "var(--teal-light)",
  orange: "var(--orange)", sky: "var(--sky)", lime: "var(--lime)",
};

const CONDICIONES = [
  "TEA", "TDAH", "S\u00edndrome de Down", "S\u00edndrome de Tourette",
  "Dislexia", "Disgraf\u00eda", "Discalculia", "Trastornos del lenguaje",
  "Problemas motores", "Retrasos en el desarrollo", "Ansiedad",
  "Problemas de sue\u00f1o", "Dificultades de alimentaci\u00f3n",
  "Discapacidad intelectual", "Altas capacidades",
];

const MARQUEE_ITEMS = ["TecSalud", "AINE A.C.", "Fundaci\u00f3n FEMSA", "RCD Down", "SDBP"];

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <Nav activePage="home" />

      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="hero-left">
          <FadeIn delay={0.1}>
            <div className="hero-tag">
              <span className="hero-tag-dot" />
              Alianza con TecSalud &middot; Monterrey
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1>
              Atenci&oacute;n integral para{" "}
              <em>neurodesarrollo</em> y bienestar
            </h1>
          </FadeIn>
          <FadeIn delay={0.35}>
            <p className="hero-desc">
              Medicina, terapias y psicolog&iacute;a basadas en evidencia, integradas
              en un solo equipo transdisciplinario. Un plan. Un lugar. Todo conectado
              alrededor de tu hijo.
            </p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <div className="hero-ctas">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-wa">
                {WA_ICON} Agenda tu cita
              </a>
              <a href="tel:8182751125" className="btn-ghost">81 8275 1125 &rarr;</a>
            </div>
          </FadeIn>
          <FadeIn delay={0.6}>
            <div className="hero-stats">
              <div>
                <div className="hero-stat-num">98%</div>
                <div className="hero-stat-label">Satisfacci&oacute;n familiar</div>
              </div>
              <div>
                <div className="hero-stat-num">0&ndash;21</div>
                <div className="hero-stat-label">A&ntilde;os de edad</div>
              </div>
              <div>
                <div className="hero-stat-num">10+</div>
                <div className="hero-stat-label">Especialidades</div>
              </div>
            </div>
          </FadeIn>
        </div>
        <div className="hero-right">
          <div className="hero-collage">
            <div className="hero-collage-top">
              <div className="hero-photo">
                <Image src="/images/consulta-1.jpg" alt="Consulta" fill style={{ objectFit: "cover" }} priority />
                <div className="hero-badge-float">
                  <div className="hero-badge-num">6+</div>
                  <div className="hero-badge-text">Especialidades<br />bajo un techo</div>
                </div>
              </div>
              <div className="hero-photo">
                <Image src="/images/consulta-2.jpg" alt="Equipo" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
            <div className="hero-collage-bottom">
              <div className="hero-photo">
                <Image src="/images/consulta-3.jpg" alt="Terapia" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="hero-photo">
                <Image src="/images/consulta-center.jpg" alt="Centro" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MARQUEE TRUST ═══ */}
      <div className="marquee-section">
        <div className="marquee">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i}>
              <span className="marquee-item">{item}</span>
              <span className="marquee-dot"> &bull; </span>
            </span>
          ))}
        </div>
      </div>

      {/* ═══ ORBIT SECTION ═══ */}
      <section className="orbit-section">
        <div className="orbit-text">
          <FadeIn>
            <h2>Tu hijo al centro.<br />Todo lo dem&aacute;s, en &oacute;rbita.</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p>
              No somos consultorios separados. Somos un ecosistema donde cada especialista
              conoce a tu hijo y trabaja en el mismo plan.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="orbit-values">
              <span className="orbit-val"><span className="orbit-val-dot" style={{ background: "var(--sage)" }} /> Integridad</span>
              <span className="orbit-val"><span className="orbit-val-dot" style={{ background: "var(--lavender)" }} /> Innovaci&oacute;n</span>
              <span className="orbit-val"><span className="orbit-val-dot" style={{ background: "var(--coral)" }} /> Inclusi&oacute;n</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="orbit-stat">
              <span className="orbit-stat-num">98%</span>
              <span className="orbit-stat-label">Satisfacci&oacute;n de nuestras familias</span>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="orbit-container">
            {/* Static ring backgrounds */}
            <div className="orbit-ring-bg ring-bg-1" />
            <div className="orbit-ring-bg ring-bg-2" />
            <div className="orbit-ring-bg ring-bg-3" />

            {/* Center */}
            <div className="orbit-center">
              <span className="orbit-center-icon">&#9825;</span>
              <span className="orbit-center-label">Tu hijo</span>
            </div>

            {/* Track 1: Outer (4 nodes) */}
            <div className="orbit-track track-1">
              <div className="orbit-node-anchor anchor-0">
                <div className="orbit-node"><span className="node-dot" style={{ background: "var(--sky)" }} />Pediatr&iacute;a del desarrollo</div>
              </div>
              <div className="orbit-node-anchor anchor-1">
                <div className="orbit-node"><span className="node-dot" style={{ background: "var(--coral)" }} />Terapia conductual</div>
              </div>
              <div className="orbit-node-anchor anchor-2">
                <div className="orbit-node"><span className="node-dot" style={{ background: "var(--lime)" }} />Psicopedagog&iacute;a</div>
              </div>
              <div className="orbit-node-anchor anchor-3">
                <div className="orbit-node"><span className="node-dot" style={{ background: "var(--orange)" }} />Terapia de lenguaje</div>
              </div>
              <div className="deco-dot" style={{ width: 8, height: 8, background: "var(--lime)", opacity: 0.4, top: "25%", left: "2%" }} />
              <div className="deco-dot" style={{ width: 5, height: 5, background: "var(--sky)", opacity: 0.3, bottom: "20%", right: "8%" }} />
            </div>

            {/* Track 2: Middle (2 nodes, reverse) */}
            <div className="orbit-track track-2">
              <div className="orbit-node-anchor anchor-0">
                <div className="orbit-node"><span className="node-dot" style={{ background: "var(--lavender)" }} />Neurolog&iacute;a pedi&aacute;trica</div>
              </div>
              <div className="orbit-node-anchor anchor-1">
                <div className="orbit-node"><span className="node-dot" style={{ background: "var(--teal-light)" }} />Psiquiatr&iacute;a infantil</div>
              </div>
              <div className="deco-dot" style={{ width: 6, height: 6, background: "var(--lavender)", opacity: 0.35, top: "10%", right: "20%" }} />
            </div>

            {/* Track 3: Inner (2 nodes) */}
            <div className="orbit-track track-3">
              <div className="orbit-node-anchor anchor-0">
                <div className="orbit-node"><span className="node-dot" style={{ background: "var(--sage)" }} />Neuropsicolog&iacute;a</div>
              </div>
              <div className="orbit-node-anchor anchor-1">
                <div className="orbit-node"><span className="node-dot" style={{ background: "var(--coral)" }} />Psicolog&iacute;a cl&iacute;nica</div>
              </div>
              <div className="deco-dot" style={{ width: 4, height: 4, background: "var(--orange)", opacity: 0.3, bottom: "30%", left: "25%" }} />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Quote bar */}
      <div className="quote-bar">
        <FadeIn>
          <blockquote>&ldquo;En &Oacute;rbita, el centro eres t&uacute;. No vemos l&iacute;mites, vemos procesos. Acompa&ntilde;amos historias, no etiquetas.&rdquo;</blockquote>
        </FadeIn>
      </div>

      {/* ═══ PROCESO ═══ */}
      <section className="proceso">
        <div className="proceso-header">
          <FadeIn>
            <div className="proceso-tag">C&oacute;mo funciona</div>
            <h2>Del primer contacto al plan integral.</h2>
          </FadeIn>
        </div>
        <StaggerChildren className="proceso-steps" staggerDelay={0.15}>
          <StaggerItem>
            <div className="paso">
              <div className="paso-num">01</div>
              <div className="paso-body">
                <h3>Evaluaci&oacute;n integral</h3>
                <p>El equipo completo eval&uacute;a para entender el perfil &uacute;nico de tu hijo. No un solo especialista, todos.</p>
              </div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="paso">
              <div className="paso-num">02</div>
              <div className="paso-body">
                <h3>Plan personalizado</h3>
                <p>Dise&ntilde;amos el plan de intervenci&oacute;n a la medida: terapias, frecuencias, objetivos. Un solo plan.</p>
              </div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="paso">
              <div className="paso-num">03</div>
              <div className="paso-body">
                <h3>Acompa&ntilde;amiento continuo</h3>
                <p>Trabajamos contigo y tu familia. Ajustamos, medimos, celebramos. El plan evoluciona con tu hijo.</p>
              </div>
            </div>
          </StaggerItem>
        </StaggerChildren>
      </section>

      {/* ═══ SERVICIOS ═══ */}
      <section className="servicios">
        <div className="servicios-top">
          <FadeIn>
            <div>
              <p className="section-label">Nuestros servicios</p>
              <h2>Las especialidades que orbitan alrededor de tu hijo</h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/servicios" className="btn-outline">Ver todos &rarr;</Link>
          </FadeIn>
        </div>
        <StaggerChildren className="servicios-grid" staggerDelay={0.1}>
          {SERVICES.slice(0, 6).map((s) => (
            <StaggerItem key={s.slug}>
              <Link href={`/servicios/${s.slug}`} className={`srv-card srv--${s.color}`}>
                <div className="srv-img" style={{ position: "relative", background: "rgba(0,0,0,.03)" }}>
                  <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "#888" }}>Foto</span>
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
      <section className="equipo" style={{ background: "var(--cream)" }}>
        <FadeIn>
          <div className="equipo-header">
            <p className="section-label" style={{ justifyContent: "center" }}>Nuestro equipo</p>
            <h2>El equipo que orbita alrededor de tu hijo</h2>
          </div>
        </FadeIn>
        <StaggerChildren className="equipo-grid" staggerDelay={0.1}>
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
                  <a href="tel:8182751125" className="doc-phone">{PHONE_ICON}</a>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* ═══ CONDICIONES ═══ */}
      <section className="condiciones" style={{ textAlign: "center" }}>
        <FadeIn>
          <h2>Acompa&ntilde;amos historias, no etiquetas</h2>
          <p style={{ maxWidth: 480, margin: "12px auto 36px", fontSize: 17 }}>
            Cada condici&oacute;n tiene su propio camino. Nosotros caminamos contigo.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="cond-tags" style={{ justifyContent: "center", maxWidth: 780, margin: "0 auto" }}>
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
                {WA_ICON} Agenda Tu Cita
              </a>
              <div className="cta-banner-hours">
                <span><strong>L&ndash;V</strong>&nbsp; 9AM&ndash;7PM</span>
                <span><strong>S&aacute;b</strong>&nbsp; 9AM&ndash;2PM</span>
              </div>
            </div>
            <div className="cta-banner-visual">
              <div className="cta-blob" />
              <div style={{ position: "relative", zIndex: 1, width: "100%", height: "100%" }}>
                <Image src="/images/team-3.png" alt="Equipo" fill style={{ objectFit: "contain", objectPosition: "bottom" }} />
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
            { text: "Desde que llegamos a \u00d3rbita, todo cambi\u00f3. Por primera vez sentimos que alguien entiende a nuestro hijo y nos entiende a nosotros.", author: "Familia Rodr\u00edguez", since: "Paciente desde 2023" },
            { text: "Aqu\u00ed no repites la historia en cada consultorio. Todos saben qu\u00e9 est\u00e1 pasando, todos avanzan en la misma direcci\u00f3n.", author: "Familia Garza", since: "Paciente desde 2024" },
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

      {/* ═══ BLOG ═══ */}
      <section className="blog-preview">
        <div className="blog-top">
          <FadeIn><h2>Recursos para tu familia</h2></FadeIn>
          <FadeIn delay={0.15}><Link href="/blog" className="btn-outline">Ver todos &rarr;</Link></FadeIn>
        </div>
        <StaggerChildren className="blog-grid" staggerDelay={0.12}>
          {posts.map((post) => {
            const bg = post.tags[0] === "atenci\u00f3n" ? "var(--teal)" : post.tags[0] === "prevenci\u00f3n" ? "var(--orange-bg)" : "var(--teal-bg)";
            return (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="blog-card">
                  <div className="blog-card-img" style={{ background: bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: 13, color: bg === "var(--teal)" ? "rgba(255,255,255,.5)" : "#888" }}>Imagen</span>
                  </div>
                  <div className="blog-card-body">
                    <p className="blog-card-meta">{post.tags[0]}</p>
                    <h3>{post.title}</h3>
                    <p>{post.description.slice(0, 80)}...</p>
                    <span className="blog-card-link">Leer &rarr;</span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </section>

      {/* ═══ CONTACTO ═══ */}
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
              <span className="contacto-card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#dddee0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <span className="contacto-card-arrow">&nearr;</span>
              <h3>WhatsApp</h3>
            </a>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </>
  );
}
