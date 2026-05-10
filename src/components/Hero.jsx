export default function Hero({ typedRole, scrollTo, sectionRefs }) {
  return (
    <section
      id="Home"
      ref={(el) => (sectionRefs.current["Home"] = el)}
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "120px 5% 60px", position: "relative", zIndex: 1, scrollMarginTop: 90, background: "linear-gradient(180deg, rgba(15,23,42,0.9) 0%, rgba(10,10,20,0.95) 100%)" }}
    >
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 35% 25%, rgba(99,102,241,0.08) 0%, transparent 25%), radial-gradient(circle at 80% 40%, rgba(59,130,246,0.06) 0%, transparent 20%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 900, width: "100%", position: "relative", zIndex: 2 }}>
        <div style={{ display: "inline-block", background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.25)", borderRadius: 100, padding: "8px 20px", fontSize: 12, color: "#a5b4fc", marginBottom: 32, fontWeight: 500 }}>
          ✨ Open to opportunities
        </div>

        <h1 style={{ fontFamily: "Space Grotesk", fontSize: "clamp(3rem,8vw,5.5rem)", fontWeight: 700, lineHeight: 1.05, marginBottom: 24, letterSpacing: "-0.01em" }}>
          <span style={{ color: "#e2e8f0" }}>Hi, I'm </span>
          <span style={{ background: "linear-gradient(135deg,#818cf8,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Dhanwanth</span>
        </h1>

        <div style={{ fontSize: "clamp(1.25rem,3vw,1.8rem)", color: "#94a3b8", marginBottom: 40, height: 56, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
          <span style={{ color: "#818cf8", fontWeight: 600 }}>{typedRole}</span>
          <span className="cursor-blink" style={{ color: "#818cf8", fontSize: "1.2em", fontWeight: 300 }}>_</span>
        </div>

        <p style={{ color: "#cbd5e1", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.8, maxWidth: 700, margin: "0 auto 48px", fontWeight: 400 }}>
          Building intelligent solutions with AI, full-stack development, and cloud architecture. Passionate about creating meaningful tech that solves real problems.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 60 }}>
          <button onClick={() => scrollTo("Projects")} className="glow-btn" style={{ background: "linear-gradient(135deg,#818cf8,#6366f1)", color: "#fff", border: "none", borderRadius: 8, padding: "12px 32px", fontSize: 15, fontWeight: 600, fontFamily: "inherit", cursor: "pointer" }}>
            View My Work
          </button>
          <button onClick={() => scrollTo("Contact")} style={{ background: "transparent", color: "#818cf8", border: "1.5px solid rgba(129,140,248,0.4)", borderRadius: 8, padding: "12px 32px", fontSize: 15, fontWeight: 600, fontFamily: "inherit", cursor: "pointer", transition: "all 0.3s" }}>
            Contact Me
          </button>
        </div>

        <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", fontSize: 13, color: "#64748b", fontWeight: 500 }}>
          <span>⚛️ React</span>
          <span>🐍 Python</span>
          <span>☁️ Cloud</span>
          <span>🤖 AI/ML</span>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", zIndex: 2 }}>
        <div style={{ color: "#475569", fontSize: 24, animation: "float 2.5s ease-in-out infinite", textAlign: "center" }}>↓</div>
      </div>
    </section>
  );
}