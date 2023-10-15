import React from 'react';
import { useParams } from 'react-router-dom';

const TalentOffer = () => {
	const { id } = useParams();
	console.log(id);
	return <div>TalentOffer</div>;
};

export default TalentOffer;
