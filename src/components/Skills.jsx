import Reveal from "./Reveal";
import SkillCard from "./SkillCard";

export default function Skills({ sectionRefs, skillTab, setSkillTab, skills }) {
  return (
    <section id="Skills" ref={(el) => (sectionRefs.current["Skills"] = el)} style={{ padding: "100px 5%", position: "relative", zIndex: 1, scrollMarginTop: 90 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <p style={{ color: "#6366f1", fontWeight: 600, fontSize: 14, textTransform: "uppercase", letterSpacing: 3, marginBottom: 12 }}>Expertise</p>
          <h2 className="section-title" style={{ marginBottom: 48 }}>Skills & Technologies</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }}>
            {Object.keys(skills).map((cat) => (
              <button
                key={cat}
                onClick={() => setSkillTab(cat)}
                style={{
                  background: skillTab === cat ? "linear-gradient(135deg,#6366f1,#8b5cf6)" : "rgba(15,20,40,0.7)",
                  color: skillTab === cat ? "#fff" : "#64748b",
                  border: skillTab === cat ? "none" : "1px solid rgba(99,102,241,0.2)",
                  borderRadius: 8,
                  padding: "8px 18px",
                  fontSize: 13,
                  fontWeight: 600,
                  fontFamily: "inherit",
                  transition: "all 0.3s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
          {skills[skillTab].map((skill, i) => (
            <Reveal key={skill.name} delay={i * 0.1}>
              <SkillCard skill={skill} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
