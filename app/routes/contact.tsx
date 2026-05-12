import { useState } from "react";
import type { MetaFunction } from "react-router";
import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";
import { useReveal } from "~/hooks/useReveal";

export const meta: MetaFunction = () => [
  { title: "Contact | YegorCreative" },
  {
    name: "description",
    content:
      "Get in touch with Yegor Hambaryan for photography, creative direction, and design projects.",
  },
];

export default function ContactPage() {
  useReveal();

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Nav />

      <main>
        <section className="contact-section">
          <div className="container">
            <div className="contact-inner">
              {/* ── Left info ─────────────────────────────────── */}
              <div className="contact-info reveal">
                <h1>
                  Let's create something <span>great.</span>
                </h1>
                <p>
                  Have a project in mind? Whether it's a brand shoot, a new
                  website, or a full creative campaign — I'd love to hear about
                  it. Fill out the form or reach out directly.
                </p>

                <div className="contact-links">
                  <a
                    href="mailto:yegor@yegorcreative.com"
                    className="contact-link"
                  >
                    <img src="/email.png" alt="Email" />
                    yegor@yegorcreative.com
                  </a>
                  <a
                    href="https://www.instagram.com/yegorcreative"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <img src="/instagram.png" alt="Instagram" />
                    @yegorcreative
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yegorhambaryan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <img src="/linkedIn.png" alt="LinkedIn" />
                    linkedin.com/in/yegorhambaryan
                  </a>
                  <a
                    href="https://www.youtube.com/@yegorcreative"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <img src="/youtube.png" alt="YouTube" />
                    YouTube / YegorCreative
                  </a>
                </div>
              </div>

              {/* ── Right form ────────────────────────────────── */}
              <div className="contact-form reveal">
                {status === "sent" ? (
                  <div
                    style={{
                      padding: "80px 0",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "2.4rem",
                        marginBottom: 20,
                      }}
                    >
                      ✓
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--f-display)",
                        fontSize: "1.4rem",
                        fontWeight: 700,
                        marginBottom: 12,
                      }}
                    >
                      Message sent!
                    </h3>
                    <p style={{ color: "var(--text-dim)" }}>
                      I'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          placeholder="Jane"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          placeholder="Smith"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="jane@company.com"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">What are you looking for?</label>
                      <select id="subject" name="subject" required>
                        <option value="">Select a service…</option>
                        <option value="photography">Photography</option>
                        <option value="creative-direction">
                          Creative Direction
                        </option>
                        <option value="graphic-design">Graphic Design</option>
                        <option value="web-design">Web Design</option>
                        <option value="other">Other / Custom</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Tell me about your project</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="A brief overview of your project, timeline, and budget…"
                        required
                      />
                    </div>

                    {status === "error" && (
                      <p
                        style={{
                          color: "#e05c5c",
                          fontSize: "0.85rem",
                          marginBottom: 12,
                        }}
                      >
                        Something went wrong — please try again or email
                        directly.
                      </p>
                    )}

                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={status === "sending"}
                    >
                      {status === "sending" ? "Sending…" : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
