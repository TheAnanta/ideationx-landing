import { useState } from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import "../components/Forms.css";

function formatCard(value: string) {
  return value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim();
}

function formatExpiry(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length < 3) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

export default function Payment() {
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
    }, 900);
  }

  return (
    <PageShell eyebrow="Checkout">
      <div className="form-card">
        {done ? (
          <div className="success-card">
            <div className="success-icon">✓</div>
            <h1 className="form-title">You're building with IdeationX</h1>
            <p className="form-sub">
              Your Independent Innovator plan is active. Vidur is ready whenever you are.
            </p>
            <Link to="/" className="btn btn-primary form-submit" style={{ display: "flex" }}>
              Back to site
            </Link>
            <span className="mock-tag">Mock checkout · no card was charged</span>
          </div>
        ) : (
          <>
            <h1 className="form-title">Confirm your plan</h1>
            <div className="plan-summary" style={{ marginTop: 24 }}>
              <div>
                <div className="plan-summary-name">Independent Innovator</div>
                <div className="plan-summary-sub">Billed monthly · cancel anytime</div>
              </div>
              <div className="plan-summary-price">$20/mo</div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="field-group">
                <div className="field">
                  <label htmlFor="cc-name">Name on card</label>
                  <input id="cc-name" name="cc-name" type="text" required placeholder="Your name" />
                </div>
                <div className="field">
                  <label htmlFor="cc-number">Card number</label>
                  <input
                    id="cc-number"
                    name="cc-number"
                    type="text"
                    inputMode="numeric"
                    required
                    placeholder="4242 4242 4242 4242"
                    value={card}
                    onChange={(e) => setCard(formatCard(e.target.value))}
                  />
                </div>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="cc-expiry">Expiry</label>
                    <input
                      id="cc-expiry"
                      name="cc-expiry"
                      type="text"
                      inputMode="numeric"
                      required
                      placeholder="MM/YY"
                      value={expiry}
                      onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="cc-cvc">CVC</label>
                    <input id="cc-cvc" name="cc-cvc" type="text" inputMode="numeric" required placeholder="123" maxLength={4} />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary form-submit" disabled={loading}>
                {loading ? "Processing…" : "Subscribe — $20/mo"}
              </button>
              <p className="form-note">This is a demo checkout — no payment provider is connected.</p>
            </form>
          </>
        )}
      </div>
    </PageShell>
  );
}
