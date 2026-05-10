import Reveal from "./Reveal";

export default function Timeline({ sectionRefs, timeline }) {
  return (
    <section id="Experience" ref={(el) => (sectionRefs.current["Experience"] = el)} style={{ padding: "100px 5%", position: "relative", zIndex: 1, scrollMarginTop: 90 }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <Reveal>
          <p style={{ color: "#6366f1", fontWeight: 600, fontSize: 14, textTransform: "uppercase", letterSpacing: 3, marginBottom: 12 }}>Journey</p>
          <h2 className="section-title" style={{ marginBottom: 60 }}>Experience & Education</h2>
        </Reveal>
        <div style={{ position: "relative", paddingLeft: 32 }}>
          <div style={{ position: "absolute", left: 6, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom,#6366f1,rgba(99,102,241,0))" }} />
          {timeline.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.12}>
              <div style={{ display: "flex", gap: 20, marginBottom: 36, position: "relative" }}>
                <div className="timeline-dot" style={{ position: "absolute", left: -32 }} />
                <div className="glass gradient-border card-hover" style={{ borderRadius: 16, padding: 24, flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                        <span style={{ fontSize: 20 }}>{item.icon}</span>
                        <h3 style={{ fontFamily: "Space Grotesk", fontSize: 17, fontWeight: 700, color: "#e2e8f0" }}>{item.title}</h3>
                      </div>
                      <p style={{ color: "#818cf8", fontSize: 13, fontWeight: 600 }}>{item.org}</p>
                    </div>
                    <span style={{ background: "rgba(99,102,241,0.15)", color: "#a5b4fc", borderRadius: 100, padding: "4px 12px", fontSize: 12, fontWeight: 600, whiteSpace: "nowrap" }}>{item.year}</span>
                  </div>
                  <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
