import { useReveal } from "../hooks/useReveal";
import logoGdg from "../assets/logo-gdg.svg";
import logoNidhi from "../assets/logo-nidhi.webp";
import gitamRaw from "../assets/logo-gitam.svg?raw";
import vdcRaw from "../assets/logo-vdc.svg?raw";
import "./Clients.css";

type Cell =
  | { type: "logo-img"; src: string; alt: string }
  | { type: "logo-mark"; markup: string; alt: string }
  | { type: "text"; label: string };

const CELLS: Cell[] = [
  { type: "logo-img", src: logoGdg, alt: "Google Developer Groups" },
  { type: "logo-mark", markup: gitamRaw, alt: "GITAM (Deemed to be University)" },
  { type: "logo-img", src: logoNidhi, alt: "DST NIDHI" },
  { type: "logo-mark", markup: vdcRaw, alt: "Venture Development Centre" },
  { type: "text", label: "State Tech Fests" },
  { type: "text", label: "Corporate Innovation Sprints" },
  { type: "text", label: "Independent Innovators" },
  { type: "text", label: "Student Innovation Councils" },
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
          {CELLS.map((c, i) => (
            <div className="client-cell" key={i}>
              {c.type === "logo-img" && <img className="client-logo" src={c.src} alt={c.alt} />}
              {c.type === "logo-mark" && (
                <span
                  className="client-logo client-logo-mark"
                  role="img"
                  aria-label={c.alt}
                  dangerouslySetInnerHTML={{ __html: c.markup }}
                />
              )}
              {c.type === "text" && c.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
