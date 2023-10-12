import React from 'react';

interface TalentProps {
    name: string;
    jobRole: string;
    bio: string;
    location: string;
    github: string;    
    profileImg: string;
}

const TalentCard: React.FC<TalentProps> = ({ name, jobRole, location, bio, github, profileImg }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={profileImg} alt={name} className="w-full h-56 object-cover object-center" />
            <div className="p-6">
                <h2 className="text-2xl font-bold">{name}</h2>
                <h3 className="text-xl text-gray-500">{jobRole}</h3>
                <p className="text-gray-600">{location}</p>
                <p className="text-gray-600">{bio}</p>
                <a href={github} className="text-blue-500 hover:underline">Github</a>
            </div>
        </div>
    );
};

export default TalentCard;