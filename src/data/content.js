/**
 * Portfolio Data Content
 * ALL text content lives here. Components only render from this file.
 */

export const content = {
  personal: {
    firstName: "Shashwat",
    fullName: "Shashwat",
    title: "Backend Developer",
    locationChip: "Final-year B.Tech · PSIT Kanpur",
    heroOutlineLetters: [3, 4],
    heroPhotoGrayscale: false,
    resumePath: "/resume.pdf",
    profilePhotoPath: "/images/profile.png",
  },

  hero: {
    name: "SHASHWAT",
    letters: ["S", "H", "A", "S", "H", "W", "A", "T"],
    outlineLetters: [3, 4],
    photoGrayscale: false,
    tagline: ["Backend", "Developer"],
    // bio: "I build clean, reliable APIs and data-driven backends with Python, FastAPI and SQL.",
    locationChip: "Final-year B.Tech · PSIT Kanpur",
    statementBand: {
      text: "BUILD. SHIP.",
      accentWord: "SCALE."
    },
    buttons: {
      resume: "Download Resume",
      resumeUrl: "/resume.pdf",
      projects: "View Projects",
      projectsAnchor: "#projects"
    }
  },

  socials: [
    { id: "email",    label: "Email",    value: "shashwats2604@gmail.com",           href: "mailto:shashwats2604@gmail.com",               icon: "Mail" },
    { id: "linkedin", label: "LinkedIn", value: "linkedin.com/in/singhshashwat26",   href: "https://www.linkedin.com/in/singhshashwat26/", icon: "Linkedin" },
    { id: "github",   label: "GitHub",   value: "github.com/shashwat2645",           href: "https://github.com/shashwat2645",              icon: "Github" },
    { id: "x",        label: "X",        value: "x.com/Shashwat0653073",             href: "https://x.com/Shashwat0653073",               icon: "Twitter" }
  ],

  navLinks: [
    { label: "Home",           href: "#home" },
    { label: "About",          href: "#about" },
    { label: "Skills",         href: "#skills" },
    { label: "Projects",       href: "#projects" },
    { label: "Education",      href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Achievements",   href: "#achievements" },
    { label: "Contact",        href: "#contact" }
  ],

  about: {
    eyebrow: "01 / ABOUT",
    heading: { regular: "Engineering reliable", gradient: "systems." },
    paragraphs: [
      "I'm Shashwat, a final-year B.Tech Computer Science (AI & ML) student at PSIT Kanpur, focused on backend engineering. I enjoy the part of software users never see but always depend on: clean APIs, well-designed schemas, and systems that stay reliable as they grow.",
      "My daily toolkit is Python, FastAPI and SQLAlchemy, backed by PostgreSQL and MySQL. I'm actively deepening my Java skills — currently building a Banking Transaction System with Spring Boot and Maven — while strengthening core CS fundamentals (OOPs, DBMS). I also have a working foundation in NumPy, Pandas, Matplotlib and Seaborn, and certifications in AI foundations, which helps me build backends for AI-driven products.",
      "My major project is a Decentralized AI Marketplace for Federated Learning using Blockchain. I'm placed at Newgen and LTM, and I keep learning, building and writing better code every day."
    ],
    factCards: [
      { id: "focus",     label: "Focus",      value: "Backend engineering" },
      { id: "education", label: "Education",  value: "B.Tech CSE (AI & ML) 2027" },
      { id: "placement", label: "Placed at",  value: "Newgen & LTM" }
    ]
  },

  skills: {
    eyebrow: "02 / SKILLS",
    heading: { regular: "Technical", gradient: "Proficiencies" },
    groups: [
      { id: "01", category: "Languages",               skills: ["Java", "Python", "SQL"],                                    coreFocus: false },
      { id: "02", category: "Databases",               skills: ["MySQL", "PostgreSQL"],                                      coreFocus: false },
      { id: "03", category: "Core Concepts",           skills: ["OOPs", "DBMS"],                                             coreFocus: false },
      { id: "04", category: "Backend",                 skills: ["FastAPI", "SQLAlchemy", "REST APIs"],                       coreFocus: true, badge: "CORE FOCUS" },
      { id: "05", category: "Developer Tools",         skills: ["Postman", "Git", "GitHub"],                                 coreFocus: false },
      { id: "06", category: "Basic ML Concepts & Tools", skills: ["NumPy", "Matplotlib", "Seaborn", "Pandas", "Data Curation"], coreFocus: false }
    ]
  },

  projects: {
    eyebrow: "03 / PROJECTS",
    heading: { regular: "Things I've", gradient: "built." },
    items: [
      {
        id: "decentralized-ai",
        title: "Decentralized AI Marketplace for Federated Learning using Blockchain",
        isMajor: true,
        status: "Completed",
        badge: "MAJOR PROJECT",
        description: "Marketplace for federated learning where participants collaborate on models without sharing raw data, with blockchain providing trust and coordination.",
        meta: [
          { label: "Type",        value: "Major project" },
          { label: "Domain",      value: "Federated learning" },
          { label: "Trust layer", value: "Blockchain" }
        ],
        tags: ["Blockchain", "Federated Learning", "AI", "Python"],
        githubUrl: "https://github.com/VisheshDubey26/Decentralized-AI-Marketplace-for-Federated-Learning-using-Blockchain",
        demoUrl: "",
        cardStyle: "featured"
      },
      {
        id: "banking-txn",
        title: "Banking Transaction System",
        isMajor: false,
        status: "In Progress",
        badge: "IN PROGRESS",
        description: "A backend system for banking operations — account management, transaction history, and balance tracking built with Java, Spring Boot, Maven, and PostgreSQL.",
        meta: [],
        tags: ["Java", "Spring Boot", "Maven", "PostgreSQL", "REST APIs"],
        githubUrl: "https://github.com/shashwat2645/Banking-Transaction-System",
        demoUrl: "",
        cardStyle: "standard"
      },
      {
        id: "lexfile",
        title: "LexFile",
        isMajor: false,
        status: "Planned",
        badge: "PLANNED",
        description: "Web platform that helps people understand and access legal information for Indian law.",
        comingSoon: true,
        meta: [],
        tags: ["FastAPI", "PostgreSQL", "Python"],
        githubUrl: "",
        demoUrl: "",
        cardStyle: "dashed"
      }
    ]
  },

  education: {
    eyebrow: "04 / EDUCATION",
    heading: { regular: "Academic", gradient: "Foundation" },
    items: [
      { id: "btech",     degree: "B.Tech, Computer Science (AI & ML)", institution: "PSIT Kanpur",   period: "2023 – 2027", score: "8.03 CGPA", level: "UNDERGRADUATE",    current: true  },
      { id: "class-xii", degree: "Class XII",                          institution: "Lucknow Public School, Madhoganj", period: "2023", score: "92.4%", level: "SENIOR SECONDARY", current: false },
      { id: "class-x",   degree: "Class X",                            institution: "Lucknow Public School, Madhoganj", period: "2021", score: "95%",   level: "SECONDARY",        current: false }
    ]
  },

  certifications: {
    eyebrow: "05 / CERTIFICATIONS",
    heading: { regular: "Verified", gradient: "Credentials" },
    items: [
      {
        id: "oracle-agentic-ai",
        title: "Oracle Agentic AI Foundations Associate",
        issuer: "Oracle",
        year: "2026",
        verifyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=A9613E7B9641E8065658BAC404295DC69520C9888C0C05872E50DE2DB393F4CE"
      },
      {
        id: "wipro-talentnext",
        title: "Data Science with Python",
        issuer: "Wipro TalentNext",
        year: "2026",
        verifyUrl: "",
        certId: "TNext-SE-2026-DS_261910004"
      },
      {
        id: "aws-genai",
        title: "Generative AI Foundations",
        issuer: "AWS Academy Graduate",
        year: "2026",
        verifyUrl: "https://www.credly.com/badges/51300c6d-20de-4e6e-afec-f5a82f501944"
      },
      {
        id: "oracle-ai-foundations",
        title: "Oracle AI Foundations Associate",
        issuer: "Oracle",
        year: "2025",
        verifyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=6A3944E26B64A076905490DF13F3FF53CDF7E1BAA21A3EC1540F2F9414694C8D"
      }
    ]
  },

  achievements: {
    eyebrow: "06 / ACHIEVEMENTS",
    heading: { regular: "Milestones &", gradient: "Placements" },
    placementsGroup: {
      label: "Placements",
      items: [
        { id: "newgen", company: "Newgen", badge: "PLACED", role: "Software Engineer" },
        { id: "ltm",    company: "LTM",    badge: "PLACED", role: "Graduate Engineer Trainee" }
      ]
    },
    hackathonsGroup: {
      label: "Hackathons",
      items: [
        { id: "isro-hackathon",          name: "ISRO Bhartiya Antariksh Hackathon 2026", badge: "PARTICIPANT", sponsor: "ISRO" },
        { id: "coding-ninjas-vibe2ship", name: "Coding Ninjas Vibe2Ship",                badge: "PARTICIPANT", sponsor: "Google for Developers" }
      ]
    }
  },

  contact: {
    eyebrow: "07 / CONTACT",
    heading: { regular: "Got something to build?", gradient: "Let's talk." },
    description: "Whether you have a backend engineering role, a collaborative project, or want to discuss systems architecture, I'd love to connect.",
    helperText: "Delivered straight to my inbox.",
    formAction: "/",
    fields: { name: "Name", email: "Email", subject: "Subject", message: "Message", submit: "Send message" }
  },

  closingCard: {
    heading: { regular: "Let's build something", gradient: "meaningful." },
    shortLine: "Focused on clean APIs, resilient databases, and architectures that scale.",
    button: { label: "Say hello", href: "mailto:shashwats2604@gmail.com" }
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Shashwat. All rights reserved.`,
    reasonToTalk: "Got a reason to talk?"
  }
};
