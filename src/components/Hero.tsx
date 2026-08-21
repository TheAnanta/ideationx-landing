import jahnavi from "../assets/jahnavi.webp";
import vidur from "../assets/vidur.webp";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-inner">
        <div className="eyebrow">Built for builders, judged fairly</div>
        <h1>
          Great ideas deserve
          <br />
          an honest second opinion.
        </h1>
        <p className="hero-sub">
          IdeationX pairs every hackathon team, indie founder, and campus venture with an
          AI mentor who's seen how ideas like theirs turn out — and the tools to prove
          their work is real.
        </p>
        <div className="hero-cta">
          <a href="#pricing" className="btn btn-primary">
            Request a Demo →
          </a>
          <a href="#signal" className="btn btn-ghost">
            See it in Action
          </a>
        </div>
      </div>

      <div className="hero-stage">
        <div className="stage-glow" aria-hidden="true" />
        <div className="stage-figures">
          <div className="figure figure-jahnavi">
            <img src={jahnavi} alt="Jahnavi, a founder building with IdeationX" />
            <div className="chip chip-jahnavi">
              <span className="chip-label">@jahnavi</span>
              <span className="chip-sub">Team Ganotri</span>
            </div>
          </div>
          <div className="speech-link" aria-hidden="true">
            <svg viewBox="0 0 120 40" fill="none">
              <path d="M4 20c20-14 40-14 60 0s40 14 52 0" stroke="var(--line-strong)" strokeWidth="2" strokeDasharray="2 8" strokeLinecap="round" />
            </svg>
          </div>
          <div className="figure figure-vidur">
            <img src={vidur} alt="Vidur, the IdeationX AI mentor" />
            <div className="chip chip-vidur">
              <span className="chip-label">@vidur</span>
              <span className="chip-sub">AI Mentor</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
