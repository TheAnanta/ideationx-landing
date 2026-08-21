import { useState } from "react";
import jahnavi from "../assets/jahnavi.webp";
import vidur from "../assets/vidur.webp";
import { useReveal } from "../hooks/useReveal";
import "./Signal.css";

type TabKey = "chat" | "code" | "score";

const TABS: { key: TabKey; label: string }[] = [
  { key: "chat", label: "While they work" },
  { key: "code", label: "What they built" },
  { key: "score", label: "The scorecard" },
];

const SCORES = [
  { label: "How real is the problem", value: 88 },
  { label: "How well it's built", value: 74 },
  { label: "Is it actually working", value: 78 },
  { label: "Impact if it succeeds", value: 91 },
  { label: "How fast the team moved", value: 82 },
];

export default function Signal() {
  const [tab, setTab] = useState<TabKey>("chat");
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="signal" id="signal">
      <div className="wrap">
        <div className="section-head center reveal in">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            How It Works
          </div>
          <h2>What they say. How they work. What they build.</h2>
        </div>

        <div className="panel reveal" ref={ref}>
          <div className="panel-tabs">
            {TABS.map((t) => (
              <button
                key={t.key}
                className={tab === t.key ? "ptab active" : "ptab"}
                onClick={() => setTab(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="panel-body">
            {tab === "chat" && (
              <div className="chat-pane">
                <div className="chat-note">Vidur is following Team Ganotri's build channel</div>
                <Msg avatar={jahnavi} name="@jahnavi" side="left">
                  thinking we charge per seat for the college version — keeps it simple to build
                </Msg>
                <Msg avatar={vidur} name="@vidur" side="right">
                  heads up — this shape has sunk a few campus tools before. try a flat fee instead
                </Msg>
                <Msg avatar={jahnavi} name="@jahnavi" side="left">
                  oh — switching to that now, thanks
                </Msg>
                <div className="chat-note ok">✓ Team Ganotri updated their approach · still on pace</div>
              </div>
            )}

            {tab === "code" && (
              <div className="code-pane">
                <div className="code-stat-row">
                  <div className="code-stat"><strong>42</strong><span>updates</span></div>
                  <div className="code-stat"><strong>6</strong><span>people</span></div>
                  <div className="code-stat"><strong>18h</strong><span>in</span></div>
                </div>
                <ul className="check-list">
                  <li className="ok">Login &amp; sign-up really work — no shortcuts found</li>
                  <li className="warn">2 screens are showing fake, placeholder data</li>
                  <li className="warn">The "loading" screen is just a timer, not a real process</li>
                  <li className="ok">The rest of the app is genuinely built, not copy-pasted</li>
                </ul>
                <div className="authenticity">
                  <span>How much of this is real</span>
                  <strong>78<small>/100</small></strong>
                </div>
              </div>
            )}

            {tab === "score" && (
              <div className="score-pane">
                {SCORES.map((s) => (
                  <div className="score-row" key={s.label}>
                    <div className="score-label">{s.label}</div>
                    <div className="score-track">
                      <div className="score-fill" style={{ width: `${s.value}%` }} />
                    </div>
                    <div className="score-val">{(s.value / 10).toFixed(1)}</div>
                  </div>
                ))}
                <div className="score-foot">Ready to export for judges — no manual scoring needed</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Msg({
  avatar,
  name,
  side,
  children,
}: {
  avatar: string;
  name: string;
  side: "left" | "right";
  children: React.ReactNode;
}) {
  return (
    <div className={`msg msg-${side}`}>
      <div className="msg-avatar" style={{ backgroundImage: `url(${avatar})` }} />
      <div className="msg-body">
        <div className="msg-name">{name}</div>
        <div className="msg-text">{children}</div>
      </div>
    </div>
  );
}
