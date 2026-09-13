import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import "./ValueProps.css";

type StakeKey = "organizers" | "incubators" | "participants" | "individual";

const STAKES: {
  key: StakeKey;
  label: string;
  sub: string;
  headline: string;
  points: string[];
  stat: { value: string; label: string };
}[] = [
  {
    key: "organizers",
    label: "Organizers",
    sub: "Hackathons, ideathons, tech fests",
    headline: "Judge what shipped. Not what was pitched.",
    points: [
      "Automated authenticity scorecards replace a 3-minute gut call",
      "Mock-data and fake-loader detection catches rigged demos before they win",
      "Rubrics configured to your event — SIH-style, corporate, or academic",
      "A live heatmap shows which teams are stuck, in real time",
    ],
    stat: { value: "90%", label: "less manual screening time" },
  },
  {
    key: "incubators",
    label: "Incubators",
    sub: "Universities, VDCs, IIC chapters",
    headline: "An accreditation-ready record, not a stack of certificates.",
    points: [
      "TRL 1–4 tracking logged automatically across every venture",
      "Audit exports mapped to NIRF, NAAC 3.3.1, and NISP/IIC",
      "See which ventures are actually worth continuing to fund",
      "Scales to large cohorts — 250+ teams evaluated in 48 hours, in practice",
    ],
    stat: { value: "48 hrs", label: "to fully score 250+ teams" },
  },
  {
    key: "participants",
    label: "Participants",
    sub: "The teams actually building",
    headline: "A mentor in the room for all 48 hours, not just the finale.",
    points: [
      "Real-time architecture guidance while you're still deciding what to build",
      "Flags bad assumptions before demo day, not after",
      "Judged on what you actually shipped — not who pitches better",
      "Complementary teams get matched to merge after the event",
    ],
    stat: { value: "24/7", label: "mentorship during the event" },
  },
  {
    key: "individual",
    label: "Individual Innovators",
    sub: "Solo founders, indie hackers",
    headline: "The co-founder you argue with, minus the co-founder.",
    points: [
      "24/7 copilot checked against 1,700+ real startup failures",
      "Finds the loophole generic AI is built to agree past",
      "Private by design — no fear of an idea getting shared around",
      "Structured investor pitch exports when you're ready to raise",
    ],
    stat: { value: "1,700+", label: "failure post-mortems on call" },
  },
];

export default function ValueProps() {
  const [active, setActive] = useState<StakeKey>("organizers");
  const ref = useReveal<HTMLDivElement>();
  const current = STAKES.find((s) => s.key === active)!;

  return (
    <section className="value-props" id="value">
      <div className="wrap">
        <div className="section-head center reveal in">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            Built For Every Seat
          </div>
          <h2>The same platform, a different payoff for each of you.</h2>
          <p>Pick who you are — the rest of the page is written for everyone at once, this part isn't.</p>
        </div>

        <div className="stake-tabs reveal" ref={ref}>
          {STAKES.map((s) => (
            <button
              key={s.key}
              className={active === s.key ? "stake-tab active" : "stake-tab"}
              onClick={() => setActive(s.key)}
            >
              <span className="stake-tab-label">{s.label}</span>
              <span className="stake-tab-sub">{s.sub}</span>
            </button>
          ))}
        </div>

        <div className="stake-panel">
          <div className="stake-panel-text">
            <h3>{current.headline}</h3>
            <ul className="stake-points">
              {current.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="stake-stat">
            <div className="stake-stat-value">{current.stat.value}</div>
            <div className="stake-stat-label">{current.stat.label}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
