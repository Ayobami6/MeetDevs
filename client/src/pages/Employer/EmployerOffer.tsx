// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TalentNav from '../../components/Navbar/TalentNav';
import TalentOfferCard from '../Talent/TalentOfferCard';
import { getOffersEmployer } from '../../actions/offer';
import Loading from '../../components/Loading/Loading';

interface ProfileData {
	_id: string;
	name: string;
}

const EmployerOffer = () => {
	type profile = null | { data: ProfileData };
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const employerProfileString = localStorage.getItem('employerProfile');
	const employer: profile = employerProfileString
		? JSON.parse(employerProfileString)
		: null;

	const offers = useSelector((state) => state.offers.employerOffers);
	const id = employer?.data?._id;

	useEffect(() => {
		dispatch(getOffersEmployer(id, setLoading));
	}, [id, dispatch]);
	return (
		<>
			<TalentNav />
			<div className='m-5 text-center text-3xl font-bold'>
				Available Talent Offers
			</div>
			{loading ? (
				<Loading />
			) : offers.length === 0 ? (
				<h1 className='text-xl mt-6 text-center font-semibold'>
					Currently you have no offer!
				</h1>
			) : (
				offers.map((offer) => (
					<TalentOfferCard key={offer._id} offer={offer} user={employer} />
				))
			)}
		</>
	);
};

export default EmployerOffer;
