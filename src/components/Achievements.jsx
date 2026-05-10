import Reveal from "./Reveal";

export default function Achievements({ sectionRefs, achievements }) {
  return (
    <section id="Achievements" ref={(el) => (sectionRefs.current["Achievements"] = el)} style={{ padding: "100px 5%", position: "relative", zIndex: 1, scrollMarginTop: 90 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <p style={{ color: "#6366f1", fontWeight: 600, fontSize: 14, textTransform: "uppercase", letterSpacing: 3, marginBottom: 12 }}>Milestones</p>
          <h2 className="section-title" style={{ marginBottom: 50 }}>Recognition & Awards</h2>
        </Reveal>
        <div style={{ position: "relative", paddingLeft: 40 }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: "linear-gradient(180deg, #818cf8 0%, rgba(129,140,248,0.3) 100%)" }} />
          {achievements.map((achievement, i) => (
            <Reveal key={achievement.id} delay={i * 0.1}>
              <div style={{ position: "relative", marginBottom: 32 }}>
                <div style={{ position: "absolute", left: -18, top: 2, width: 14, height: 14, borderRadius: "50%", background: "#818cf8", boxShadow: "0 0 12px rgba(129,140,248,0.4)" }} />
                <div className="glass" style={{ borderRadius: 16, padding: 24, border: "1px solid rgba(99,102,241,0.12)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <span style={{ fontSize: 28 }}>{achievement.icon}</span>
                    <div>
                      <h3 style={{ fontFamily: "Space Grotesk", fontSize: 18, fontWeight: 700, color: "#e2e8f0", marginBottom: 2 }}>{achievement.title}</h3>
                      <p style={{ color: "#818cf8", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>{achievement.institution}</p>
                    </div>
                  </div>
                  <p style={{ color: "#cbd5e1", fontSize: 15, lineHeight: 1.6 }}>{achievement.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}