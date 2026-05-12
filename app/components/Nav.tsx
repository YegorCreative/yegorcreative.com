import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";

const LINKS = [
  { to: "/",            label: "Home"        },
  { to: "/about",       label: "About"       },
  { to: "/photography", label: "Photography" },
  { to: "/pricing",     label: "Pricing"     },
  { to: "/contact",     label: "Contact"     },
];

export function Nav() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner container">
        <NavLink to="/" className="brand">
          <img src="/lionheadico.png" alt="YegorCreative" width={28} height={28} />
          <span>YegorCreative</span>
        </NavLink>

        <ul
          ref={navRef}
          className={`nav-list${menuOpen ? " open" : ""}`}
          id="nav-list"
        >
          {LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className={`menu-toggle${menuOpen ? " open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="nav-list"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
