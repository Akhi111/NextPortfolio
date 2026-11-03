import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend & 3D Graphics",
    skills: [
      { name: "Next.js (App Router)", level: 96, popular: true },
      { name: "TypeScript", level: 95, popular: true },
      { name: "Three.js / React Three Fiber", level: 92, popular: true },
      { name: "React 18 / 19", level: 96, popular: true },
      { name: "Tailwind CSS", level: 98, popular: true },
      { name: "Framer Motion", level: 94, popular: true },
      { name: "HTML5 / Canvas / SVG", level: 95 },
    ],
  },
  {
    category: "Backend & Systems",
    skills: [
      { name: "Node.js", level: 92, popular: true },
      { name: "Next.js API Routes", level: 94, popular: true },
      { name: "REST & GraphQL APIs", level: 93 },
      { name: "Nodemailer / SMTP", level: 90 },
    ],
  },
  {
    category: "Database & Storage",
    skills: [
      { name: "PostgreSQL", level: 91, popular: true },
      { name: "Prisma ORM / Drizzle", level: 90, popular: true },
      { name: "Redis / Upstash", level: 88, popular: true },
      { name: "MongoDB", level: 85 },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub CI/CD", level: 94, popular: true },
      { name: "Vercel Deployment", level: 96, popular: true },
      { name: "Docker", level: 87, popular: true },
      { name: "Figma (UI/UX Systems)", level: 92 },
    ],
  },
];
