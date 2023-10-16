import React from "react";
import TButton from "../Button/TButton.tsx";
import "./ShowwcaseCard.css";
import { noOfMonths } from "../util/numOfMonths.ts";

interface experienceProp {
  experience: {
    title: string;
    company: string;
    start: Date;
    end: Date;
    description: string;
    country: string;
    city: string;
  };
}

interface projectProps {
  project: {
    talentId: string;
    name?: string;
    description?: string;
    startDate: Date;
    endDate: Date;
    link?: string;
  };
}

const ExperienceShowwcaseCard: React.FC<experienceProp> = ({
  experience,
}): React.ReactElement => {
  return (
    <div className={"showwcasecard"}>
      <div className={"experience"}>
        <div className={"title"}>
          <h1>{experience.title}</h1>
        </div>
        <div className={"work-info"}>
          <p>{experience.company}</p>
          &bull;
          <p>
            {experience.start.getFullYear()} - {experience.end.getFullYear()}
          </p>
          &bull;
          <p>{noOfMonths(experience.start, experience.end)} mo</p>
        </div>
        <div className={"location-info"}>
          <p>{experience.country}</p>
          <p>{experience.city}</p>
        </div>
        <div className={"description"}>
          <p>{experience.description}</p>
        </div>
      </div>
      <TButton value={"edit"} />
    </div>
  );
};
const ProjectShowwcaseCard: React.FC<projectProps> = ({
  project,
}): React.ReactElement => {
  return (
    <div className={"showwcasecard"}>
      <div className={"experience"}>
        <div className={"title"}>
          <h1>{project.name}</h1>
        </div>
        <div className={"project-info"}>
          <p>{project.link}</p>
          &bull;
          <p>
            {project.startDate.getFullYear()} - {project.endDate.getFullYear()}
          </p>
          &bull;
          <p>{noOfMonths(project.startDate, project.endDate)} mo</p>
        </div>

        <div className={"description"}>
          <p>{project.description}</p>
        </div>
      </div>
      <TButton value={"edit"} />
    </div>
  );
};
const EducationShowwcaseCard: React.FC = (): React.ReactElement => {
  return (
    <div className={"showwcasecard"}>
      <div></div>
      <div></div>
    </div>
  );
};

export {
  ExperienceShowwcaseCard,
  ProjectShowwcaseCard,
  EducationShowwcaseCard,
};
