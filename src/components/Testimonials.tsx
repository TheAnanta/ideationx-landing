import { useReveal } from "../hooks/useReveal";
import "./Testimonials.css";

const TESTIMONIALS = [
  {
    quote:
      "We ran our internal Smart India Hackathon round with 250+ teams and nowhere near enough mentors to go around. IdeationX ended up being the mentor we didn't have — guiding teams through the build, then evaluating all 250+ of them with detailed, accurate reports within 48 hours. That speed meant students could start on their external-round ideas immediately, and it saved us an enormous amount of manpower. It also flagged issues in a few teams a human reviewer would likely have missed — that came down to how thoroughly the model had been trained on our rubric.",
    initials: "VS",
    name: "Dr. Vikas Srivatsav",
    role: "Deputy Director, Venture Development Centre",
  },
  {
    quote:
      "I used IdeationX to pressure-test STEMQuest before submitting it to Apple's Swift Student Challenge — it caught assumptions in my build I'd otherwise only have found out about from the judges, after it was too late to fix them.",
    initials: "MM",
    name: "Manas Malla",
    role: "Swift Student Challenge · builder of STEMQuest",
  },
  {
    quote:
      "Teams stopped trying to get past us with a good pitch and a broken build — IdeationX read the repo before they got to the mic.",
    initials: "KC",
    name: "Ms. Kavya Chandana",
    role: "Organizer, TechSprint by Google Developer Student Clubs",
  },
  {
    quote:
      "The 2 AM mentorship was the real win — teams building for their own communities finally had someone to sanity-check ideas when we weren't around.",
    initials: "CC",
    name: "Organizing Team",
    role: "Code for Communities Hackathon",
  },
];

export default function Testimonials() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="testimonials" id="testimonials">
      <div className="wrap">
        <div className="section-head center reveal in">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            In Their Words
          </div>
          <h2>What builders and organizers are saying.</h2>
        </div>
        <div className="t-grid reveal" ref={ref}>
          {TESTIMONIALS.map((t) => (
            <div className="t-card" key={t.name}>
              <blockquote>{t.quote}</blockquote>
              <div className="t-attr">
                <div className="t-avatar">{t.initials}</div>
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
