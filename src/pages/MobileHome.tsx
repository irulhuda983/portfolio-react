import { useEffect, useState } from "react";

import { Play, Mail, Phone } from 'lucide-react';

import type { usePortfolioData } from "@/i18n/usePortfolioData";

import CardExperienceMobile from "@/components/ui/card-experience-mobile";
import CardProjectMobile from "@/components/ui/card-project-mobile";
import RichText from "@/components/ui/rich-text";
import LanguageSwitcher from "@/components/ui/language-switcher";

interface IProps {
  data: ReturnType<typeof usePortfolioData>;
}

export default function MobileHome({ data }: IProps) {
  const [activeMobileId, setActiveMobileId] = useState<string>("noid");

  const {
    profile,
    nav,
    about,
    experience: experienceData,
    projects: projectData,
    links: linksData,
    skills: skillData,
    technologies: teknologiData,
    skillsSection,
    contact,
    footer,
    misc,
  } = data;

  const navLabels: Record<string, string> = {
    about: nav.about,
    experience: nav.experience,
    projects: nav.projects,
    skills: nav.skills,
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      let currentId = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom > 0) {
          currentId = section.id;
        }
      });

      setActiveMobileId(currentId);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // cek awal

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleProjectClick = (url?: string): void => {
    if (url) {
      window.open(url, "_blank"); // redirect ke tab baru
    } else {
      alert(misc.urlNotAvailable);
    }
  };

  return (
    <div className="w-full box-border">
      {activeMobileId != "noid" && (
        <nav className="w-full box-border h-16 py-2 px-6 flex items-center justify-between bg-foreground/10 backdrop-blur-md sticky top-0 z-50">
          <h1 className="text-foreground/80 font-bold uppercase">{navLabels[activeMobileId] ?? activeMobileId}</h1>
          <LanguageSwitcher />
        </nav>
      )}

      <section id="noid" className="w-full box-border px-6 pt-12 pb-20">
        <div className="w-full box-border text-muted-foreground">
          <div className="w-full flex items-center justify-between mb-2">
            <h1 className="font-bold text-3xl text-foreground/80">{profile.name}</h1>
            <LanguageSwitcher />
          </div>
          <h5 className="text-lg text-foreground/80 font-semibold mb-5">{profile.role}</h5>

          <p className="mb-5">{profile.tagline}</p>
          <a href={profile.resumeUrl} target="_blank" className="inline-block px-3 py-2 rounded-[4px] bg-transparent border border-teal-400 text-teal-400 cursor-pointer text-sm hover:bg-teal-400 hover:text-white">{profile.resumeLabel}</a>
        </div>

        <div className="w-full h-24 box-border flex items-center justify-start gap-x-7">
          {linksData.map(({ href, icon: Icon }, i) => (
            <a key={i} href={href} target="_blank" className="inline-block size-6 text-muted-foreground hover:text-foreground transition-colors duration-200">
              <Icon />
            </a>
          ))}
        </div>
      </section>

      <section id="about" className="text-muted-foreground min-h-screen pb-20 px-6">
        {about.paragraphs.map((paragraph, i) => (
          <p key={i} className="mb-5 leading-7"><RichText text={paragraph} /></p>
        ))}
        <p className="mb-5 leading-7">{about.skillsIntro}</p>
        <div className="grid grid-cols-2 gap-3">
          {skillData.map((skill, i) => (
            <div key={i} className="font-semibold text-teal-400 text-xs flex items-center gap-x-2">
              <Play className="size-3" />
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="w-full min-h-screen box-border pb-20">
        {experienceData.map((exp) => (
          <CardExperienceMobile key={exp.id} experience={exp} />
        ))}
      </section>

      <section id="projects" className="w-full min-h-screen box-border text-muted-foreground pb-20">
        {projectData.map((project) => (
          <CardProjectMobile key={project.id} project={project} onClick={handleProjectClick} />
        ))}
      </section>

      <section id="skills" className="w-full box-border px-6 pb-20">
        <div className="w-full box-border mb-10">
          <div className="text-foreground/80 mb-5 text-xl">{skillsSection.title}</div>
          <div className="w-full box-border text-muted-foreground mb-5">
            <div className="w-full box-border mb-3">{skillsSection.categories.programingLanguage}</div>
            <div className="grid grid-cols-2 gap-3">
              {teknologiData.programingLanguage.map((skill, i) => (
                <div key={i} className="font-semibold text-teal-400 text-xs flex items-center gap-x-2">
                  <Play className="size-3" />
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full box-border text-muted-foreground mb-5">
            <div className="w-full box-border mb-3">{skillsSection.categories.framework}</div>
            <div className="grid grid-cols-2 gap-3">
              {teknologiData.framework.map((skill, i) => (
                <div key={i} className="font-semibold text-teal-400 text-xs flex items-center gap-x-2">
                  <Play className="size-3" />
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full box-border text-muted-foreground mb-5">
            <div className="w-full box-border mb-3">{skillsSection.categories.database}</div>
            <div className="grid grid-cols-2 gap-3">
              {teknologiData.database.map((skill, i) => (
                <div key={i} className="font-semibold text-teal-400 text-xs flex items-center gap-x-2">
                  <Play className="size-3" />
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full box-border text-muted-foreground mb-5">
            <div className="w-full box-border mb-3">{skillsSection.categories.devOps}</div>
            <div className="grid grid-cols-2 gap-3">
              {teknologiData.devOps.map((skill, i) => (
                <div key={i} className="font-semibold text-teal-400 text-xs flex items-center gap-x-2">
                  <Play className="size-3" />
                  {skill}
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="w-full box-border mb-10">
          <div className="text-foreground/80 mb-5 text-xl">{contact.title}</div>
          <a href={`mailto:${profile.email}`} className="w-full cursor-pointer box-border flex items-center gap-x-3 text-muted-foreground hover:text-foreground/80 transition-colors duration-200 mb-5">
            <Mail className="size-5" />
            <div>{profile.email}</div>
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="w-full cursor-pointer box-border flex items-center gap-x-3 text-muted-foreground hover:text-foreground/80 transition-colors duration-200 mb-5">
            <Phone className="size-5" />
            <div>{profile.phone}</div>
          </a>
        </div>

        <div className="w-full box-border text-muted-foreground font-light text-sm">
          <p><RichText text={footer} /></p>
        </div>
      </section>
    </div>
  );
}
