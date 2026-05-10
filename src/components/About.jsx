import Reveal from "./Reveal";

export default function About({ sectionRefs }) {
  return (
    <section
      id="About"
      ref={(el) => (sectionRefs.current["About"] = el)}
      style={{ padding: "120px 5% 80px", position: "relative", zIndex: 1, scrollMarginTop: 90 }}
    >
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "radial-gradient(circle at 15% 20%, rgba(99,102,241,0.08) 0%, transparent 22%), radial-gradient(circle at 85% 15%, rgba(59,130,246,0.06) 0%, transparent 18%)" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <Reveal>
          <p style={{ color: "#6366f1", fontWeight: 600, fontSize: 14, textTransform: "uppercase", letterSpacing: 3, marginBottom: 12 }}>→ About</p>
          <h2 className="section-title" style={{ marginBottom: 50 }}>Who I Am</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div
            className="glass"
            style={{
              borderRadius: 24,
              padding: 42,
              border: "1px solid rgba(99,102,241,0.16)",
              boxShadow: "0 30px 90px rgba(0,0,0,0.25)",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 34, alignItems: "start" }}>
              <div>
                <h3 style={{ fontFamily: "Space Grotesk", fontSize: 28, fontWeight: 700, color: "#e2e8f0", marginBottom: 24 }}>Dhanwanth Bala S</h3>
                <p style={{ color: "#cbd5e1", lineHeight: 1.8, marginBottom: 18, fontSize: 16 }}>
                  M.Tech Computer Science student with passion for building intelligent, impactful software. Experienced in AI-powered healthcare systems and voice-driven automation.
                </p>
                <p style={{ color: "#94a3b8", lineHeight: 1.75, fontSize: 15 }}>
                  Learning by building real products. Currently sharpening full-stack and cloud architecture skills across AI, full-stack, and cloud-focused projects.
                </p>
              </div>
              <div style={{ display: "grid", gap: 18 }}>
                <div style={{ padding: 20, borderRadius: 18, background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.12)" }}>
                  <p style={{ color: "#94a3b8", fontSize: 12, textTransform: "uppercase", fontWeight: 700, letterSpacing: 1.5, marginBottom: 8 }}>Location</p>
                  <p style={{ color: "#e2e8f0", fontSize: 15, fontWeight: 600 }}>Coimbatore, India</p>
                </div>
                <div style={{ padding: 20, borderRadius: 18, background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.12)" }}>
                  <p style={{ color: "#94a3b8", fontSize: 12, textTransform: "uppercase", fontWeight: 700, letterSpacing: 1.5, marginBottom: 8 }}>Specialization</p>
                  <p style={{ color: "#e2e8f0", fontSize: 15, fontWeight: 600 }}>AI/ML, Full-Stack, Cloud</p>
                </div>
                <div style={{ padding: 20, borderRadius: 18, background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.12)" }}>
                  <p style={{ color: "#94a3b8", fontSize: 12, textTransform: "uppercase", fontWeight: 700, letterSpacing: 1.5, marginBottom: 8 }}>Contact</p>
                  <a href="mailto:dhanwanthb@gmail.com" style={{ color: "#818cf8", fontSize: 15, fontWeight: 600, textDecoration: "none" }}>dhanwanthb@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
