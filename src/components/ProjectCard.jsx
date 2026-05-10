export default function ProjectCard({ proj }) {
  return (
    <div className="glass gradient-border tilt-card card-hover" style={{ borderRadius: 20, padding: 28, display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
        <div style={{ width: 48, height: 48, borderRadius: 12, background: `${proj.color}20`, border: `1px solid ${proj.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>
          {proj.icon}
        </div>
        <div>
          <h3 style={{ fontFamily: "Space Grotesk", fontSize: 17, fontWeight: 700, color: "#e2e8f0", marginBottom: 2 }}>{proj.title}</h3>
          <span style={{ fontSize: 11, color: proj.color, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>{proj.cat}</span>
        </div>
      </div>
      <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.7, flex: 1, marginBottom: 20 }}>{proj.desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 20 }}>
        {proj.tech.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
      <div style={{ display: "flex", gap: 12 }}>
        <button className="glow-btn" style={{ flex: 1, background: "linear-gradient(135deg,#6366f1,#8b5cf6)", color: "#fff", border: "none", borderRadius: 8, padding: "9px", fontSize: 13, fontWeight: 600, fontFamily: "inherit" }}>
          GitHub ↗
        </button>
        <button style={{ flex: 1, background: "rgba(6,182,212,0.1)", color: "#06b6d4", border: "1px solid rgba(6,182,212,0.25)", borderRadius: 8, padding: "9px", fontSize: 13, fontWeight: 600, fontFamily: "inherit" }}>
          Live Demo ↗
        </button>
      </div>
    </div>
  );
}
