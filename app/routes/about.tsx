import { Link } from "react-router";
import type { MetaFunction } from "react-router";
import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";
import { useReveal } from "~/hooks/useReveal";

export const meta: MetaFunction = () => [
  { title: "About | YegorCreative" },
  {
    name: "description",
    content:
      "About Yegor Hambaryan — photographer and creative director turning moments into lasting visual impressions.",
  },
];

const SKILLS = [
  {
    num: "01",
    title: "Photography",
    desc: "Portrait, landscape, event, product, and brand photography with a meticulous eye for light and composition.",
  },
  {
    num: "02",
    title: "Creative Direction",
    desc: "Concept development, mood boarding, and visual direction for campaigns, brands, and editorial projects.",
  },
  {
    num: "03",
    title: "Graphic Design",
    desc: "Logo design, brand identity, typography, and visual assets crafted with purpose and aesthetic precision.",
  },
  {
    num: "04",
    title: "Web Design",
    desc: "Clean, modern, and performant websites that represent brands beautifully across all devices.",
  },
  {
    num: "05",
    title: "Video &amp; Motion",
    desc: "Short-form video production, reels, and motion graphics for social media and web campaigns.",
  },
  {
    num: "06",
    title: "Image Quality",
    desc: "Deep expertise in image quality assessment, color science, and post-production workflows.",
  },
];

export default function AboutPage() {
  useReveal();

  return (
    <>
      <Nav />

      <main>
        {/* ── Page hero ─────────────────────────────────────── */}
        <section className="page-hero">
          <div className="container">
            <span className="label">About Me</span>
            <h1>
              Hi, I'm <span>Yegor</span>.
            </h1>
            <p>
              Photographer, creative director &amp; visual storyteller —
              passionate about light, color, and the stories a single frame can
              tell.
            </p>
          </div>
        </section>

        {/* ── Bio ───────────────────────────────────────────── */}
        <section className="bio-section">
          <div className="container bio-inner">
            {/* Sticky photo */}
            <div className="bio-photo reveal">
              <img
                src="/YegorHambaryan.png"
                alt="Yegor Hambaryan"
                loading="lazy"
              />
            </div>

            {/* Scrollable text */}
            <div className="bio-content reveal">
              <span className="label">My Story</span>
              <h2>Turning moments into lasting impressions.</h2>

              <p>
                I'm Yegor Hambaryan — a photographer and creative professional
                with a passion for capturing the extraordinary within the
                ordinary. My journey into photography started with a deep
                fascination for light: how it shapes form, evokes emotion, and
                transforms a simple scene into a story worth telling.
              </p>

              <p>
                Over the years I've developed a style that balances technical
                precision with artistic intuition. Whether shooting portraits,
                architecture, or brand campaigns, I approach every project with
                the same mindset: get it right in camera and elevate it in
                post.
              </p>

              <p>
                Beyond photography, I'm deeply invested in creative direction
                — shaping the visual identity of brands and helping them
                communicate who they truly are. I believe great design always
                starts with a great image.
              </p>

              <p>
                When I'm not behind a camera or a screen, you'll find me
                exploring new cities, studying light, and obsessing over image
                quality.
              </p>

              <Link to="/contact" className="btn btn-primary">
                Work With Me
              </Link>
            </div>
          </div>
        </section>

        {/* ── Skills ────────────────────────────────────────── */}
        <section className="skills-section">
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
                Services &amp; Skills
              </h2>
            </div>

            <div className="skills-grid reveal-stagger">
              {SKILLS.map((s) => (
                <div key={s.num} className="skill-card">
                  <span className="skill-num">{s.num}</span>
                  <h3>{s.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: s.desc }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="cta-section reveal">
          <div className="container">
            <h2>
              Ready to <span>collaborate?</span>
            </h2>
            <p>Let's build something memorable together.</p>
            <div className="cta-actions">
              <Link to="/contact"     className="btn btn-primary">Get in Touch</Link>
              <Link to="/photography" className="btn btn-outline">View Work</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
