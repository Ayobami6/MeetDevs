// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TalentNav from '../../components/Navbar/TalentNav';
import TalentOfferCard from './TalentOfferCard';
import Loading from '../../components/Loading/Loading';
import { getOffersTalent } from '../../actions/offer';

const TalentOffer = () => {
	const { id } = useParams<{ id: string | undefined }>();
	const dispatch = useDispatch();
	const offers = useSelector((state) => state.offers.talentOffers);
	const talent = JSON.parse(localStorage.getItem('talentProfile'));
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		dispatch(getOffersTalent(id, setLoading));
	}, [id, dispatch]);

	console.log(offers);

	return (
		<>
			<TalentNav />
			<div className='m-5 text-center text-3xl font-bold'>
				Available Employer Offers
			</div>
			{loading ? (
				<Loading />
			) : offers.length === 0 ? (
				<h1 className='text-xl mt-6 text-center font-semibold'>
					Currently you have no offer!
				</h1>
			) : (
				offers.map((offer) => (
					<TalentOfferCard key={offer._id} offer={offer} user={talent} />
				))
			)}
		</>
	);
};

export default TalentOffer;
