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
    links: [
      { label: "Contact", href: "#" },
      { label: "Careers", href: "#" },
    ],
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
                {col.links.map((l) => (
                  <a key={l.label} href={l.href}>
                    {l.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 IdeationX. All rights reserved.</span>
          <span>IdeationX • an initiative of the Ananta</span>
        </div>
      </div>
    </footer>
  );
}
