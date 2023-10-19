import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';

interface TalentProps {
    name: string;
    jobRole: string;
    bio: string;
    location: string;
    github: string;
    profileImg: string;
    id: string;
}

const TalentCard: React.FC<TalentProps> = ({
    name,
    jobRole,
    location,
    bio,
    github,
    profileImg,
    id,
}) => {
    return (
        <div className='bg-white shadow-md rounded-lg overflow-hidden'>
            <div className='m-5 h-[170px] rounded-full flex justify-center'>
                <img
                    src={
                        !profileImg
                            ? 'src/assets/talents/no_image.png'
                            : profileImg
                    }
                    alt={name}
                    className='w-25'
                />
            </div>

            <div className='p-6'>
                <h2 className='text-2xl font-bold'>{name}</h2>
                <h3 className='text-xl text-gray-500'>{jobRole}</h3>
                <p className='text-gray-600'>{location}</p>
                <p className='text-gray-600'>{bio}</p>
                <a href={github} className='text-blue-500 hover:underline'>
                    <AiFillGithub className='text-xl text-green-400' /> Github
                </a>
            </div>
            <div className='flex justify-between'>
                <Link to={`/showdev/${id}`}>
                    <button className='m-4 border-xl border-2 rounded-3xl w-[85px] text-white text-sm h-[36px] bg-green-600 hover:bg-green-800'>
                        Check Out
                    </button>
                </Link>
                <Link to={`/hiredev/${id}`}>
                    <button className='m-4 border-xl border-2 rounded-3xl w-[85px] text-white text-sm h-[36px] bg-green-600 hover:bg-green-800'>
                        Hire
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default TalentCard;
