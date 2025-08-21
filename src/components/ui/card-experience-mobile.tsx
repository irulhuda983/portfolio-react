import React from "react";
import type { TExperience } from "@/types/interfaces";

interface IProps {
  experience: TExperience;
}

const CardExperienceMobile: React.FC<IProps> = ({ experience }) => {
  return (
    <div className="w-full box-border p-4 rounded-[4px] hover:bg-secondary/20 group mb-5">
      <div className="w-full flex-none flex items-center text-xs gap-x-2 text-muted-foreground uppercase mt-1">
        <div>{experience.start}</div>
        <div className="w-4 h-px bg-muted-foreground"></div>
        <div>{experience.end}</div>
      </div>

      <div className="w-full flex-1">
        <a href="" className="text-lg font-semibold group-hover:text-sky-400">{experience.title}</a>
        <h5 className="text-foreground/80 mb-5">{experience.company}</h5>
        <div className="text-muted-foreground">
          <ul className="list-disc box-border w-full pl-4">
            {experience.jobs.map((job, index) => {
              return (
                <li key={index}>{job}</li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardExperienceMobile;
