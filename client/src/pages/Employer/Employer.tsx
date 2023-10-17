/* eslint-disable react-hooks/exhaustive-deps */
import TalentCard from '../../components/TalentCard';
import TalentNav from '../../components/Navbar/TalentNav';
import Search from '../../components/util/Search';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getTalents } from '../../actions/talent';

const Employer = () => {
	const { talents } = useSelector((state) => state.talents);
	const dispatch = useDispatch();
	const [loading, setLoading] = useState();

	useEffect(() => {
		dispatch(getTalents(setLoading));
	}, [dispatch]);
	console.log(talents);
	return (
		<>
			<TalentNav />

			<div className='bg-gray-100 min-h-screen p-5'>
				<div className='flex mx-10 justify-end'>
					<Search />
				</div>
				<h1 className='text-3xl font-bold mb-5'>Available Talents</h1>
				{!loading ? (
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
						{talents.map((talent) => (
							<TalentCard
								name={talent.name}
								key={talent._id}
								jobRole={talent.jobRole}
								location={talent.location}
								bio={talent.bio}
								github={talent.github}
								profileImg={talent.profileImg}
								id={talent._id}
							/>
						))}
					</div>
				) : (
					<Loading />
				)}
			</div>
		</>
	);
};

export default Employer;
