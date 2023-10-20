/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createContext, useEffect, useState } from 'react';
import TalentNav from '../../components/Navbar/TalentNav';
import './Talent.css';
import { FaFile } from 'react-icons/fa';
import TButton from '../../components/Button/TButton';
import AddNewComp from '../../components/talentProfile/AddNewComp.tsx';
import AddExperienceModal from '../../components/Modal/AddExperienceModal.tsx';
import AddProjectModal from '../../components/Modal/AddProjectModal.tsx';
import AddEducationModal from '../../components/Modal/AddEducationModal.tsx';
import Showwcase from '../../components/talentProfile/Showwcase.tsx';
import {
    CertificationShowwcaseCard,
    EducationShowwcaseCard,
    ExperienceShowwcaseCard,
    ProjectShowwcaseCard,
    SkillShowwcaseCard,
} from '../../components/talentProfile/ShowwcaseCard.tsx';
import AddCertificateModal from '../../components/Modal/AddCertificateModal.tsx';
import AddSkillModal from '../../components/Modal/AddSkillModal.tsx';
import { getTalentExperiences } from '../../api/experience.ts';
import { getTalentProjects } from '../../api/project.ts';
import { getTalentEducations } from '../../api/education.ts';
import { getTalentCertifications } from '../../api/certifications.ts';
import { getTalentSkills } from '../../api/skills.ts';

// @ts-ignore
export const TalentContext: React.Context<{
    refresh: boolean;
    setRefresh: React.Dispatch<React.SetStateAction<any>>;
}> = createContext({});
const Talent = (): JSX.Element => {
    const [refresh, setRefresh] = useState(false);
    const { talentProfile } = localStorage;
    const temp = talentProfile
        ? JSON.parse(talentProfile as string).talent
        : {};
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [user, _setUser] = useState(temp);
    const [showexp, setShowexp] = useState(false);
    const [showproj, setShowproj] = useState(false);
    const [showedu, setShowedu] = useState(false);
    const [showskill, setShowskill] = useState(false);
    const [showcert, setShowcert] = useState(false);
    const [talentExperiences, setTalentExperiences] = useState([]);
    const [talentProjects, setTalentProjects] = useState([]);
    const [talentEducations, setTalentEducations] = useState([]);
    const [talentSkills, setTalentSkills] = useState([]);
    const [talentCertifications, setTalentCertifications] = useState([]);

    useEffect(() => {
        // @ts-ignore
        getTalentExperiences(user._id).then((value) => {
            setTalentExperiences(value.data);
        });
        getTalentSkills(user._id).then((value) => setTalentSkills(value.data));
        getTalentProjects(user._id).then((value) =>
            setTalentProjects(value.data)
        );
        getTalentEducations(user._id).then((value) =>
            setTalentEducations(value.data)
        );
        getTalentCertifications(user._id).then((value) =>
            setTalentCertifications(value.data)
        );
    }, [refresh, user._id]);
    return (
        <>
            <TalentNav />
            <TalentContext.Provider value={{ refresh, setRefresh }}>
                <div className='talent-page'>
                    <div className='profile-info-card'>
                        <div className='p-img'>
                            <img src='src/assets/talents/no_image.png' alt='' />
                        </div>
                        <div className='info-con'>
                            <div className='info'>
                                <h2 className='text-xl font-bold'>
                                    {user.name}
                                </h2>
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
                                        <AddExperienceModal
                                            show={showexp}
                                            setShow={setShowexp}
                                        />
                                    }
                                    onClick={() => {
                                        setShowexp(true);
                                    }}
                                />
                                <hr />
                                <Showwcase>
                                    {talentExperiences.map((exp) => (
                                        <ExperienceShowwcaseCard
                                            experience={exp}
                                            key={exp?._id}
                                        />
                                    ))}
                                </Showwcase>
                            </div>
                            <div className='showcase'>
                                <AddNewComp
                                    title={'projects'}
                                    onClick={() => {
                                        setShowproj(true);
                                    }}
                                >
                                    <AddProjectModal
                                        show={showproj}
                                        setShow={setShowproj}
                                    />
                                </AddNewComp>
                                <hr />
                                <Showwcase>
                                    {talentProjects.map((project) => (
                                        <ProjectShowwcaseCard
                                            project={project}
                                        />
                                    ))}
                                </Showwcase>
                            </div>
                            <div className='showcase'>
                                {' '}
                                <AddNewComp
                                    title={'education'}
                                    onClick={() => {
                                        setShowedu(true);
                                    }}
                                >
                                    <AddEducationModal
                                        show={showedu}
                                        setShow={setShowedu}
                                    />
                                </AddNewComp>
                                <hr />
                                <Showwcase>
                                    {talentEducations.map((education) => (
                                        <EducationShowwcaseCard
                                            education={education}
                                        />
                                    ))}
                                </Showwcase>
                            </div>{' '}
                            <div className='showcase'>
                                {' '}
                                <AddNewComp
                                    title={'Skills'}
                                    onClick={() => {
                                        setShowskill(true);
                                    }}
                                >
                                    <AddSkillModal
                                        show={showskill}
                                        setShow={setShowskill}
                                    />
                                </AddNewComp>
                                <hr />
                                <Showwcase>
                                    {talentSkills.map((skill) => (
                                        <SkillShowwcaseCard
                                            skill={skill}
                                            key={skill._id}
                                        />
                                    ))}
                                </Showwcase>
                            </div>{' '}
                            <div className='showcase'>
                                {' '}
                                <AddNewComp
                                    title={'Certification'}
                                    onClick={() => {
                                        setShowcert(true);
                                    }}
                                >
                                    <AddCertificateModal
                                        show={showcert}
                                        setShow={setShowcert}
                                    />
                                </AddNewComp>
                                <hr />
                                <Showwcase>
                                    {talentCertifications.map((certs) => (
                                        <CertificationShowwcaseCard
                                            certificate={certs}
                                        />
                                    ))}
                                </Showwcase>
                            </div>
                        </div>
                        <div className='sub-info'></div>
                    </div>
                </div>
            </TalentContext.Provider>
        </>
    );
};

export default Talent;
