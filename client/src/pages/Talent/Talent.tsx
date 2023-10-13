import React, { useState } from 'react';
import TalentNav from '../../components/Navbar/TalentNav';
import './Talent.css';
import AddInfo from '../../components/talentProfile/AddInfo';
import { FaFile } from 'react-icons/fa';
import TButton from '../../components/Button/TButton';
import AddNewComp from '../../components/talentProfile/AddNewComp.tsx';
import AddExperienceModal from '../../components/Modal/AddExperienceModal.tsx';

const Talent = (): JSX.Element => {
  const { talentProfile } = localStorage;
  const temp = talentProfile ? JSON.parse(talentProfile as string).talent : {};
  // @ts-ignore
  const [user, setUser] = useState(temp);
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
            <AddNewComp title={'experience'} />
            <AddExperienceModal />
            <AddNewComp title={'projects'} />
            <AddNewComp title={'education'} />
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
