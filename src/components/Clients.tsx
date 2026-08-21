import { useReveal } from "../hooks/useReveal";
import "./Clients.css";

const CLIENTS = [
  "Global Hackathon Circuits",
  "University IIC Chapters",
  "State Tech Fests",
  "Corporate Innovation Sprints",
  "Pre-Incubation Hubs",
  "Venture Development Centres",
  "Independent Innovators",
  "Student Innovation Councils",
];

export default function Clients() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="clients">
      <div className="wrap">
        <div className="section-head center reveal in">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            Deployed Across
          </div>
        </div>
        <div className="client-strip reveal" ref={ref}>
          {CLIENTS.map((c) => (
            <div className="client-cell" key={c}>
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
