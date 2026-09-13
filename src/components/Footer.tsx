import { Link } from "react-router-dom";
import AnantaLogo from "./AnantaLogo";
import "./Footer.css";

const BADGES = ["Zero-Code Storage", "Sandboxed On-Device Auditing", "Enterprise Cloud Isolation"];

const COLUMNS = [
  {
    title: "Platform",
    links: [
      { label: "How it Works", href: "#signal" },
      { label: "Capabilities", href: "#features" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Institutions",
    links: [
      { label: "Accreditation Fit", href: "#roi" },
      { label: "Stories", href: "#testimonials" },
    ],
  },
  {
    title: "Company",
    links: [{ label: "Contact", href: "/contact" }],
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="badges">
          {BADGES.map((b) => (
            <div className="badge" key={b}>
              {b}
            </div>
          ))}
        </div>
        <div className="footer-grid">
          <a href="#top" className="brand">
            <span className="brand-dot" />
            IdeationX
          </a>
          <div className="footer-cols">
            {COLUMNS.map((col) => (
              <div className="footer-col" key={col.title}>
                <h5>{col.title}</h5>
                {col.links.map((l) =>
                  l.href.startsWith("#") ? (
                    <a key={l.label} href={l.href}>
                      {l.label}
                    </a>
                  ) : (
                    <Link key={l.label} to={l.href}>
                      {l.label}
                    </Link>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 IdeationX. All rights reserved.</span>
          <span className="footer-ananta">
            IdeationX • an initiative of <AnantaLogo className="ananta-mark" />
          </span>
        </div>
      </div>
    </footer>
  );
}
