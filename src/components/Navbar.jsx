import { NAV_LINKS } from "../data/portfolioData";

export default function Navbar({ active, scrolled, menuOpen, setMenuOpen, scrollTo }) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(2,4,9,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(99,102,241,0.1)" : "none",
        transition: "all 0.4s ease",
        padding: "0 5%",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        <div style={{ fontFamily: "Space Grotesk", fontWeight: 700, fontSize: 22, background: "linear-gradient(135deg,#818cf8,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          DB<span style={{ color: "#6366f1" }}>.</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`nav-link${active === link ? " active" : ""}`}
              style={{
                background: "none",
                border: "none",
                color: active === link ? "#818cf8" : "#94a3b8",
                fontSize: 14,
                fontWeight: 500,
                fontFamily: "inherit",
                padding: "4px 0",
                cursor: "none",
                transition: "color 0.3s",
              }}
            >
              {link}
            </button>
          ))}
          <a
            href="/resume.pdf"
            download="Dhanwanth_Bala_Resume.pdf"
            className="glow-btn"
            style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)", color: "#fff", border: "none", borderRadius: 8, padding: "8px 18px", fontSize: 13, fontWeight: 600, fontFamily: "inherit", textDecoration: "none", display: "inline-block" }}
          >
            Resume ↓
          </a>
        </div>

        <button onClick={() => setMenuOpen((m) => !m)} style={{ display: "none", background: "none", border: "none", color: "#94a3b8", fontSize: 24, cursor: "pointer" }} className="hamburger">
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="glass" style={{ position: "absolute", top: 68, left: 0, right: 0, padding: "16px 5%", display: "flex", flexDirection: "column", gap: 8 }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                background: "none",
                border: "none",
                color: active === link ? "#818cf8" : "#94a3b8",
                fontSize: 15,
                fontWeight: 500,
                fontFamily: "inherit",
                padding: "10px 0",
                textAlign: "left",
                cursor: "none",
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
