import React from 'react';
import TButton from '../Button/TButton.tsx';

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
      <div>
        <div>
          <h1>{experience.title}</h1>
        </div>
        <div>
          <p>{experience.company}</p>
          <p>
            {experience.start.getFullYear()} - {experience.end.getFullYear()}
          </p>
          <p>{noOfMonths(experience.start, experience.end)}</p>
        </div>
        <div>
          <p>{experience.country}</p>
          <p>{experience.city}</p>
        </div>
        <div>
          <p>{experience.description}</p>
        </div>
      </div>
      <TButton value={'edit'} />
    </div>
  );
};
const ProjectShowwcaseCard: React.FC = (): React.ReactElement => {
  return (
    <div className={'showwcasecard'}>
      <div></div>
      <div></div>
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
