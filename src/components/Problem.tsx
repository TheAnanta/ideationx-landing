import { useReveal } from "../hooks/useReveal";
import "./Problem.css";

const ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <rect x="7" y="7" width="11" height="11" rx="3" stroke="currentColor" strokeWidth="2" />
        <rect x="22" y="7" width="11" height="11" rx="3" stroke="currentColor" strokeWidth="2" />
        <rect x="7" y="22" width="11" height="11" rx="3" stroke="currentColor" strokeWidth="2" />
        <rect x="22" y="22" width="11" height="11" rx="3" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.15" />
      </svg>
    ),
    title: "Everyone builds the same idea",
    body: "One AI prompt, a hundred identical apps. The real problems stay untouched.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <path d="M20 8v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="27" r="1.6" fill="currentColor" />
        <path d="M9 32h22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 6" />
      </svg>
    ),
    title: "Demos lie, evaluators can't tell",
    body: "Fake loaders and hardcoded data can win a 3-minute pitch.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="2" />
        <path d="M20 13v7l5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "No one's watching in between",
    body: "The real decisions happen at 2 AM, with no mentor and no record.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="14" cy="16" r="6" stroke="currentColor" strokeWidth="2" />
        <path d="M6 33c0-6 4-10 8-10s8 4 8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M27 12a11 11 0 0 1 0 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 5" />
      </svg>
    ),
    title: "Building alone has no second opinion",
    body: "Solo innovators compound bad assumptions for weeks before anyone points them out.",
  },
];

export default function Problem() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="problem" id="problem">
      <div className="wrap">
        <div className="section-head center reveal in">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            Why We Built This
          </div>
          <h2>Validating an idea broke a long time ago.</h2>
        </div>
        <div className="problem-grid reveal" ref={ref}>
          {ITEMS.map((item) => (
            <div className="problem-card" key={item.title}>
              <div className="problem-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
