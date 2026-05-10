import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";

export default function Projects({ sectionRefs, projectFilter, setProjectFilter, projects }) {
  const filteredProjects = projectFilter === "All" ? projects : projects.filter((p) => p.cat === projectFilter);

  return (
    <section id="Projects" ref={(el) => (sectionRefs.current["Projects"] = el)} style={{ padding: "100px 5%", position: "relative", zIndex: 1, scrollMarginTop: 90 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <p style={{ color: "#6366f1", fontWeight: 600, fontSize: 14, textTransform: "uppercase", letterSpacing: 3, marginBottom: 12 }}>Portfolio</p>
          <h2 className="section-title" style={{ marginBottom: 12 }}>Featured Projects</h2>
          <p style={{ color: "#64748b", fontSize: 16, marginBottom: 40 }}>Things I've built that I'm proud of</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }}>
            {["All", "AI/ML", "Web", "Cloud"].map((filter) => (
              <button
                key={filter}
                onClick={() => setProjectFilter(filter)}
                style={{
                  background: projectFilter === filter ? "linear-gradient(135deg,#6366f1,#8b5cf6)" : "rgba(15,20,40,0.7)",
                  color: projectFilter === filter ? "#fff" : "#64748b",
                  border: projectFilter === filter ? "none" : "1px solid rgba(99,102,241,0.2)",
                  borderRadius: 8,
                  padding: "8px 18px",
                  fontSize: 13,
                  fontWeight: 600,
                  fontFamily: "inherit",
                  transition: "all 0.3s",
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
          {filteredProjects.map((proj, i) => (
            <Reveal key={proj.title} delay={i * 0.1}>
              <ProjectCard proj={proj} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
