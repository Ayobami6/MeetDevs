/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import './TalentNav.css';

function TalentNav(): JSX.Element {
	const navigate = useNavigate();
	const talentProfile = JSON.parse(localStorage.getItem('talentProfile'));
	const employerProfile = JSON.parse(localStorage.getItem('employerProfile'));
	const [user, setUser] = useState(talentProfile || employerProfile || null);
	const location = useLocation();
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
					src='src/assets/logo.png'
					alt=''
				/>
				<nav className='nav-items-con'>
					<Link to={'#'}>Get Ranked</Link>
					<Link to={'#'}>Messages</Link>
					<Link to={'#'}>Offers</Link>
				</nav>
			</div>

			<Link to={'#'}>
				<img
					src='src/assets/talents/no_image.png'
					alt='fine girl'
					className='w-20 rounded-full'
				/>
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
