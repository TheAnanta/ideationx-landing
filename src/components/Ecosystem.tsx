import jahnaviThink from "../assets/jahnavi-think.webp";
import vidurExplain from "../assets/vidur-explain.webp";
import { useReveal } from "../hooks/useReveal";
import "./Ecosystem.css";

const ROLES = [
  { tag: "Builder", name: "Team or solo innovator", body: "A 24/7 copilot that flags bad assumptions before they get expensive." },
  { tag: "Mentor", name: "Vidur, the AI copilot", body: "Matches every decision against thousands of past failures, in real time." },
  { tag: "Organizer", name: "Whoever has to judge the work", body: "A scorecard built from what got shipped, not just what got pitched." },
  { tag: "Institution", name: "The program behind it all", body: "An auditable record of the whole cohort's progress — useful for accreditation, and for knowing which ventures are actually worth continuing." },
];

export default function Ecosystem() {
  const sceneRef = useReveal<HTMLDivElement>();
  const rolesRef = useReveal<HTMLDivElement>();

  return (
    <section className="ecosystem" id="ecosystem">
      <div className="wrap">
        <div className="section-head center reveal in">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            The Ecosystem
          </div>
          <h2>One conversation, running the whole time.</h2>
        </div>

        <div className="scene reveal" ref={sceneRef}>
          <div className="scene-person left">
            <div className="bubble bubble-left">
              thinking we charge per seat — keeps it simple to build
            </div>
            <img src={jahnaviThink} alt="Jahnavi, reconsidering" />
            <span className="scene-name">@jahnavi · Project Gangotri</span>
          </div>
          <div className="scene-person right">
            <div className="bubble bubble-right">
              this shape has sunk a few teams before — try a flat fee instead
            </div>
            <img src={vidurExplain} alt="Vidur, explaining a suggestion" />
            <span className="scene-name">@vidur · AI Mentor</span>
          </div>
        </div>

        <div className="role-flow reveal" ref={rolesRef}>
          {ROLES.map((r, i) => (
            <div className="role-item" key={r.tag}>
              <div className="role-num">0{i + 1}</div>
              <div className="role-tag">{r.tag}</div>
              <div className="role-name">{r.name}</div>
              <p>{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
