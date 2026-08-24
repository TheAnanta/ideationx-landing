import heroDuo from "../assets/hero-duo.webp";
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
        <div className="stage-duo">
          <img src={heroDuo} alt="Jahnavi showing her work to Vidur, the IdeationX AI mentor" />
          <div className="chip chip-jahnavi">
            <span className="chip-label">@jahnavi</span>
            <span className="chip-sub">Team Ganotri</span>
          </div>
          <div className="chip chip-vidur">
            <span className="chip-label">@vidur</span>
            <span className="chip-sub">AI Mentor</span>
          </div>
        </div>
      </div>
    </section>
  );
}
