// @ts-nocheck
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import './TalentNav.css';
import ProfileDropDownMenu from '../DropDown/DropDown';

function TalentNav(): JSX.Element {
  const [openProfile, setOpenProfile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  let profile;
  if (!path.includes('talent')) {
    profile = JSON.parse(localStorage.getItem('employerProfile'));
  } else {
    profile = JSON.parse(localStorage.getItem('talentProfile'));
  }

  const [user, setUser] = useState(profile);

  const logout = () => {
    localStorage.clear();
    navigate('/auth');
  };

  // side effect on refresh when token expires
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
        <img className={'rounded-full'} src={'/assets/logo.png'} alt='' />
        <nav className='nav-items-con' onClick={() => setOpenProfile(true)}>
          {user.data ? (
            ''
          ) : (
            <Link to={`/talent/getranked/${user.talent._id}`}>Get Ranked</Link>
          )}
          <Link to={'#'}>Messages</Link>
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
          src={
            user.talent
              ? user.talent.profileImg
                ? user.talent.profileImg
                : '/assets/talents/no_image.png'
              : '/assets/talents/no_image.png'
          }
          alt='fine girl'
          className='w-[50px] h-[50px] rounded-full'
          onClick={() => setOpenProfile((prev) => !prev)}
        />
        <p>{user.data ? user.data.name : user.talent.name}</p>
      </Link>
      {openProfile && <ProfileDropDownMenu logout={logout} />}
    </div>
  );
}

export default TalentNav;
