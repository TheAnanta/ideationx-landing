import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageShell from "../components/PageShell";
import "../components/Forms.css";

export default function Login() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signup" | "signin">("signup");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate("/payment");
  }

  return (
    <PageShell eyebrow="Independent Innovator">
      <div className="form-card">
        <h1 className="form-title">{mode === "signup" ? "Create your account" : "Welcome back"}</h1>
        <p className="form-sub">
          {mode === "signup"
            ? "Set up your builder account to start with the copilot."
            : "Sign in to continue to your plan."}
        </p>
        <form onSubmit={handleSubmit}>
          <div className="field-group">
            {mode === "signup" && (
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required placeholder="Your name" />
              </div>
            )}
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required placeholder="you@example.com" />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" required placeholder="••••••••" minLength={6} />
            </div>
          </div>
          <button type="submit" className="btn btn-primary form-submit">
            {mode === "signup" ? "Continue to payment →" : "Sign in"}
          </button>
          <p className="form-note">
            {mode === "signup" ? (
              <>
                Already building with us?{" "}
                <a href="#" onClick={(e) => { e.preventDefault(); setMode("signin"); }}>
                  Sign in
                </a>
              </>
            ) : (
              <>
                New here?{" "}
                <a href="#" onClick={(e) => { e.preventDefault(); setMode("signup"); }}>
                  Create an account
                </a>
              </>
            )}
          </p>
        </form>
      </div>
    </PageShell>
  );
}
