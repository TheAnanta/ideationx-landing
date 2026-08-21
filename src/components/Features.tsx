import { useReveal } from "../hooks/useReveal";
import "./Features.css";

const FEATURES = [
  { mark: "01", title: "Failure-Aware Mentorship", body: "Checked against the mechanisms behind real startup failures — not just the industry label." },
  { mark: "02", title: "Codebase Authenticity Audit", body: "A sandboxed scan turns \"trust me, it works\" into a verifiable build report." },
  { mark: "03", title: "Configurable Rubrics", body: "Organizers set the criteria. Every team is scored against the same transparent bar." },
  { mark: "04", title: "Post-Event Venture Synthesis", body: "The best ideas rarely come from one team. IdeationX finds who should merge." },
];

export default function Features() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="features" id="features">
      <div className="wrap">
        <div className="section-head center reveal in">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            Core Capabilities
          </div>
          <h2>Built for people who have to make the call.</h2>
        </div>
        <div className="feature-grid reveal" ref={ref}>
          {FEATURES.map((f) => (
            <div className="feature-card" key={f.mark}>
              <div className="feature-mark">{f.mark}</div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
