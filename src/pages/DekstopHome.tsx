import { useEffect, useState } from "react";
import CardExperience from "@/components/ui/card-experience";
import CardProject from "@/components/ui/card-project";

import { Play, Mail, Phone } from 'lucide-react';

import type { TExperience, TProject, TLink, TTeknologi } from "@/types/interfaces";

interface IProps {
  experienceData: TExperience[];
  projectData: TProject[];
  linksData: TLink[];
  skillData: string[];
  teknologiData: TTeknologi;
}

function DekstopHome({
  experienceData,
  projectData,
  linksData,
  skillData,
  teknologiData,
}: IProps) {
  const [activeId, setActiveId] = useState("about");

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
      alert("URL tidak tersedia");
    }
  };

  return (
    <div className="w-full min-h-screen box-border flex justify-center">
      <div className="w-full lg:w-[1280px] flex items-start justify-end box-border">
        <div className="w-2/5 h-screen box-border sticky top-0 left-0 bottom-0 py-20 pr-8 flex flex-col items-center justify-between">
          {/* header */}
          <div className="w-full box-border text-muted-foreground">
            <h1 className="font-bold text-5xl mb-3">M. Khoirul Huda</h1>
            <h5 className="text-xl font-semibold mb-8">Full Stack Developer</h5>

            <p className="mb-5">I am passionate about building robust, scalable, and user-friendly web applications from frontend to backend.</p>
            <a href="/RESUME-KHOIRUL-HUDA.pdf" target="_blank" className="inline-block px-3 py-2 rounded-[4px] bg-transparent border border-teal-400 text-teal-400 cursor-pointer text-sm hover:bg-teal-400 hover:text-white">Download Resume</a>
          </div>

          <div className="w-full box-border text-muted-foreground flex flex-col gap-y-4">
            <a href="#about" className={`w-auto flex items-center justify-start gap-x-4 group ${activeId === "about" ? "text-foreground" : "text-muted-foreground"}`}
            >
              <div className={`h-px group-hover:w-14 group-hover:bg-foreground transition-all duration-100 ease-in-out ${activeId === "about" ? "w-14 bg-foreground" : "w-8 bg-muted-foreground"}`}></div>
              <div className="uppercase text-xs">about</div>
            </a>

            <a href="#experience" className={`w-full flex items-center gap-x-4 group ${activeId === "experience" ? "text-foreground" : "text-muted-foreground"}`}>
              <div className={`h-px group-hover:w-14 group-hover:bg-foreground transition-all duration-100 ease-in-out ${activeId === "experience" ? "w-14 bg-foreground" : "w-8 bg-muted-foreground"}`}></div>
              <div className="uppercase text-xs">experience</div>
            </a>

            <a href="#projects" className={`w-full flex items-center gap-x-4 group ${activeId === "projects" ? "text-foreground" : "text-muted-foreground"}`}>
              <div className={`h-px group-hover:w-14 group-hover:bg-foreground transition-all duration-100 ease-in-out ${activeId === "projects" ? "w-14 bg-foreground" : "w-8 bg-muted-foreground"}`}></div>
              <div className="uppercase text-xs">projects</div>
            </a>

            <a href="#skills" className={`w-full flex items-center gap-x-4 group ${activeId === "skills" ? "text-foreground" : "text-muted-foreground"}`}>
              <div className={`h-px group-hover:w-14 group-hover:bg-foreground transition-all duration-100 ease-in-out ${activeId === "skills" ? "w-14 bg-foreground" : "w-8 bg-muted-foreground"}`}></div>
              <div className="uppercase text-xs">skills</div>
            </a>
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
            <p className="mb-5 leading-7">I am a Full Stack Developer passionate about building interactive and scalable user interfaces (UI), with a strong focus on performance optimization and development efficiency. I enjoy creating digital experiences that are not only visually appealing but also robust and user-friendly.</p>
            <p className="mb-5 leading-7">Currently, I work at <span className="text-foreground">Indocyber Global Teknologi, stationed at BPJS Ketenagakerjaan</span>, where I contribute to developing reliable and efficient systems. Previously, I have developed software across a variety of environments — from start-ups to large enterprises — including integrating payment gateways, Google APIs, and various other APIs to deliver complete and functional solutions.</p>
            <p className="mb-5 leading-7">In my spare time, I enjoy exploring new technologies, such as Artificial Intelligence (AI) and other modern technologies, to continuously improve my skills and understanding in software development.</p>
            <p className="mb-5 leading-7">Here are a few technologies I’ve been working with recently:</p>
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
            {experienceData.map((exp, i) => (
              <CardExperience key={i} experience={exp} />
            ))}
          </section>


          <section id="projects" className="w-full min-h-screen box-border text-muted-foreground mb-8">
            {projectData.map((project, i) => (
              <CardProject key={i} project={project} onClick={handleProjectClick} />
            ))}
          </section>

          <section id="skills" className="w-full box-border mb-8 py-8">
            <div className="w-full box-border mb-10">
              <div className="text-foreground/80 mb-5 text-xl">My Skills</div>
              <div className="w-full box-border text-muted-foreground mb-5">
                <div className="w-full box-border mb-3">Programing Language</div>
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
                <div className="w-full box-border mb-3">Frameworks</div>
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
                <div className="w-full box-border mb-3">Database</div>
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
                <div className="w-full box-border mb-3">Dev Ops</div>
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
              <div className="text-foreground/80 mb-5 text-xl">Contact me</div>
              <div className="w-full cursor-pointer box-border flex items-center gap-x-3 text-muted-foreground hover:text-foreground/80 transition-colors duration-200 mb-5">
                <Mail className="size-5" />
                <div>irulhuda983@gmail.com</div>
              </div>
              <div className="w-full cursor-pointer box-border flex items-center gap-x-3 text-muted-foreground hover:text-foreground/80 transition-colors duration-200 mb-5">
                <Phone className="size-5" />
                <div>+62 823-3783-1456</div>
              </div>
            </div>

            <div className="w-full box-border text-muted-foreground font-light text-sm">
              <p>Loosely designed in Figma and coded in Visual Studio Code by me. Built with <span className="text-foreground">React.js</span> and <span className="text-foreground">Tailwind CSS</span>, deployed on my personal VPS. All text is set in the Geist typeface.</p>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
};

export default DekstopHome;