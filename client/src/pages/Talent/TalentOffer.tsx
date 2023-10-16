import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TalentNav from '../../components/Navbar/TalentNav';
import TalentOfferCard from './TalentOfferCard';
import Loading from '../../components/Loading/Loading';
import { getOffersTalent } from '../../actions/offer';

const TalentOffer = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const offers = useSelector((state) => state.offers.talentOffers.offers);
	const [loading, setLoading] = useState(false);
	console.log(id);
	console.log(offers);

	useEffect(() => {
		dispatch(getOffersTalent(id, setLoading));
	}, [id, dispatch]);

	return (
		<>
			<TalentNav />
			<div className='m-5 text-center text-3xl'>
				Available Talents Offers
			</div>
			{loading ? (
				<Loading />
			) : (
				offers.map((offer) => (
					<TalentOfferCard key={offer._id} offer={offer} />
				))
			)}
		</>
	);
};

export default TalentOffer;
