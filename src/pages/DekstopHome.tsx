import { useEffect, useState } from "react";
import CardExperience from "@/components/ui/card-experience";
import CardProject from "@/components/ui/card-project";
import RichText from "@/components/ui/rich-text";
import LanguageSwitcher from "@/components/ui/language-switcher";

import { Play, Mail, Phone } from 'lucide-react';

import type { usePortfolioData } from "@/i18n/usePortfolioData";

interface IProps {
  data: ReturnType<typeof usePortfolioData>;
}

function DekstopHome({ data }: IProps) {
  const [activeId, setActiveId] = useState("about");

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

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleProjectClick = (url?: string): void => {
    if (url) {
      window.open(url, "_blank"); // redirect ke tab baru
    } else {
      alert(misc.urlNotAvailable);
    }
  };

  const navItems: Array<{ id: "about" | "experience" | "projects" | "skills" }> = [
    { id: "about" },
    { id: "experience" },
    { id: "projects" },
    { id: "skills" },
  ];

  return (
    <div className="w-full min-h-screen box-border flex justify-center">
      <div className="w-full lg:w-[1280px] flex items-start justify-end box-border">
        <div className="w-2/5 h-screen box-border sticky top-0 left-0 bottom-0 py-20 pr-8 flex flex-col items-center justify-between">
          {/* header */}
          <div className="w-full box-border text-muted-foreground">
            <div className="w-full flex items-center justify-between mb-3">
              <h1 className="font-bold text-5xl">{profile.name}</h1>
              <LanguageSwitcher />
            </div>
            <h5 className="text-xl font-semibold mb-8">{profile.role}</h5>

            <p className="mb-5">{profile.tagline}</p>
            <a href={profile.resumeUrl} target="_blank" className="inline-block px-3 py-2 rounded-[4px] bg-transparent border border-teal-400 text-teal-400 cursor-pointer text-sm hover:bg-teal-400 hover:text-white">{profile.resumeLabel}</a>
          </div>

          <div className="w-full box-border text-muted-foreground flex flex-col gap-y-4">
            {navItems.map(({ id }) => (
              <a key={id} href={`#${id}`} className={`w-auto flex items-center justify-start gap-x-4 group ${activeId === id ? "text-foreground" : "text-muted-foreground"}`}>
                <div className={`h-px group-hover:w-14 group-hover:bg-foreground transition-all duration-100 ease-in-out ${activeId === id ? "w-14 bg-foreground" : "w-8 bg-muted-foreground"}`}></div>
                <div className="uppercase text-xs">{nav[id]}</div>
              </a>
            ))}
          </div>

          <div className="w-full h-24 box-border flex items-center justify-start gap-x-7">
            {linksData.map(({ href, icon: Icon }, i) => (
              <a key={i} href={href} target="_blank" className="inline-block size-6 text-muted-foreground hover:text-foreground transition-colors duration-200">
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <div className="w-3/5 py-20 box-border pl-8">
          <section id="about" className="text-muted-foreground min-h-screen mb-8 px-4">
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

          <section id="experience" className="w-full min-h-screen box-border mb-8">
            {experienceData.map((exp) => (
              <CardExperience key={exp.id} experience={exp} />
            ))}
          </section>


          <section id="projects" className="w-full min-h-screen box-border text-muted-foreground mb-8">
            {projectData.map((project) => (
              <CardProject key={project.id} project={project} onClick={handleProjectClick} />
            ))}
          </section>

          <section id="skills" className="w-full box-border mb-8 py-8">
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

      </div>
    </div>
  );
};

export default DekstopHome;
