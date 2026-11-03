export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  category: "Full Stack" | "AI & ML" | "Web3" | "Frontend & 3D";
  technologies: string[];
  thumbnail: string;
  featured: boolean;
  githubUrl: string;
  liveUrl: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  title: string;
  period: string;
  location: string;
  type: "Full-time" | "Contract" | "Lead";
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number; // 1-100
    icon?: string;
    popular?: boolean;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
  error?: string;
}

export interface NavItem {
  name: string;
  href: string;
  icon?: string;
}

