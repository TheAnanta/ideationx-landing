import { useReveal } from "../hooks/useReveal";
import "./Roi.css";

const STATS = [
  { tag: "Innovation Tracking", stat: "TRL 1–4", title: "Automated pre-incubation tracking" },
  { tag: "Compliance", stat: "Audit-Ready", title: "Documented innovation ecosystem" },
  { tag: "Faculty Time", stat: "90%↓", title: "Less manual screening" },
];

export default function Roi() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="roi" id="roi">
      <div className="wrap">
        <div className="section-head center reveal in">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            For Institutions
          </div>
          <h2>Evidence your accreditation team will thank you for.</h2>
        </div>
        <div className="roi-grid reveal" ref={ref}>
          {STATS.map((s) => (
            <div className="roi-card" key={s.tag}>
              <div className="roi-tag">{s.tag}</div>
              <div className="roi-stat">{s.stat}</div>
              <h4>{s.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
