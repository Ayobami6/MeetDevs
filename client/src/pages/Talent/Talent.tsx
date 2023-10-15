import { useState } from 'react';
import TalentNav from '../../components/Navbar/TalentNav';
import './Talent.css';
import { FaFile } from 'react-icons/fa';
import TButton from '../../components/Button/TButton';
import AddNewComp from '../../components/talentProfile/AddNewComp.tsx';
import AddExperienceModal from '../../components/Modal/AddExperienceModal.tsx';
import AddProjectModal from '../../components/Modal/AddProjectModal.tsx';
import AddEducationModal from '../../components/Modal/AddEducationModal.tsx';
import Showwcase from '../../components/talentProfile/Showwcase.tsx';
import { ExperienceShowwcaseCard } from '../../components/talentProfile/ShowwcaseCard.tsx';

const Talent = (): JSX.Element => {
  const exp = {
    title: 'Software Engineer',
    company: 'Google',
    start: new Date(),
    end: new Date(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, vitae aliq',
    country: 'India',
    city: 'Bangalore',
  };
  const exp1 = {
    title: 'Software Engineer',
    company: 'Google',
    start: new Date(),
    end: new Date(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, vitae aliq',
    country: 'India',
    city: 'Bangalore',
  };
  const { talentProfile } = localStorage;
  const temp = talentProfile ? JSON.parse(talentProfile as string).talent : {};
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, _setUser] = useState(temp);
  const [showexp, setShowexp] = useState(false);
  const [showproj, setShowproj] = useState(false);
  const [showedu, setShowedu] = useState(false);
  const [userExp, _setUserExp] = useState([exp, exp1]);
  console.log(user.name);

  // @ts-ignore
  return (
    <>
      <TalentNav />
      <div className='talent-page'>
        <div className='profile-info-card'>
          <div className='p-img'>
            <img src='src/assets/talents/no_image.png' alt='' />
          </div>
          <div className='info-con'>
            <div className='info'>
              <h2 className='text-xl font-bold'>{user.name}</h2>
              <div>
                <a href='#' className='flex gap-2'>
                  <FaFile /> <p>View Resume</p>
                </a>
              </div>
            </div>

            <div>
              <TButton value='Edit Profile' />
            </div>
          </div>
        </div>

        <div className='tt-content'>
          <div className='main'>
            <div className='showcase'>
              <AddNewComp
                title={'experience'}
                children={
                  <AddExperienceModal show={showexp} setShow={setShowexp} />
                }
                onClick={() => {
                  setShowexp(true);
                }}
              />
              <hr />
              <Showwcase>
                {userExp.map((exp) => (
                  <ExperienceShowwcaseCard experience={exp} />
                ))}
              </Showwcase>
            </div>
            <AddNewComp
              title={'projects'}
              onClick={() => {
                setShowproj(true);
              }}
            >
              <AddProjectModal show={showproj} setShow={setShowproj} />
            </AddNewComp>
            <AddNewComp
              title={'education'}
              onClick={() => {
                setShowedu(true);
              }}
            >
              <AddEducationModal show={showedu} setShow={setShowedu} />
            </AddNewComp>
          </div>
          <div className='sub-info'></div>
        </div>
      </div>
    </>
  );
};

export default Talent;
