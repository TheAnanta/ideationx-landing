import footerDuo from "../assets/footer-duo.webp";
import { useReveal } from "../hooks/useReveal";
import "./Closer.css";

export default function Closer() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="closer">
      <div className="wrap closer-inner reveal" ref={ref}>
        <div className="closer-text">
          <h2>Ready to build something worth defending?</h2>
          <p>Bring your idea. Vidur will tell you where it breaks — before anyone else does.</p>
          <a href="#pricing" className="btn btn-primary">
            Request a Demo →
          </a>
        </div>
        <img src={footerDuo} alt="Jahnavi and Vidur celebrating" className="closer-img" />
      </div>
    </section>
  );
}
