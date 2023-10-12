// import React from "react";
// import { FaHome, FaSearch } from "react-icons/fa";
// import TalentNav from "../../components/Navbar/TalentNav";
// import "./Talent.css";
// import AddInfo from "../../components/talentProfile/AddInfo";

// const Talent = (): JSX.Element => {
//   return (
//     <>
//       <TalentNav />

//       <div className="talent-page">
//         <div className="search-home">
//           <div className="home-icon">
//             <FaHome />
//           </div>

//           <div>
//             <div className="search-con">
//               <input name="search"></input>
//               <button id="search">
//                 <FaSearch />
//               </button>
//             </div>
//           </div>
//         </div>
//         <h1 className="text-[2rem] font-bold">Profile</h1>
//         <div className="profile-info-card">
//           <div className="info-con">
//             <div className="info">
//               <p>
//                 <b>Name:</b>Talent Name
//               </p>
//               <p>
//                 <b>Email:</b>talents@email.com
//               </p>
//               <p>
//                 <b>Role:</b>Talent Role/Skill
//               </p>
//             </div>

//             <div className="p-img">
//               <img src="src/assets/talents/no_image.png" alt="" />
//             </div>
//           </div>
//         </div>

//         <div className="profile-add-info">
//           <AddInfo title="Experience" />
//           <AddInfo title="Skill" />
//           <AddInfo title="Education" />
//           <AddInfo title="Certificates" />
//         </div>
//       </div>
//     </>
//   );
// };

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar2";

const Talent = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("talentProfile") as string)
  );
  return (
    <div>
      <Navbar />
      <h2 className="text-3xl text-center my-4">Welcome {user.talent.name}</h2>
    </div>
  );
};

export default Talent;
