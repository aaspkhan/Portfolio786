export interface Project {
  id: string;
  name: string;
  status?: string;
  description: string;
  technologies: string[];
  badges?: string[];
  buttonText: string;
  link?: string; // Google Play placeholder or actual link variable
  interactiveDashboardType?: "restaurant" | "safe-serving" | "placeholder";
}

export interface SkillGroup {
  category: string;
  skills: { name: string; iconName?: string }[];
}

export interface TimelineStep {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
}
