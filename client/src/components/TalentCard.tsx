import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

interface TalentProps {
  name: string;
  jobRole: string;
  bio: string;
  location: string;
  github: string;
  profileImg: string;
  id: string;
  rank: number;
}

const TalentCard: React.FC<TalentProps> = ({
  name,
  jobRole,
  location,
  bio,
  github,
  profileImg,
  id,
  rank,
}) => {
  return (
    <div className='shadow-3xl border-[1px] border-green-600 rounded-lg overflow-hidden'>
      <div className='m-5 h-[170px] rounded-full flex justify-between'>
        <div className='w-[160px] h-[160px]'>
          <img
            src={!profileImg ? 'src/assets/talents/no_image.png' : profileImg}
            alt={name}
            className='w-full h-full object-cover rounded-full'
          />
        </div>

        <p className='text-2xl border-[1px] border-green-600 rounded-3xl shadow-lg h-[70px] p-3 font-mono'>
          Percentile
          <br />
          <span className=''>{rank}%</span>
        </p>
        {/* <div className='border-[1px] border-green-400 w-12 h-12 rounded-full'>
                    <p className='text-center p-2 text-xl'>{rank}</p>
                </div> */}
      </div>

      <div className='p-6'>
        <h2 className='text-2xl font-bold'>{name}</h2>
        <h3 className='text-xl text-gray-500'>{jobRole}</h3>
        <p className='text-gray-600'>{location}</p>
        <p className='text-gray-600'>{bio}</p>
        <div className='flex justify-start'>
          <a
            href={`https://github.com/${github}`}
            className='text-blue-500 hover:underline'
            target='blank'
          >
            <AiFillGithub className='text-2xl my-2 mr-2 text-green-400' />
          </a>
          <a
            href={`https://github.com/${github}`}
            className='text-blue-500 hover:underline'
            target='blank'
          >
            <BsLinkedin className='text-2xl my-2 text-green-400' />
          </a>
        </div>
      </div>
      <div className='flex justify-between'>
        <Link to={`/showdev/${id}`}>
          <button className='m-4 border-xl border-2 shadow-xl rounded-3xl w-[85px] text-white text-sm h-[36px] bg-green-600 hover:bg-green-800'>
            Check Out
          </button>
        </Link>
        <Link to={`/hiredev/${id}`}>
          <button className='m-4 border-xl border-2 shadow-xl rounded-3xl w-[85px] text-white text-sm h-[36px] bg-green-600 hover:bg-green-800'>
            Hire
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TalentCard;
