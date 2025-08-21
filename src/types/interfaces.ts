import type React from "react";

type TExperience = {
  start?: string;
  end?: string;
  title: string;
  company: string;
  jobs: string[];
};

type TProject = {
  imgUrl?: string;
  link?: string;
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

export type { TExperience, TProject, TLink, TTeknologi };