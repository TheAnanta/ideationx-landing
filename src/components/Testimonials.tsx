import { useReveal } from "../hooks/useReveal";
import "./Testimonials.css";

export default function Testimonials() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="testimonials" id="testimonials">
      <div className="wrap">
        <div className="section-head center reveal in">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            In Their Words
          </div>
          <h2>What builders are saying.</h2>
        </div>
        <div className="t-grid reveal" ref={ref}>
          <div className="t-feature">
            <blockquote>
              I used IdeationX to pressure-test STEMQuest before submitting it to Apple's
              Swift Student Challenge — it caught assumptions in my build I'd otherwise
              only have found out about from the judges, after it was too late to fix them.
            </blockquote>
            <div className="t-attr">
              <div className="t-avatar">MM</div>
              <div>
                <div className="t-name">Manas Malla</div>
                <div className="t-role">Swift Student Challenge · builder of STEMQuest</div>
              </div>
            </div>
          </div>
          <div className="t-side">
            <div className="t-card">
              <p>
                "Teams stopped trying to get past us with a good pitch and a broken
                build — IdeationX read the repo before they got to the mic."
              </p>
              <div className="t-attr">
                <div className="t-avatar small">TS</div>
                <div>
                  <div className="t-name small">Organizing Team</div>
                  <div className="t-role">TechSprint by Google Developer Student Clubs</div>
                </div>
              </div>
            </div>
            <div className="t-card">
              <p>
                "The 2 AM mentorship was the real win — teams building for their own
                communities finally had someone to sanity-check ideas when we weren't around."
              </p>
              <div className="t-attr">
                <div className="t-avatar small">CC</div>
                <div>
                  <div className="t-name small">Organizing Team</div>
                  <div className="t-role">Code for Communities Hackathon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
