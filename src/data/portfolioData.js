export const NAV_LINKS = ["Home","About","Skills","Projects","Achievements","Experience","Contact"];

export const ROLES = ["Full Stack Developer","AI Enthusiast","Cloud Learner","Automation Builder"];

export const SKILLS = {
  Frontend: [
    { name: "React", level: 82 },
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "Tailwind CSS", level: 75 },
  ],
  Backend: [
    { name: "Node.js", level: 72 },
    { name: "Python", level: 85 },
    { name: "Java", level: 65 },
    { name: "SQL/MySQL", level: 78 },
  ],
  "AI/ML": [
    { name: "TensorFlow", level: 65 },
    { name: "OpenCV", level: 60 },
    { name: "Voice AI", level: 70 },
    { name: "AI Automation", level: 72 },
  ],
  Cloud: [
    { name: "Firebase", level: 70 },
    { name: "Cloud Arch.", level: 60 },
    { name: "MongoDB", level: 68 },
    { name: "SQLite", level: 72 },
  ],
  Tools: [
    { name: "Git", level: 80 },
    { name: "VS Code", level: 90 },
    { name: "MySQL WB", level: 75 },
    { name: "Android Studio", level: 50 },
  ],
};

export const PROJECTS = [
  {
    title: "MediVault AI",
    desc: "AI-powered healthcare app with biometric authentication (fingerprint & retina) for secure medical record access. Works offline with AI medication reminders and emergency alerts.",
    tech: ["Python", "React Native", "TensorFlow", "MongoDB", "Firebase", "OpenCV"],
    cat: "AI/ML",
    icon: "🏥",
    color: "#6366f1",
  },
  {
    title: "IntelliDesk Assistant",
    desc: "OS-level AI voice assistant that manages applications, files, and system operations via voice commands. Real-time speech processing with intelligent automation workflows.",
    tech: ["Python", "Voice Recognition", "System Automation", "AI"],
    cat: "AI/ML",
    icon: "🤖",
    color: "#8b5cf6",
  },
  {
    title: "Full Stack Web App",
    desc: "A complete full-stack web application built during internship at Thiranex featuring modern UI, RESTful APIs, and database integration.",
    tech: ["React", "Node.js", "MySQL", "HTML/CSS"],
    cat: "Web",
    icon: "🌐",
    color: "#06b6d4",
  },
  {
    title: "AI Chatbot Interface",
    desc: "Conversational AI chatbot with natural language processing capabilities, context awareness, and seamless user experience for automated support.",
    tech: ["Python", "NLP", "React", "Firebase"],
    cat: "AI/ML",
    icon: "💬",
    color: "#10b981",
  },
  {
    title: "Cloud Analytics Dashboard",
    desc: "Real-time analytics dashboard with cloud-backed data streams, interactive visualizations, and customizable reporting for business intelligence.",
    tech: ["React", "Firebase", "Cloud", "SQL"],
    cat: "Cloud",
    icon: "📊",
    color: "#f59e0b",
  },
];

export const ACHIEVEMENTS = [
  {
    id: 1,
    title: "Technical Event Winner",
    institution: "Ramakrishna College",
    description: "Secured top position in a competitive technical event showcasing problem-solving and coding skills.",
    icon: "🏆",
  },
  {
    id: 2,
    title: "Competition Prize Winner",
    institution: "KPR College",
    description: "Awarded prize for outstanding performance in technical competition.",
    icon: "🏅",
  },
];

export const TIMELINE = [
  {
    year: "2024–Present",
    title: "M.Tech in CSE",
    org: "SKCET – Sri Krishna College of Engineering and Technology",
    desc: "CGPA: 7.89 | Pursuing advanced studies in Computer Science with focus on AI/ML and Full Stack Development.",
    icon: "🎓",
    type: "education",
  }
];