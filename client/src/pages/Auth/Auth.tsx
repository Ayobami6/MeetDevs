import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './Signup';
import Navbar from '../../components/Navbar/Navbar2';

const Auth: React.FC = () => {
    const [isSignup, setIsSignup] = useState(false);

    const handleIsMemberClick = () => {
        setIsSignup(!isSignup);
    };

    return (
        <>
            <div>
                {/* <div className="bg-[url('src/assets/auth3.jpg')] bg-img w-full bg-cover">
                    
                </div> */}
                <img
                    src='src/assets/auth3.jpg'
                    className='bg-img bg-cover w-fit'
                />
<<<<<<< HEAD
                <div className='text-left mx-3 py-4'>
                    <Navbar isAuth={true} />
=======
                <div className='text-7xl mx-5 py-4 text-green-700'>
                    MeetDevs
>>>>>>> 25d23b9 (feat: implement user toggle auth type)
                </div>
                {isSignup ? (
                    <SignUp handleIsMemberClick={handleIsMemberClick} />
                ) : (
                    <SignIn handleIsMemberClick={handleIsMemberClick} />
                )}
            </div>
            <div>Footer</div>
        </>
    );
};

export default Auth;
