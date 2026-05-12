import { Link } from "react-router";
import type { MetaFunction } from "react-router";
import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";
import { useReveal } from "~/hooks/useReveal";

export const meta: MetaFunction = () => [
  { title: "Pricing | YegorCreative" },
  {
    name: "description",
    content:
      "Transparent pricing for photography, creative direction, graphic design, and web design services.",
  },
];

const TIERS = [
  {
    name: "Essential",
    eyebrow: "For individuals",
    price: "$199",
    unit: "/ session",
    desc: "Perfect for headshots, personal branding, or a small creative project.",
    features: [
      "1–2 hour shoot",
      "30 edited hi-res images",
      "1 location",
      "Online delivery within 5 days",
      "Personal-use license",
    ],
    cta: "Book Essential",
    featured: false,
  },
  {
    name: "Professional",
    eyebrow: "Most popular",
    price: "$499",
    unit: "/ project",
    desc: "Full creative production for brands, events, and commercial campaigns.",
    features: [
      "Half-day shoot (up to 4 hrs)",
      "80+ edited hi-res images",
      "Multiple locations",
      "Creative direction included",
      "Commercial-use license",
      "Priority 48-hr delivery",
    ],
    cta: "Book Professional",
    featured: true,
  },
  {
    name: "Premium",
    eyebrow: "Full service",
    price: "$999",
    unit: "/ project",
    desc: "Comprehensive end-to-end creative direction, photography, and design delivery.",
    features: [
      "Full-day shoot (up to 8 hrs)",
      "150+ edited hi-res images",
      "Unlimited locations",
      "Full creative direction & mood board",
      "Brand asset delivery (print + web)",
      "Rush 24-hr turnaround option",
      "Dedicated project manager",
    ],
    cta: "Book Premium",
    featured: false,
  },
];

const ADDONS = [
  {
    icon: "📸",
    title: "Extra Photos",
    price: "$15 / photo",
    desc: "Add additional fully edited images beyond your package limit.",
  },
  {
    icon: "🎬",
    title: "BTS Video",
    price: "+$150",
    desc: "Behind-the-scenes short-form video reel for social media.",
  },
  {
    icon: "🖨️",
    title: "Print-Ready Export",
    price: "+$75",
    desc: "CMYK color corrected, print-profiled files ready for any printer.",
  },
  {
    icon: "⚡",
    title: "Rush 24-hr Delivery",
    price: "+$99",
    desc: "Get your fully edited images within 24 hours of the shoot.",
  },
  {
    icon: "🌐",
    title: "Web Design Bundle",
    price: "from $499",
    desc: "A matching website or landing page to pair with your new visuals.",
  },
  {
    icon: "🔄",
    title: "Monthly Retainer",
    price: "Custom",
    desc: "Ongoing creative support, photo content, and brand management.",
  },
];

export default function PricingPage() {
  useReveal();

  return (
    <>
      <Nav />

      <main>
        {/* ── Page hero ─────────────────────────────────────── */}
        <section className="page-hero">
          <div className="container">
            <span className="label">Pricing</span>
            <h1>
              Simple, <span>transparent</span> pricing.
            </h1>
            <p>
              No hidden fees. No surprises. Just honest rates for high-quality
              creative work.
            </p>
          </div>
        </section>

        {/* ── Pricing tiers ─────────────────────────────────── */}
        <section style={{ padding: "100px 0" }}>
          <div className="container">
            <div className="pricing-grid reveal-stagger">
              {TIERS.map((t) => (
                <div
                  key={t.name}
                  className={`pricing-card${t.featured ? " featured" : ""}`}
                >
                  <div className="pricing-eyebrow">{t.eyebrow}</div>
                  <h3 className="pricing-name">{t.name}</h3>
                  <div className="pricing-price">
                    {t.price}
                    <span>{t.unit}</span>
                  </div>
                  <p className="pricing-desc">{t.desc}</p>
                  <ul className="pricing-features">
                    {t.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={t.featured ? "btn btn-primary" : "btn btn-outline"}
                  >
                    {t.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Add-ons ───────────────────────────────────────── */}
        <section className="addons-section">
          <div className="container">
            <div className="section-header reveal">
              <span className="label">Add-Ons</span>
              <h2
                style={{
                  fontFamily: "var(--f-display)",
                  fontSize: "clamp(28px,4vw,48px)",
                  fontWeight: 900,
                  letterSpacing: "-.025em",
                  marginTop: 8,
                }}
              >
                Enhance your package
              </h2>
              <p style={{ color: "var(--text-dim)", marginTop: 12 }}>
                Bolt on extras to any tier at checkout.
              </p>
            </div>

            <div className="addons-grid reveal-stagger">
              {ADDONS.map((a) => (
                <div key={a.title} className="addon-card">
                  <div className="addon-icon">{a.icon}</div>
                  <h3>{a.title}</h3>
                  <p
                    style={{
                      color: "var(--gold)",
                      fontFamily: "var(--f-display)",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      marginBottom: 10,
                    }}
                  >
                    {a.price}
                  </p>
                  <p>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="cta-section reveal">
          <div className="container">
            <h2>
              Not sure which plan? <span>Let's talk.</span>
            </h2>
            <p>
              Every project is unique. Get in touch and I'll put together a
              custom quote.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Contact Me
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
