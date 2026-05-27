export interface Profile {
  name: string;
  nameEn: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  github: string;
  portfolioRepo?: string;
  image?: string;
  linkedin?: string;
  blog?: string;
  education: Education[];
  awards: Award[];
  skills: SkillCategory[];
  interests: string[];
}

export interface Education {
  school: string;
  major: string;
  period: string;
  gpa?: string;
  note?: string;
}

export interface Award {
  title: string;
  organization: string;
  date: string;
  description?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  type: string;
  period: string;
  theme: string;
  details: string[];
  problem: string;
  myContribution: string[];
  bottleneck: string;
  solution: string;
  result: string;
  retrospective: string;
  interviewPoints: string[];
  techContext: string;
  shortProblem: string;
  shortAction: string;
  shortResult: string;
  shortQuestion: string;
  privateCode?: boolean;
  githubUrl?: string;
  demoUrl?: string;
  screenshots?: string[];
  featured?: boolean;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  context: string;
  responsibility: string;
  problemEncountered: string;
  actionTaken: string;
  result: string;
  whatILearned: string;
  techStack?: string[];
  featured?: boolean;
}

export interface Course {
  title: string;
  type: string;
  period: string;
  theme: string;
  details: string[];
  category: string;
}

export interface Activity {
  title: string;
  type: string;
  period: string;
  theme: string;
  details: string[];
  evidence?: string;
  category: string;
}

export interface Note {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  content: string;
}

export interface Evidence {
  icon: string;
  label: string;
  value: string;
  description: string;
}
