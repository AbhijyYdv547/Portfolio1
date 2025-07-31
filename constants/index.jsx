import {
  Code2,
  Lightbulb,
  Users,
  LayoutDashboard,
  Rocket,
  Brain,
  ServerCog,
  Globe,
  BookText,
  BriefcaseBusiness,
  GitBranch,
  MessageCircleDashed,
} from "lucide-react";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "NeuroNote - Real-time Collaborative App",
    des: "A full-stack collaboration platform with real-time text editing, chat, and planned video calling. Built with Tiptap, Hocuspocus, and a fully Dockerized setup.",
    img: "/neuronote.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/postgres.svg",
      "/docker.svg",
    ],
    link: "https://github.com/AbhijyYdv547/NeuroNote",
  },
  {
    id: 2,
    title: "CollabCanvas - Real-time Drawing App",
    des: "A WebSocket-powered collaborative canvas app with live drawing, room-based sessions, zooming, and multiple drawing tools.",
    img: "/collabcanvas.jpg",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/socket.svg",
      "/postgres.svg",
    ],
    link: "https://github.com/AbhijyYdv547/Canvas-app",
  },
  {
    id: 3,
    title: "Resume Builder",
    des: "A modern web app where users can generate AI-powered resumes using Gemini API. Includes auth, PDF download, and form-based UI.",
    img: "/resume.png",
    iconLists: [
      "/react.svg",
      "/tail.svg",
      "/ts.svg",
      "/mongo.svg",
      "gemini.svg",
    ],
    link: "https://github.com/AbhijyYdv547/ResumeBuilder",
  },
  {
    id: 4,
    title: "Typora - Tally Alternative",
    des: "A lightweight, open-source alternative to Tally for building embeddable, customizable forms — focused on performance and simplicity.",
    img: "/code.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/prisma.svg"],
    link: "https://github.com/AbhijyYdv547/Typora",
  },
];

export const features = [
  {
    icon: <Code2 />,
    title: "Clean & Efficient Code",
    description:
      "I write scalable, maintainable code with a strong focus on performance, readability, and best practices.",
  },
  {
    icon: <Lightbulb />,
    title: "Creative Problem Solver",
    description:
      "I love breaking down complex problems and crafting simple, elegant solutions — especially in real-time systems.",
  },
  {
    icon: <Users />,
    title: "Collaboration-Driven",
    description:
      "From team projects to open source contributions, I thrive in collaborative environments and value clear communication.",
  },
  {
    icon: <LayoutDashboard />,
    title: "Full-Stack Builder",
    description:
      "From UI to APIs, I design and build complete web apps using modern stacks like Next.js, Prisma, and PostgreSQL.",
  },
  {
    icon: <Rocket />,
    title: "Rapid Learner",
    description:
      "I dive deep into new technologies quickly — whether it’s setting up CI/CD pipelines or exploring new frameworks.",
  },
  {
    icon: <ServerCog />,
    title: "DevOps Enthusiast",
    description:
      "I care about scalable infrastructure, Dockerization, CI/CD, and efficient developer workflows.",
  },
  {
    icon: <Brain />,
    title: "Always Growing",
    description:
      "I actively seek feedback, refine my skills, and push myself to become a better engineer every day.",
  },
  {
    icon: <Globe />,
    title: "Open Source Explorer",
    description:
      "I'm passionate about contributing to open source and building in public — with a goal of joining programs like GSoC and LFX.",
  },
];

export const socialMedia = [
  {
    id: 1,
    link: "https://github.com/AbhijyYdv547",
    title: "Github",
    icon: <GitBranch />,
  },
  {
    id: 2,
    link: "https://x.com/YadavAbhij50732",
    title: "Twitter",
    icon: <MessageCircleDashed />,
  },
  {
    id: 3,
    link: "https://www.linkedin.com/in/abj-ydv",
    title: "Linkedin",
    icon: <BriefcaseBusiness />,
  },
  {
    id: 4,
    link: "https://dev.to/abhijay_yadav_712e10ab036",
    title: "Dev.to",
    icon: <BookText />,
  },
];

export const skillList = [
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Redux / Zustand",
      "Vite",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Next.js API Routes",
      "MongoDB",
      "PostgreSQL",
      "Prisma ORM",
      "REST APIs",
      "JWT / OAuth",
      "Zod",
    ],
  },
  {
    title: "DevOps",
    skills: [
      "Git & GitHub",
      "Docker",
      "GitHub Actions",
      "Vercel",
      "Netlify",
      "AWS (EC2 / S3)",
      "CI/CD Pipelines",
      "Nginx (basic setup)",
      "Monitoring",
    ],
  },
];
