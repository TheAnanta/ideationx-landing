import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
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
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const entry = {
      name: data.get("name"),
      email: data.get("email"),
      org: data.get("org"),
      plan: plan || data.get("interest"),
      message: data.get("message"),
      submittedAt: serverTimestamp(),
    };

    setSubmitting(true);
    try {
      await addDoc(collection(db, "contact_submissions"), entry);
      setSent(true);
    } catch {
      setError("Something went wrong sending that — please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <PageShell eyebrow="Get in Touch">
      <div className="form-card">
        {sent ? (
          <div className="success-card">
            <div className="success-icon">✓</div>
            <h1 className="form-title">Message sent</h1>
            <p className="form-sub">
              Thanks for reaching out — someone from the team will follow up by email shortly.
            </p>
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
              <button type="submit" className="btn btn-primary form-submit" disabled={submitting}>
                {submitting ? "Sending…" : "Send message"}
              </button>
              {error && <p className="form-note form-error">{error}</p>}
              <p className="form-note">Your message goes straight to our team — we'll reply by email.</p>
            </form>
          </>
        )}
      </div>
    </PageShell>
  );
}
