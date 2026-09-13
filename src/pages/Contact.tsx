import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageShell from "../components/PageShell";
import "../components/Forms.css";

const PLAN_LABELS: Record<string, string> = {
  hackathons: "Community & Hackathons",
  university: "University Pre-Incubation",
};

export default function Contact() {
  const [params] = useSearchParams();
  const plan = params.get("plan") ?? "";
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const entry = {
      name: form.get("name"),
      email: form.get("email"),
      org: form.get("org"),
      plan: plan || form.get("interest"),
      message: form.get("message"),
      submittedAt: new Date().toISOString(),
    };
    const existing = JSON.parse(localStorage.getItem("ideationx_contact_submissions") || "[]");
    existing.push(entry);
    localStorage.setItem("ideationx_contact_submissions", JSON.stringify(existing));
    setSent(true);
  }

  return (
    <PageShell eyebrow="Get in Touch">
      <div className="form-card">
        {sent ? (
          <div className="success-card">
            <div className="success-icon">✓</div>
            <h1 className="form-title">Message saved</h1>
            <p className="form-sub">
              Thanks for reaching out — someone from the team will follow up by email shortly.
            </p>
            <span className="mock-tag">Mock submission · saved locally, not sent anywhere</span>
          </div>
        ) : (
          <>
            <h1 className="form-title">Let's talk</h1>
            <p className="form-sub">
              {plan
                ? `Tell us a bit about your ${PLAN_LABELS[plan] ?? plan} plan.`
                : "Tell us what you're building and we'll get back to you."}
            </p>
            <form onSubmit={handleSubmit}>
              <div className="field-group">
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" required placeholder="Your name" />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required placeholder="you@example.com" />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="org">Organization</label>
                  <input id="org" name="org" type="text" placeholder="University, hackathon, or company" />
                </div>
                {!plan && (
                  <div className="field">
                    <label htmlFor="interest">I'm interested in</label>
                    <select id="interest" name="interest" defaultValue="hackathons">
                      <option value="hackathons">Community & Hackathons</option>
                      <option value="university">University Pre-Incubation</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>
                )}
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="A bit about your cohort, event, or program" />
                </div>
              </div>
              <button type="submit" className="btn btn-primary form-submit">
                Send message
              </button>
              <p className="form-note">This is a demo form — nothing is emailed or shared.</p>
            </form>
          </>
        )}
      </div>
    </PageShell>
  );
}
