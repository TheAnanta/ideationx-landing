import avatarVikas from "../assets/avatar-vikas.webp";
import avatarManas from "../assets/avatar-manas.webp";
import avatarKavya from "../assets/avatar-kavya.webp";
import avatarCfc from "../assets/avatar-cfc.webp";
import badgeSih from "../assets/badge-sih.webp";
import badgeSsc from "../assets/badge-ssc.webp";
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
          <h2>What builders and organizers are saying.</h2>
        </div>

        <div className="t-hero reveal" ref={ref}>
          <img className="t-hero-badge" src={badgeSih} alt="" aria-hidden="true" />
          <blockquote>
            We ran our internal Smart India Hackathon round with 250+ teams and nowhere
            near enough mentors to go around. IdeationX ended up being the mentor we
            didn't have — guiding teams through the build, then evaluating all 250+ of
            them with detailed, accurate reports within 48 hours. That speed meant
            students could start on their external-round ideas immediately, and it saved
            us an enormous amount of manpower. It also flagged issues in a few teams a
            human reviewer would likely have missed — that came down to how thoroughly
            the model had been trained on our rubric.
          </blockquote>
          <div className="t-attr">
            <img className="t-avatar" src={avatarVikas} alt="" />
            <div>
              <div className="t-name">Dr. Vikas Srivatsav</div>
              <div className="t-role">Deputy Director, Venture Development Centre</div>
            </div>
          </div>
        </div>

        <div className="t-grid">
          <div className="t-feature">
            <img className="t-feature-badge" src={badgeSsc} alt="" aria-hidden="true" />
            <blockquote>
              I used IdeationX to pressure-test STEMQuest before submitting it to Apple's
              Swift Student Challenge — it caught assumptions in my build I'd otherwise
              only have found out about from the judges, after it was too late to fix them.
            </blockquote>
            <div className="t-attr">
              <img className="t-avatar" src={avatarManas} alt="" />
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
                <img className="t-avatar small" src={avatarKavya} alt="" />
                <div>
                  <div className="t-name small">Ms. Kavya Chandana</div>
                  <div className="t-role">Organizer, TechSprint by Google Developer Student Clubs</div>
                </div>
              </div>
            </div>
            <div className="t-card">
              <p>
                "The 2 AM mentorship was the real win — teams building for their own
                communities finally had someone to sanity-check ideas when we weren't around."
              </p>
              <div className="t-attr">
                <img className="t-avatar small logo" src={avatarCfc} alt="" />
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
