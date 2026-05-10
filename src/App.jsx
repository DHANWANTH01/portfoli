import { useState, useEffect, useRef } from "react";
import { NAV_LINKS, ROLES, SKILLS, PROJECTS, ACHIEVEMENTS, TIMELINE } from "./data/portfolioData.js";
import useTyping from "./hooks/useTyping.js";
import useInView from "./hooks/useInView.js";
import ParticlesBg from "./effects/ParticlesBg.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import Timeline from "./components/Timeline.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  const [activeSection, setActiveSection] = useState("Home");
  const [skillTab, setSkillTab] = useState("Frontend");
  const [projectFilter, setProjectFilter] = useState("All");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionRefs = useRef({});
  const typedRole = useTyping(ROLES);

  const scrollTo = (section) => {
    const el = sectionRefs.current[section];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ background: "linear-gradient(135deg,#0f0f23,#1a1a2e,#16213e)", color: "#e2e8f0", fontFamily: "Inter, sans-serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #020409; color: #e2e8f0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: rgba(10,13,20,0.8); }
        ::-webkit-scrollbar-thumb { background: #6366f1; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #818cf8; }
        .glow-btn { position: relative; overflow: hidden; }
        .glow-btn::before { content: ''; position: absolute; inset: -2px; background: linear-gradient(135deg, #818cf8, #6366f1); border-radius: inherit; z-index: -1; opacity: 0; transition: opacity 0.3s; }
        .glow-btn:hover::before { opacity: 0.8; }
        .nav-link { position: relative; }
        .nav-link::after { content: ''; position: absolute; bottom: -6px; left: 0; width: 0; height: 2px; background: #818cf8; transition: width 0.3s; border-radius: 1px; }
        .nav-link.active::after, .nav-link:hover::after { width: 100%; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes pulse-glow { 0%,100%{box-shadow:0 0 20px rgba(129,140,248,0.3)} 50%{box-shadow:0 0 40px rgba(129,140,248,0.6)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.4} }
        .floating { animation: float 4s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .cursor-blink { animation: blink 0.8s step-end infinite; }
        .section-title { font-family: 'Space Grotesk', sans-serif; font-size: clamp(2rem,5vw,3.2rem); font-weight: 700; color: #e2e8f0; }
        .glass { background: rgba(15,20,40,0.6); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(99,102,241,0.12); }
        .tag { display: inline-block; padding: 4px 12px; border-radius: 100px; font-size: 12px; font-weight: 500; background: rgba(99,102,241,0.12); color: #a5b4fc; border: 1px solid rgba(99,102,241,0.2); }
        .timeline-dot { width: 12px; height: 12px; border-radius: 50%; background: #818cf8; box-shadow: 0 0 12px rgba(129,140,248,0.4); flex-shrink: 0; }
        input, textarea { background: rgba(15,20,40,0.7) !important; border: 1px solid rgba(99,102,241,0.15) !important; color: #e2e8f0 !important; border-radius: 8px !important; padding: 11px 14px !important; width: 100%; font-family: inherit; font-size: 14px; outline: none; transition: all 0.2s !important; }
        input:focus, textarea:focus { border-color: rgba(129,140,248,0.4) !important; box-shadow: 0 0 0 2px rgba(129,140,248,0.08) !important; }
        input::placeholder, textarea::placeholder { color: rgba(148,163,184,0.4) !important; }
      `}</style>
      <ParticlesBg />
      <Navbar active={activeSection} scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollTo={scrollTo} />
      <Hero typedRole={typedRole} scrollTo={scrollTo} sectionRefs={sectionRefs} />
      <About sectionRefs={sectionRefs} />
      <Skills skills={SKILLS} skillTab={skillTab} setSkillTab={setSkillTab} sectionRefs={sectionRefs} />
      <Projects projects={PROJECTS} projectFilter={projectFilter} setProjectFilter={setProjectFilter} sectionRefs={sectionRefs} />
      <Achievements achievements={ACHIEVEMENTS} sectionRefs={sectionRefs} />
      <Timeline timeline={TIMELINE} sectionRefs={sectionRefs} />
      <Contact sectionRefs={sectionRefs} scrollTo={scrollTo} />
    </div>
  );
}

export default App;