import { useEffect, useState } from "react";
import "./Nav.css";

const LINKS = [
  { href: "#problem", label: "Why IdeationX" },
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#signal", label: "Platform" },
  { href: "#testimonials", label: "Stories" },
  { href: "#pricing", label: "Pricing" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? "nav scrolled" : "nav"}>
      <div className="wrap nav-inner">
        <a href="#top" className="brand">
          <span className="brand-dot" />
          IdeationX
        </a>
        <div className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <a className="nav-cta" href="#pricing">
          Request Demo
        </a>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
      {open && (
        <div className="nav-mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a className="nav-cta" href="#pricing" onClick={() => setOpen(false)}>
            Request Demo
          </a>
        </div>
      )}
    </nav>
  );
}
