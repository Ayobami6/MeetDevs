import { useState } from 'react';
import TalentNav from '../../components/Navbar/TalentNav';
import './Talent.css';
import AddInfo from '../../components/talentProfile/AddInfo';
import { FaFile } from 'react-icons/fa';
import TButton from '../../components/Button/TButton';
import AddNewComp from '../../components/talentProfile/AddNewComp.tsx';
import AddExperienceModal from '../../components/Modal/AddExperienceModal.tsx';
import AddProjectModal from '../../components/Modal/AddProjectModal.tsx';
import AddEducationModal from '../../components/Modal/AddEducationModal.tsx';

const Talent = (): JSX.Element => {
  const { talentProfile } = localStorage;
  const temp = talentProfile ? JSON.parse(talentProfile as string).talent : {};
  const [user, _setUser] = useState(temp);
  const [showexp, setShowexp] = useState(false);
  const [showproj, setShowproj] = useState(false);
  const [showedu, setShowedu] = useState(false);
  console.log(user.name);
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
            <AddNewComp
              title={'experience'}
              children={
                <AddExperienceModal show={showexp} setShow={setShowexp} />
              }
              onClick={() => {
                setShowexp(true);
              }}
            />
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

        <div className='profile-add-info'>
          <AddInfo title='Experience' />
          <AddInfo title='Skill' />
          <AddInfo title='Education' />
          <AddInfo title='Certificates' />
        </div>
      </div>
    </>
  );
};

// /* eslint-disable @typescript-eslint/no-unused-vars */
// import React, { useState } from "react";
// import Navbar from "../../components/Navbar/Navbar2";

// const Talent = () => {
//   const [user, setUser] = useState(
//     JSON.parse(localStorage.getItem("talentProfile") as string)
//   );
//   return (
//     <div>
//       <Navbar />
//       <h2 className="text-3xl text-center my-4">Welcome {}</h2>
//     </div>
//   );
// };

export default Talent;
