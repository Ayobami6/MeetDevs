import React from 'react';
import { Link } from 'react-router-dom';

interface TalentProps {
	name: string;
	jobRole: string;
	bio: string;
	location: string;
	github: string;
	profileImg: string;
}

const TalentCard: React.FC<TalentProps> = ({
	name,
	jobRole,
	location,
	bio,
	github,
	profileImg,
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
					Github
				</a>
			</div>
			<Link to={'/auth'}>
				<button className='m-4 border-xl border-0 rounded-3xl w-[85px] h-[40px] bg-green-600'></button>
			</Link>
		</div>
	);
};

export default TalentCard;
