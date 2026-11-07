import type React from "react";

type TLanguage = "en" | "id";

type TExperience = {
  id: string;
  start?: string;
  end?: string;
  title: string;
  company: string;
  jobs: string[];
};

type TProject = {
  id: string;
  imgUrl?: string;
  link?: string;
  featured?: boolean;
  title: string;
  description: string;
  skills?: string[];
};

type TLink = {
  href: string;
  icon: React.ElementType;
};

type TTeknologi = {
  programingLanguage: string[];
  framework: string[];
  database: string[];
  devOps: string[];
};

type TPortfolioData = {
  profile: {
    name: string;
    role: string;
    tagline: string;
    resumeLabel: string;
    resumeUrl: string;
    email: string;
    phone: string;
  };
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
  };
  about: {
    paragraphs: string[];
    skillsIntro: string;
  };
  experience: TExperience[];
  projects: TProject[];
  skills: string[];
  technologies: TTeknologi;
  skillsSection: {
    title: string;
    categories: {
      programingLanguage: string;
      framework: string;
      database: string;
      devOps: string;
    };
  };
  contact: {
    title: string;
  };
  footer: string;
  misc: {
    internalApp: string;
    showMoreProjects: string;
    showFewerProjects: string;
    scrollHint: string;
  };
};

export type { TLanguage, TExperience, TProject, TLink, TTeknologi, TPortfolioData };
