import { useState } from "react";
import TalentNav from "../../components/Navbar/TalentNav";
import "./Talent.css";
import { FaFile } from "react-icons/fa";
import TButton from "../../components/Button/TButton";
import AddNewComp from "../../components/talentProfile/AddNewComp.tsx";
import AddExperienceModal from "../../components/Modal/AddExperienceModal.tsx";
import AddProjectModal from "../../components/Modal/AddProjectModal.tsx";
import AddEducationModal from "../../components/Modal/AddEducationModal.tsx";
import Showwcase from "../../components/talentProfile/Showwcase.tsx";
import {
  CertificationShowwcaseCard,
  certificationShowwcaseCard,
  EducationShowwcaseCard,
  ExperienceShowwcaseCard,
  ProjectShowwcaseCard,
} from "../../components/talentProfile/ShowwcaseCard.tsx";

const Talent = (): JSX.Element => {
  const exp = {
    title: "Software Engineer",
    company: "Google",
    start: new Date(),
    end: new Date(),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, vitae aliq",
    country: "India",
    city: "Bangalore",
  };
  const exp1 = {
    title: "Software Engineer",
    company: "Google",
    start: new Date(),
    end: new Date(),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, vitae aliq",
    country: "India",
    city: "Bangalore",
  };

  // dummy list of project objects
  const projectList = [
    {
      talentId: "1",
      name: "Project 1",
      description: "Project 1 description",
      startDate: new Date(),
      endDate: new Date(),
      link: "https://www.google.com",
    },
    {
      talentId: "1",
      name: "Project 2",
      description: "Project 2 description",
      startDate: new Date(),
      endDate: new Date(),
      link: "https://www.google.com",
    },
  ];

  // dummy list of education objects
  const educationList = [
    {
      talentId: "1",
      school: "School 1",
      degree: "Degree 1",
      startDate: new Date(),
      endDate: new Date(),
      country: "Nigeria",
      city: "benin",
      description: "Description 1",
    },
  ];

  const certificateList = [
    { talentId: "1", title: "Certificate 1", description: "Description 1" },
    { talentId: "1", title: "Certificate 2", description: "Description 2" },
  ];

  const { talentProfile } = localStorage;
  const temp = talentProfile ? JSON.parse(talentProfile as string).talent : {};
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, _setUser] = useState(temp);
  const [showexp, setShowexp] = useState(false);
  const [showproj, setShowproj] = useState(false);
  const [showedu, setShowedu] = useState(false);
  const [userExp, _setUserExp] = useState([exp, exp1]);

  // @ts-ignore
  return (
    <>
      <TalentNav />
      <div className="talent-page">
        <div className="profile-info-card">
          <div className="p-img">
            <img src="src/assets/talents/no_image.png" alt="" />
          </div>
          <div className="info-con">
            <div className="info">
              <h2 className="text-xl font-bold">{user.name}</h2>
              <div>
                <a href="#" className="flex gap-2">
                  <FaFile /> <p>View Resume</p>
                </a>
              </div>
            </div>

            <div>
              <TButton value="Edit Profile" />
            </div>
          </div>
        </div>

        <div className="tt-content">
          <div className="main">
            <div className="showcase">
              <AddNewComp
                title={"experience"}
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
            <div className="showcase">
              <AddNewComp
                title={"projects"}
                onClick={() => {
                  setShowproj(true);
                }}
              >
                <AddProjectModal show={showproj} setShow={setShowproj} />
              </AddNewComp>
              <Showwcase>
                {projectList.map((project) => (
                  <ProjectShowwcaseCard project={project} />
                ))}
              </Showwcase>
            </div>
            <div className="showcase">
              {" "}
              <AddNewComp
                title={"education"}
                onClick={() => {
                  setShowedu(true);
                }}
              >
                <AddEducationModal show={showedu} setShow={setShowedu} />
              </AddNewComp>
              <Showwcase>
                {educationList.map((education) => (
                  <EducationShowwcaseCard education={education} />
                ))}
              </Showwcase>
            </div>{" "}
            <div className="showcase">
              {" "}
              <AddNewComp
                title={"Skills"}
                onClick={() => {
                  setShowedu(true);
                }}
              >
                <AddEducationModal show={showedu} setShow={setShowedu} />
              </AddNewComp>
              <Showwcase>
                {educationList.map((education) => (
                  <EducationShowwcaseCard education={education} />
                ))}
              </Showwcase>
            </div>{" "}
            <div className="showcase">
              {" "}
              <AddNewComp
                title={"Certification"}
                onClick={() => {
                  setShowedu(true);
                }}
              >
                <AddEducationModal show={showedu} setShow={setShowedu} />
              </AddNewComp>
              <Showwcase>
                {certificateList.map((certs) => (
                  <CertificationShowwcaseCard certificate={certs} />
                ))}
              </Showwcase>
            </div>
          </div>
          <div className="sub-info"></div>
        </div>
      </div>
    </>
  );
};

export default Talent;
