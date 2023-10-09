import Navbar from '../../components/Navbar/Navbar';
import LandingPage from './index';
import Footer from '../../components/Footer/Footer';
import './Landing.css';

function Landing() {
    return (
        <>
            <div className='landing'>
                <Navbar />
                <LandingPage />
                <Footer />
            </div>
        </>
    );
}

export default Landing;
