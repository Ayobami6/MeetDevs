import { Link, useNavigate } from 'react-router-dom';
import './TalentNav.css';

function TalentNav(): JSX.Element {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/auth');
  };
  return (
    <div className='talent-nav'>
      <div className='nav-con'>
        <img className={'rounded-full'} src='src/assets/logo.png' alt='' />
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
