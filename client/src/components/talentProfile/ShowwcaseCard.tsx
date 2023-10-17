import React from "react";
import TButton from "../Button/TButton.tsx";
import "./ShowwcaseCard.css";
import { noOfMonths } from "../util/numOfMonths.ts";
import { FaGlobe } from "react-icons/fa";

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

interface educationProps {
  education: {
    talentId?: string;
    degree: string;
    school: string;
    country: string;
    city: string;
    startDate: Date;
    endDate: Date;
    description?: string;
  };
}

interface certificateProps {
  certificate: {
    talentId: string;
    title?: string;
    description?: string;
    link?: string;
  };
}

interface skillProps {
  skill: {
    talentId: string;
    name?: string;
    subSkills?: string;
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
      <div className={"project"}>
        <div className={"title"}>
          <h1>{project.name}</h1>
        </div>
        <div className={"project-info"}>
          <a href={project.link}>
            <FaGlobe />
          </a>
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
const EducationShowwcaseCard: React.FC<educationProps> = ({
  education,
}): React.ReactElement => {
  return (
    <div className={"showwcasecard"}>
      <div className={"experience"}>
        <div className={"title"}>
          <h1>{education.degree}</h1>
        </div>
        <div className={"work-info"}>
          <p>{education.school}</p>
          &bull;
          <p>
            {education.startDate.getFullYear()} -{" "}
            {education.endDate.getFullYear()}
          </p>
          &bull;
          <p>{noOfMonths(education.startDate, education.endDate)} mo</p>
        </div>
        <div className={"location-info"}>
          <p>{education.country}</p>
          <p>{education.city}</p>
        </div>
        <div className={"description"}>
          <p>{education.description}</p>
        </div>
      </div>
      <TButton value={"edit"} />
    </div>
  );
};
const CertificationShowwcaseCard: React.FC<certificateProps> = ({
  certificate,
}): React.ReactElement => {
  return (
    <div className={"showwcasecard"}>
      <div className={"certificate"}>
        <div className={"title"}>
          <h1>{certificate.title}</h1>
        </div>
        <div className={"work-info"}>
          <a href={certificate.link}>View Certification</a>
        </div>
        <div className={"description"}>
          <p>{certificate.description}</p>
        </div>
      </div>
      <TButton value={"edit"} />
    </div>
  );
};
const SkillShowwcaseCard: React.FC<skillProps> = ({
  skill,
}): React.ReactElement => {
  return (
    <div className={"showwcasecard"}>
      <div className={"certificate"}>
        <div className={"title"}>
          <h1>{skill.name}</h1>
        </div>
        <div className={"work-info"}>
          <p>{skill.subSkills}</p>
        </div>
      </div>
      <TButton value={"edit"} />
    </div>
  );
};

export {
  ExperienceShowwcaseCard,
  ProjectShowwcaseCard,
  EducationShowwcaseCard,
  CertificationShowwcaseCard,
  SkillShowwcaseCard,
};
