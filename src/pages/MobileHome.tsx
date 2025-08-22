import { useEffect, useState } from "react";

import { Play, Mail, Phone } from 'lucide-react';

import type { TExperience, TProject, TLink, TTeknologi } from "@/types/interfaces";

import CardExperienceMobile from "@/components/ui/card-experience-mobile";
import CardProjectMobile from "@/components/ui/card-project-mobile";

interface IProps {
  experienceData: TExperience[];
  projectData: TProject[];
  linksData: TLink[];
  skillData: string[];
  teknologiData: TTeknologi;
}

export default function MobileHome({
  experienceData,
  projectData,
  linksData,
  skillData,
  teknologiData,
}: IProps) {
  const [activeMobileId, setActiveMobileId] = useState<string>("noid");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      let currentId = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // console.log(rect.top);
        if (rect.top <= 100 && rect.bottom > 0) {
          currentId = section.id;
        }
      });

      setActiveMobileId(currentId);

      // console.log(activeMobileId); // Debugging log to check the current active section ID
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // cek awal

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleProjectClick = (url?: string): void => {
    if (url) {
      window.open(url, "_blank"); // redirect ke tab baru
    } else {
      alert("URL tidak tersedia");
    }
  };

  return (
    <div className="w-full box-border">
      {activeMobileId != "noid" && (
        <nav className="w-full box-border h-16 py-2 px-6 flex items-center bg-foreground/10 backdrop-blur-md sticky top-0 z-50">
          <h1 className="text-foreground/80 font-bold uppercase">{activeMobileId}</h1>
        </nav>
      )}

      <section id="noid" className="w-full box-border px-6 pt-12 pb-20">
        <div className="w-full box-border text-muted-foreground">
          <h1 className="font-bold text-3xl mb-2 text-foreground/80">M. Khoirul Huda</h1>
          <h5 className="text-lg text-foreground/80 font-semibold mb-5">Full Stack Developer</h5>

          <p className="mb-5">I am passionate about building robust, scalable, and user-friendly web applications from frontend to backend.</p>
          <a href="/RESUME-KHOIRUL-HUDA.pdf" target="_blank" className="inline-block px-3 py-2 rounded-[4px] bg-transparent border border-teal-400 text-teal-400 cursor-pointer text-sm hover:bg-teal-400 hover:text-white">Download Resume</a>
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

      <section id="experience" className="w-full min-h-screen box-border pb-20">
        {experienceData.map((exp, i) => (
          <CardExperienceMobile key={i} experience={exp} />
        ))}
      </section>

      <section id="projects" className="w-full min-h-screen box-border text-muted-foreground pb-20">
        {projectData.map((project, i) => (
          <CardProjectMobile key={i} project={project} onClick={handleProjectClick} />
        ))}
      </section>

      <section id="skills" className="w-full box-border px-6 pb-20">
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
  );
}