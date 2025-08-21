import React from "react";
import type { TProject } from "@/types/interfaces";

interface IProps {
  project: TProject;
  onClick?: (url?: string) => void;
}

const CardProjectMobile: React.FC<IProps> = ({ project, onClick }) => {

  return (
    <div onClick={() => onClick?.(project.link)} className="w-full box-border rounded-[4px] p-4 cursor-pointer hover:bg-secondary/20 group mb-5">

      <div className="w-full flex-1 -mt-1 mb-5">
        <h1 className="font-semibold text-lg mb-3 text-foreground/80 group-hover:text-teal-400">{project.title}</h1>
        <p className="text-sm mb-3">{project.description}</p>
        <div className="w-full flex flex-wrap gap-2">
          {project.skills?.map((skill) => (
            <span key={skill} className="text-xs bg-teal-400/20 text-teal-400 px-3 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="w-44 h-24 rounded-[8px] flex-none bg-cover bg-center" style={{ backgroundImage: `url(${project.imgUrl})` }}></div>
    </div>
  );
};

export default CardProjectMobile;
