import { useState } from "react";
import { Link } from "react-router";
import type { MetaFunction } from "react-router";
import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";
import { useReveal } from "~/hooks/useReveal";

export const meta: MetaFunction = () => [
  { title: "YegorCreative — Photography & Creative Direction" },
  {
    name: "description",
    content:
      "Yegor Hambaryan — photographer and creative director crafting visual stories for brands and people worth remembering.",
  },
];

// ── Work photos on the grid ──────────────────────────────────
const WORK_ITEMS = [
  { src: "/Elements/PNG/Asset%201.png",  alt: "Portrait work"      },
  { src: "/Elements/PNG/Asset%206.png",  alt: "Brand photography"  },
  { src: "/Elements/PNG/Asset%2022.png", alt: "Creative direction"  },
  { src: "/Elements/PNG/Asset%209.png",  alt: "Landscape"          },
  { src: "/Elements/PNG/Asset%2030.png", alt: "Editorial"          },
  { src: "/Elements/PNG/Asset%2015.png", alt: "Product photography" },
];

// ── Services accordion ───────────────────────────────────────
const SERVICES = [
  {
    num: "01",
    name: "Photography",
    desc: "Portrait, landscape, brand, and editorial photography — every frame intentional, every shot purpose-built.",
  },
  {
    num: "02",
    name: "Creative Direction",
    desc: "Concept development, mood boarding, and full visual direction for campaigns, editorial, and brand identity.",
  },
  {
    num: "03",
    name: "Graphic Design",
    desc: "Logo design, brand identity systems, typography, and visual assets crafted with precision.",
  },
  {
    num: "04",
    name: "Web Design & Development",
    desc: "Clean, modern, performance-first websites that represent brands beautifully across every device and screen.",
  },
];

// ── Value props ───────────────────────────────────────────────
const VALUES = [
  {
    num: "01",
    title: "Precision First",
    desc: "Every shot is intentional. The goal is understood before a camera is touched.",
  },
  {
    num: "02",
    title: "End-to-End Creative",
    desc: "Concept through final delivery — I handle the full creative pipeline.",
  },
  {
    num: "03",
    title: "Fast Turnaround",
    desc: "Edited and delivered within 48–72 hours for most sessions.",
  },
  {
    num: "04",
    title: "Image Quality Obsessed",
    desc: "Deep expertise in color science and post-production.",
  },
  {
    num: "05",
    title: "Commercial License",
    desc: "Every deliverable comes with full commercial usage rights.",
  },
  {
    num: "06",
    title: "Collaborative Process",
    desc: "Feedback loops and open communication built into every project.",
  },
];

// ── Pricing tiers (preview) ───────────────────────────────────
const TIERS = [
  {
    eye: "Starter",
    name: "Portrait Session",
    price: "199",
    period: "per session · 1 hr",
    features: ["1-hour shoot", "10 edited photos", "Online gallery", "Personal license"],
    missing: ["Commercial license", "Creative direction"],
    featured: false,
  },
  {
    eye: "Pro",
    name: "Brand Session",
    price: "499",
    period: "per session · 3 hrs",
    features: ["3-hour shoot", "30 edited photos + RAW", "Commercial license", "Creative direction"],
    missing: ["Full-day coverage"],
    featured: true,
  },
  {
    eye: "Premium",
    name: "Full Production",
    price: "999",
    period: "starting at",
    features: ["Full-day shoot", "60+ edited photos", "Complete production", "Priority delivery"],
    missing: [],
    featured: false,
  },
];

function ServiceItem({
  num,
  name,
  desc,
}: {
  num: string;
  name: string;
  desc: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="service-item">
      <div
        className="service-head"
        onClick={() => setOpen((o) => !o)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="service-num">{num}</span>
        <span className="service-name">{name}</span>
        <span className="service-arrow" aria-hidden>↗</span>
      </div>
      <div className={`service-body${open ? " open" : ""}`}>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  useReveal();

  return (
    <>
      <Nav />

      <main>
        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="hero">
          <div className="hero-aurora" />

          <div className="hero-body">
            <p className="hero-eyebrow">Photography &amp; Creative Direction</p>
            <h1 className="hero-title">
              VISUAL<br />
              <span className="line-outline">STORIES</span>
              <em>THAT LAND.</em>
            </h1>
            <div className="hero-foot">
              <p className="hero-sub">
                Hi, I'm Yegor — a photographer and creative director passionate
                about capturing moments, building brands, and pushing image
                quality to its limits.
              </p>
              <div className="hero-actions">
                <Link to="/photography" className="btn btn-primary">
                  View Work
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Let's Talk
                </Link>
              </div>
            </div>
          </div>

          <div className="scroll-indicator" aria-hidden="true">
            <div className="scroll-line" />
            <span>Scroll</span>
          </div>
        </section>

        {/* ── Marquee ───────────────────────────────────────── */}
        <div className="marquee-section" aria-hidden="true">
          <div className="marquee-track">
            <div className="marquee-inner">
              {Array.from({ length: 8 }, (_, i) => (
                <span key={i}>
                  Photography &nbsp;·&nbsp; <strong>Brand Identity</strong>
                  &nbsp;·&nbsp; Creative Direction &nbsp;·&nbsp;{" "}
                  <strong>Web Design</strong> &nbsp;·&nbsp; Image Quality
                  &nbsp;·&nbsp;{" "}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Selected Work ─────────────────────────────────── */}
        <section className="work-section">
          <div className="container">
            <div className="section-header reveal">
              <span className="label">Selected Work</span>
              <h2
                style={{
                  fontFamily: "var(--f-display)",
                  fontSize: "clamp(28px,4vw,48px)",
                  fontWeight: 900,
                  letterSpacing: "-.025em",
                }}
              >
                Photography
              </h2>
            </div>

            <div className="work-grid reveal">
              {WORK_ITEMS.map((item, i) => (
                <Link
                  key={i}
                  to="/photography"
                  className="work-item"
                  aria-label={item.alt}
                >
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <div className="work-item-overlay">
                    <span className="work-item-num">0{i + 1}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="section-footer">
              <Link to="/photography" className="arrow-link">
                View All Photography →
              </Link>
            </div>
          </div>
        </section>

        {/* Feature strip */}
        <div className="feature-strip reveal-fade">
          <img
            src="/Elements/PNG/Asset%2031.png"
            alt="Featured work"
            loading="lazy"
          />
          <div className="feature-strip-copy">
            <h2>Every frame tells a story.</h2>
            <p>
              Photography that goes beyond aesthetics — images built to
              communicate, connect, and convert.
            </p>
            <Link to="/photography" className="btn btn-primary">
              Explore the Portfolio
            </Link>
          </div>
        </div>

        {/* ── Services ──────────────────────────────────────── */}
        <section className="services-section">
          <div className="container">
            <div className="section-header reveal">
              <span className="label">What I Do</span>
              <h2
                style={{
                  fontFamily: "var(--f-display)",
                  fontSize: "clamp(28px,4vw,48px)",
                  fontWeight: 900,
                  letterSpacing: "-.025em",
                }}
              >
                Services
              </h2>
            </div>

            <div className="reveal">
              {SERVICES.map((s) => (
                <ServiceItem key={s.num} {...s} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Value Props ───────────────────────────────────── */}
        <section className="value-section">
          <div className="container">
            <div className="section-header reveal">
              <span className="label">Why YegorCreative</span>
              <h2
                style={{
                  fontFamily: "var(--f-display)",
                  fontSize: "clamp(28px,4vw,48px)",
                  fontWeight: 900,
                  letterSpacing: "-.025em",
                }}
              >
                Value you can see.
              </h2>
            </div>
            <div className="value-grid reveal-stagger">
              {VALUES.map((v) => (
                <div key={v.num} className="value-card">
                  <span className="value-num">{v.num}</span>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── About strip ───────────────────────────────────── */}
        <section className="about-section">
          <div className="container about-inner">
            <div className="about-photo reveal">
              <img
                src="/YegorHambaryan.png"
                alt="Yegor Hambaryan"
                loading="lazy"
              />
            </div>
            <div className="about-text reveal">
              <span className="label">About Me</span>
              <h2>
                A creative eye<br />
                <span>behind every frame.</span>
              </h2>
              <p>
                I'm Yegor Hambaryan — a photographer and creative professional
                with a deep fascination for light: how it shapes form, evokes
                emotion, and transforms a simple scene into a story worth
                telling.
              </p>
              <p>
                Over the years I've developed a style that balances technical
                precision with artistic intuition — always asking what an image
                needs to say before deciding how it should look.
              </p>
              <Link to="/about" className="btn btn-outline">
                Read My Story
              </Link>
            </div>
          </div>
        </section>

        {/* ── Pricing Preview ───────────────────────────────── */}
        <section className="pricing-section">
          <div className="container">
            <div className="section-header reveal">
              <span className="label">Pricing</span>
              <h2
                style={{
                  fontFamily: "var(--f-display)",
                  fontSize: "clamp(28px,4vw,48px)",
                  fontWeight: 900,
                  letterSpacing: "-.025em",
                }}
              >
                Transparent. Simple.
              </h2>
            </div>

            <div className="pricing-grid reveal-stagger">
              {TIERS.map((t) => (
                <div
                  key={t.name}
                  className={`pricing-card${t.featured ? " featured" : ""}`}
                >
                  <p className="pricing-eyebrow">{t.eye}</p>
                  <p className="pricing-name">{t.name}</p>
                  <div className="pricing-amount">
                    <span className="dol">$</span>
                    <span className="num">{t.price}</span>
                  </div>
                  <p className="pricing-period">{t.period}</p>
                  <div className="pricing-line" />
                  <ul className="pricing-features">
                    {t.features.map((f) => (
                      <li key={f}>
                        <span className="check">✓</span>
                        {f}
                      </li>
                    ))}
                    {t.missing.map((f) => (
                      <li key={f}>
                        <span className="dash">–</span>
                        <span style={{ opacity: 0.35 }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={t.featured ? "btn btn-primary" : "btn btn-outline"}
                  >
                    Book Now
                  </Link>
                </div>
              ))}
            </div>

            <div className="section-footer">
              <Link to="/pricing" className="arrow-link">
                See All Packages &amp; Add-Ons →
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="cta-section reveal">
          <div className="container">
            <h2>
              Let's create<br />
              something <span>great.</span>
            </h2>
            <p>
              Whether it's a portrait session, branding shoot, or a bold
              creative concept — let's talk about what you're building.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Start a Project
              </Link>
              <Link to="/photography" className="btn btn-outline">
                View Portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
