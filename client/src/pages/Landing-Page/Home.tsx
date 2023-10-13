import Button from '../../components/Button/Button';
import './style.css';

const Home = () => {
    return (
        <div className='home'>
            <img src='src/assets/meetdev1.jpg' className='bg-img' />
            <div className='main'>
                <p>
                    Are you a talented developer looking for your next career
                    move? <br /> Or are you an employer in search of top-notch
                    tech talent? <br /> Look no further! Meet Devs is here to
                    revolutionize the way you connect.
                </p>
                <div className='home_button'>
                    <Button text='Get Started' size='lg' />
                </div>
            </div>
        </div>
    );
};

export default Home;
