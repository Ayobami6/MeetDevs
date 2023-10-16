import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import TalentNav from '../../components/Navbar/TalentNav';
import { getTalent } from '../../actions/talent';

const ShowTalent = () => {
	const talent = useSelector((state) => state.talents.talent);
	const dispatch = useDispatch();
	const [loading, setLoading] = useState();
	const { id } = useParams();

	useEffect(() => {
		dispatch(getTalent(setLoading, id));
	}, []);
	console.log(talent);

	return (
		<>
			<TalentNav />
			<div>
				{loading ? (
					<Loading />
				) : (
					<div>
						<h1>{talent.name}</h1>
						<h2>Id: {talent._id}</h2>
					</div>
				)}
			</div>
		</>
	);
};

export default ShowTalent;
