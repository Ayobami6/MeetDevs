import React from 'react';
import { useParams } from 'react-router-dom';
import TalentNav from '../../components/Navbar/TalentNav';

const TalentOffer = () => {
	const { id } = useParams();
	console.log(id);
	return (
		<>
			<TalentNav />
		</>
	);
};

export default TalentOffer;
