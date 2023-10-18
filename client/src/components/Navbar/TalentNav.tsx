/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import './TalentNav.css';

function TalentNav(): JSX.Element {
	const navigate = useNavigate();
	const location = useLocation();
	const path = location.pathname;
	let profile;
<<<<<<< HEAD
<<<<<<< HEAD
	if (!path.includes('talent')) {
=======
	if (path === '/employer') {
>>>>>>> ead260b (feat: add more page routes&adjust navbar)
=======
	if (path !== '/talent') {
>>>>>>> b07ec96 (bug: fix assets images not loading in details page)
		profile = JSON.parse(localStorage.getItem('employerProfile'));
	} else {
		profile = JSON.parse(localStorage.getItem('talentProfile'));
	}

	const [user, setUser] = useState(profile);

	const logout = () => {
		localStorage.clear();
		navigate('/auth');
	};

	// side effect on refresh when token expire
	useEffect(() => {
		const token = user?.token;
		if (token) {
			const decodedToken = jwtDecode(token);
			if (decodedToken.exp * 1000 < new Date().getTime()) logout();
		}
	}, [location]);
	return (
		<div className='talent-nav'>
			<div className='nav-con'>
				<img
					className={'rounded-full'}
					src={'/assets/logo.png'}
					alt=''
				/>
				<nav className='nav-items-con'>
					{user.data ? (
						''
					) : (
						<Link to={`/talent/getranked/${user.talent._id}`}>
							Get Ranked
						</Link>
					)}
					<Link to={'#'}>Messages</Link>
					{/* we'll have a condition for this, if user is talent use talent else employer id */}
					<Link
						to={
							user.talent
								? `/offers/talent/${user.talent._id}`
								: `/offers/employer/${user.data._id}`
						}
					>
						Offers
					</Link>
				</nav>
			</div>

			<Link to={'#'}>
				<img
					src='/assets/talents/no_image.png'
					alt='fine girl'
					className='w-20 rounded-full'
				/>
				<p>{user.data ? user.data.name : user.talent.name}</p>
			</Link>
			<button
				className='border-white-300 bg-green-600 hover:bg-green-300 rounded-lg border-2 w-36 h-10'
				onClick={logout}
			>
				Log out
			</button>
		</div>
	);
}

export default TalentNav;
