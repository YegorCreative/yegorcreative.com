import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <img src="/lionheadico.png" alt="YegorCreative" width={26} height={26} />
              <span>YegorCreative</span>
            </Link>
            <p className="footer-tagline">
              Photography &amp; creative direction by Yegor Hambaryan.<br />
              Built for brands and people worth remembering.
            </p>
            <div className="socials">
              <a href="#" className="social-btn" aria-label="Instagram">
                <img src="/instagram.png" alt="Instagram" width={18} />
              </a>
              <a href="#" className="social-btn" aria-label="YouTube">
                <img src="/youtube.png" alt="YouTube" width={18} />
              </a>
              <a href="#" className="social-btn" aria-label="LinkedIn">
                <img src="/linkedIn.png" alt="LinkedIn" width={18} />
              </a>
              <a href="https://github.com/YegorCreative" className="social-btn" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <img src="/github.png" alt="GitHub" width={18} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/photography">Photography</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/pricing">Portrait Sessions</Link></li>
              <li><Link to="/pricing">Brand Photography</Link></li>
              <li><Link to="/pricing">Creative Direction</Link></li>
              <li><Link to="/pricing">Web Design</Link></li>
              <li><Link to="/contact">Custom Projects</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} YegorCreative. All rights reserved.
          </p>
          <a href="mailto:hello@yegorcreative.com" className="arrow-link" style={{ fontSize: "0.78rem" }}>
            hello@yegorcreative.com →
          </a>
        </div>
      </div>
    </footer>
  );
}
