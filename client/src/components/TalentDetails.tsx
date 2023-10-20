import React, { useEffect, useState } from 'react';
import { getExperiencesTalent } from '../actions/experience';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Showwcase from '../components/talentProfile/Showwcase.tsx';
import {
    CertificationShowwcaseCard,
    EducationShowwcaseCard,
    ExperienceShowwcaseCard,
    ProjectShowwcaseCard,
    SkillShowwcaseCard,
} from '../components/talentProfile/ShowwcaseCard.tsx';

const TalentDetails = ({ talent }) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState();
    const experiences = useSelector((state) => state.talentData.experiences);

    useEffect(() => {
        dispatch(getExperiencesTalent(id, setLoading));
    }, []);

    console.log(experiences);

    return (
        <>
            {!loading && (
                <div className='m-10 mx-[100px]'>
                    <div>
                        <div className='md:flex flex-row'>
                            <div className='w-[170px] h-[170px] border-gray rounded-full flex justify-center'>
                                <img
                                    src={
                                        !talent.profileImg
                                            ? '/assets/talents/no_image.png'
                                            : talent.profileImg
                                    }
                                    alt={talent.name}
                                    className='object-cover'
                                />
                            </div>
                            <div className='md:basis-1/2 my-20 mx-5 '>
                                <h1 className='text-3xl font-bold'>
                                    {talent.name}
                                </h1>
                                <h2>Id: {talent._id}</h2>
                            </div>
                        </div>
                        <div className='mx-5'>
                            <p className='text-gray-400'>Socials</p>
                            <p>Bio</p>
                        </div>
                    </div>

                    <hr className='my-5' />
                    <div>
                        <h2 className='text-3xl font-semibold'>Experience</h2>
                        <div className='my-5'>
                            <Showwcase>
                                {experiences.map((exp) => (
                                    <ExperienceShowwcaseCard
                                        experience={exp}
                                        key={exp?._id}
                                        showEdit={false}
                                    />
                                ))}
                            </Showwcase>
                        </div>
                    </div>

                    <hr className='my-5' />

                    <div>
                        <h2 className='text-3xl font-semibold'>Education</h2>
                        <div className='my-5'>
                            <h3>All Education</h3>
                        </div>
                    </div>

                    <hr className='my-5' />

                    <div>
                        <h2 className='text-3xl font-semibold'>Project</h2>
                        <div className='my-5'>
                            <h3>All Projects</h3>
                        </div>
                    </div>

                    <hr className='my-5' />

                    <div>
                        <h2 className='text-3xl font-semibold'>Skills</h2>
                        <div className='my-5'>
                            <h3>All Skills</h3>
                        </div>
                    </div>
                    <hr className='my-5' />

                    <div>
                        <h2 className='text-3xl font-semibold'>
                            Certification
                        </h2>
                        <div className='my-5'>
                            <h3>All Certifications</h3>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TalentDetails;
