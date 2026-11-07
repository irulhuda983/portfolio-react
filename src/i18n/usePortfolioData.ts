import { useMemo } from "react";

import en from "@/data/locales/en.json";
import id from "@/data/locales/id.json";
import linksData from "@/data/links.json";
import projectImages from "@/data/project-images";

import { GithubIcon, InstagramIcon, TwitterIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons";

import { useLanguage } from "./useLanguage";

import type { TLink, TPortfolioData, TProject } from "@/types/interfaces";

const locales: Record<string, TPortfolioData> = { en, id };

const iconMap: Record<string, React.ElementType> = {
  github: GithubIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  linkedin: LinkedinIcon,
  whatsapp: WhatsappIcon,
};

function usePortfolioData() {
  const { language } = useLanguage();

  return useMemo(() => {
    const data = locales[language];

    const projects: TProject[] = data.projects.map((project) => ({
      ...project,
      imgUrl: projectImages[project.id],
    }));

    const links: TLink[] = linksData.map(({ href, icon }) => ({
      href,
      icon: iconMap[icon],
    }));

    return { ...data, projects, links };
  }, [language]);
}

export { usePortfolioData };
