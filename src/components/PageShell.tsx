import { Link } from "react-router-dom";
import "./PageShell.css";

export default function PageShell({
  children,
  eyebrow,
  narrow = true,
}: {
  children: React.ReactNode;
  eyebrow?: string;
  narrow?: boolean;
}) {
  return (
    <div className="shell">
      <div className="shell-glow" aria-hidden="true" />
      <nav className="shell-nav">
        <div className="wrap shell-nav-inner">
          <Link to="/" className="brand">
            <span className="brand-dot" />
            IdeationX
          </Link>
          <Link to="/" className="shell-back">
            ← Back to site
          </Link>
        </div>
      </nav>
      <main className={narrow ? "shell-main narrow" : "shell-main"}>
        {eyebrow && (
          <div className="eyebrow" style={{ justifyContent: "center", marginBottom: 14 }}>
            {eyebrow}
          </div>
        )}
        {children}
      </main>
    </div>
  );
}
