import React from 'react';
import TButton from '../Button/TButton.tsx';
import './ShowwcaseCard.css';

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
  talentId: string;
  name?: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  link?: string;
}

const noOfMonths = (start: Date, end: Date): number => {
  const diff = Math.abs(start.getTime() - end.getTime());
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  return months;
};
const ExperienceShowwcaseCard: React.FC<experienceProp> = ({
  experience,
}): React.ReactElement => {
  return (
    <div className={'showwcasecard'}>
      <div className={'experience'}>
        <div className={'title'}>
          <h1>{experience.title}</h1>
        </div>
        <div className={'work-info'}>
          <p>{experience.company}</p>
          &bull;
          <p>
            {experience.start.getFullYear()} - {experience.end.getFullYear()}
          </p>
          &bull;
          <p>{noOfMonths(experience.start, experience.end)} mo</p>
        </div>
        <div className={'location-info'}>
          <p>{experience.country}</p>
          <p>{experience.city}</p>
        </div>
        <div className={'description'}>
          <p>{experience.description}</p>
        </div>
      </div>
      <TButton value={'edit'} />
    </div>
  );
};
const ProjectShowwcaseCard: React.FC<projectProps> = (
  proj,
): React.ReactElement => {
  return (
    <div className={'showwcasecard'}>
      <div className={'experience'}>
        <div className={'title'}>
          <h1>{proj.name}</h1>
        </div>
        <div className={'project-info'}>
          <p>{proj.link}</p>
          &bull;
          <p>
            {proj.startDate.getFullYear()} - {proj.endDate.getFullYear()}
          </p>
          &bull;
          <p>{noOfMonths(proj.startDate, proj.endDate)} mo</p>
        </div>

        <div className={'description'}>
          <p>{proj.description}</p>
        </div>
      </div>
      <TButton value={'edit'} />
    </div>
  );
};
const EducationShowwcaseCard: React.FC = (): React.ReactElement => {
  return (
    <div className={'showwcasecard'}>
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
