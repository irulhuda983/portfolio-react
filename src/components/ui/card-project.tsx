import React from "react";
import type { TProject } from "@/types/interfaces";

interface IProps {
  project: TProject;
  onClick?: (url?: string) => void;
  internalLabel?: string;
}

const CardProject: React.FC<IProps> = ({ project, onClick, internalLabel }) => {
  const isInternal = !project.link;

  return (
    <div
      onClick={isInternal ? undefined : () => onClick?.(project.link)}
      className={`w-full box-border flex items-start justify-between gap-x-5 rounded-[4px] p-4 mb-5 ${isInternal ? "" : "cursor-pointer hover:bg-secondary/20 group"}`}
    >
      <div className="w-44 h-24 rounded-[8px] flex-none bg-cover bg-center" style={{ backgroundImage: `url(${project.imgUrl})` }}></div>

      <div className="w-full flex-1 -mt-1">
        <div className="flex items-center flex-wrap gap-x-3 gap-y-1 mb-3">
          <h1 className="font-semibold text-lg text-foreground/80 group-hover:text-teal-400">{project.title}</h1>
          {isInternal && internalLabel && (
            <span className="text-xs border border-muted-foreground/40 text-muted-foreground px-2 py-0.5 rounded-full">{internalLabel}</span>
          )}
        </div>
        <p className="text-sm mb-3">{project.description}</p>
        <div className="w-full flex flex-wrap gap-2">
          {project.skills?.map((skill) => (
            <span key={skill} className="text-xs bg-teal-400/20 text-teal-400 px-3 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardProject;
