import useInView from "../hooks/useInView";

export default function SkillCard({ skill }) {
  const [ref, visible] = useInView(0.1);

  return (
    <div ref={ref} className="glass gradient-border card-hover tilt-card" style={{ borderRadius: 16, padding: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <span style={{ color: "#e2e8f0", fontWeight: 600, fontSize: 15 }}>{skill.name}</span>
        <span style={{ color: "#818cf8", fontWeight: 700, fontSize: 15 }}>{skill.level}%</span>
      </div>
      <div style={{ height: 6, background: "rgba(99,102,241,0.1)", borderRadius: 100, overflow: "hidden" }}>
        <div className="skill-bar" style={{ height: "100%", width: visible ? `${skill.level}%` : "0%", background: "linear-gradient(90deg,#6366f1,#8b5cf6,#06b6d4)", borderRadius: 100 }} />
      </div>
    </div>
  );
}
