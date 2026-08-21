import { useReveal } from "../hooks/useReveal";
import "./Pricing.css";

const PLANS = [
  {
    plan: "Community & Hackathons",
    audience: "Organizers · Tech Fests · Hackathon Circuits",
    amount: "$200",
    unit: "/ event",
    sub: "+ $0.50 per participant",
    features: [
      "Up to 48h real-time AI mentorship",
      "Codebase authenticity auditing",
      "Mock & stub fraud detection",
      "Custom multi-tenant rubrics",
    ],
    cta: "Talk to Sales",
    highlight: false,
  },
  {
    plan: "University Pre-Incubation",
    audience: "Colleges · VDCs · Innovation Cells",
    amount: "₹1,00,000",
    unit: "/ year",
    sub: "+ $200 per active venture",
    features: [
      "Year-round TRL 1–4 venture tracking",
      "Failure-pattern retrieval for mentorship",
      "Accreditation-ready audit exports",
      "Dedicated cloud & API capacity",
    ],
    cta: "Request Institutional Demo",
    highlight: true,
  },
  {
    plan: "Independent Innovator",
    audience: "Student Founders · Indie Builders",
    amount: "$20",
    unit: "/ month",
    sub: "Usage-tiered overflow",
    features: [
      "24/7 venture architecture copilot",
      "1,700+ startup failure post-mortems",
      "Local repository health scanner",
      "Structured investor pitch exports",
    ],
    cta: "Start Building",
    highlight: false,
  },
];

export default function Pricing() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <div className="section-head center reveal in">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            Pricing
          </div>
          <h2>Choose the tier that matches your cohort.</h2>
        </div>
        <div className="price-grid reveal" ref={ref}>
          {PLANS.map((p) => (
            <div className={p.highlight ? "price-card highlight" : "price-card"} key={p.plan}>
              {p.highlight && <div className="price-badge">Most Deployed</div>}
              <div className="price-plan">{p.plan}</div>
              <div className="price-audience">{p.audience}</div>
              <div className="price-amount">
                {p.amount} <span>{p.unit}</span>
              </div>
              <div className="price-sub">{p.sub}</div>
              <ul className="price-list">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#" className="price-cta">
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
