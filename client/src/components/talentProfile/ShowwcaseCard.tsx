import React, { useState } from "react";
import TButton from "../Button/TButton.tsx";
import "./ShowwcaseCard.css";
import { noOfMonths } from "../util/numOfMonths.ts";
import { FaGlobe } from "react-icons/fa";
import UpdateCertificateModal from "../Modal/UpdateCertificateModal.tsx";
import UpdateEducationModal from "../Modal/UpdateEducationModal.tsx";
import UpdateExperienceModal from "../Modal/UpdateExperienceModal.tsx";
import UpdateProjectModal from "../Modal/UpdateProjectModal.tsx";
import UpdateSkillModal from "../Modal/UpdateSkillModal.tsx";

interface experienceProp {
  experience: {
    _id: string;
    jobTitle: string;
    employer: string;
    startDate: string;
    endDate: string;
    description: string;
    country: string;
  };
}

interface projectProps {
  project: {
    _id: string;
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
    _id: string;
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
    _id: string;
    talentId: string;
    title?: string;
    description?: string;
    link?: string;
  };
}

interface skillProps {
  skill: {
    _id: string;
    talentId: string;
    name?: string;
    subSkills?: string;
  };
}

const ExperienceShowwcaseCard: React.FC<experienceProp> = ({
  experience,
}): React.ReactElement => {
  const [showexp, setShowexp] = useState(false);

  return (
    <div className={"showwcasecard"} key={experience._id}>
      <div className={"experience"}>
        <div className={"title"}>
          <h1>{experience.jobTitle}</h1>
        </div>
        <div className={"work-info"}>
          <p>{experience.employer}</p>
          &bull;
          <p>
            {new Date(experience.startDate).toDateString()} -{" "}
            {new Date(experience.endDate).toDateString()}
          </p>
          &bull;
          <p>
            {noOfMonths(
              new Date(experience.startDate),
              new Date(experience.endDate),
            )}{" "}
            mo
          </p>
        </div>
        <div className={"location-info"}>
          <p>{experience.country}</p>
        </div>
        <div className={"description"}>
          <p>{experience.description}</p>
        </div>
      </div>
      <UpdateExperienceModal
        show={showexp}
        setShow={setShowexp}
        info={experience}
      />
      <TButton
        value={"edit"}
        onClick={() => {
          setShowexp(true);
        }}
      />
    </div>
  );
};
const ProjectShowwcaseCard: React.FC<projectProps> = ({
  project,
}): React.ReactElement => {
  const [showproj, setShowproj] = useState(false);
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
            {new Date(project.startDate).toDateString()} -{" "}
            {new Date(project.endDate).toDateString()}
          </p>
          &bull;
          <p>
            {noOfMonths(new Date(project.startDate), new Date(project.endDate))}{" "}
            mo
          </p>
        </div>

        <div className={"description"}>
          <p>{project.description}</p>
        </div>
      </div>
      <UpdateProjectModal
        show={showproj}
        setShow={setShowproj}
        info={project}
      />
      <TButton
        value={"edit"}
        onClick={() => {
          setShowproj(true);
        }}
      />
    </div>
  );
};
const EducationShowwcaseCard: React.FC<educationProps> = ({
  education,
}): React.ReactElement => {
  const [showedu, setShowedu] = useState(false);

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
            {new Date(education.startDate).toDateString()} -{" "}
            {new Date(education.endDate).toDateString()}
          </p>
          &bull;
          <p>
            {noOfMonths(
              new Date(education.startDate),
              new Date(education.endDate),
            )}{" "}
            mo
          </p>
        </div>
        <div className={"location-info"}>
          <p>{education.country}</p>
          <p>{education.city}</p>
        </div>
        <div className={"description"}>
          <p>{education.description}</p>
        </div>
      </div>
      <UpdateEducationModal
        show={showedu}
        setShow={setShowedu}
        info={education}
      />
      <TButton
        value={"edit"}
        onClick={() => {
          setShowedu(true);
        }}
      />{" "}
    </div>
  );
};
const CertificationShowwcaseCard: React.FC<certificateProps> = ({
  certificate,
}): React.ReactElement => {
  const [showcert, setShowcert] = useState(false);

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
      <UpdateCertificateModal
        show={showcert}
        setShow={setShowcert}
        info={certificate}
      />
      <TButton
        value={"edit"}
        onClick={() => {
          setShowcert(true);
        }}
      />{" "}
    </div>
  );
};
const SkillShowwcaseCard: React.FC<skillProps> = ({
  skill,
}): React.ReactElement => {
  const [showskill, setShowskill] = useState(false);

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
      <UpdateSkillModal show={showskill} setShow={setShowskill} info={skill} />
      <TButton
        value={"edit"}
        onClick={() => {
          setShowskill(true);
        }}
      />{" "}
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
