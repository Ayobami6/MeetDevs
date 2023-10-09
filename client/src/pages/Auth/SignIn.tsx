import React, { useState } from 'react';

const SignIn = ({ handleIsMemberClick }) => {
    const [isTalent, setIsTalent] = useState(true);
    const handleSignIn = () => {
        if (isTalent) {
            // send request to talent signin endpoint
        }
        // else to employer endpoint
    };
    return (
        <div className='flex flex-col bg-opacity-75 bg-black rounded-lg w-[420px] p-8 shadow-xl mx-auto my-10'>
            <div className='mx-10'>
                <h1 className='text-white text-5xl font-bold my-10'>
                    Sign in as
                </h1>
                <div className='text-center my-6'>
                    <button
                        className='bg-green-500 rounded-lg font-bold hover:bg-green-700 text-white p-4'
                        onClick={() => setIsTalent(!isTalent)}
                    >
                        Employer
                    </button>
                    <button
                        className='bg-green-500 hover:bg-green-700 font-bold rounded-lg text-white mx-10 p-4'
                        onClick={() => setIsTalent(!isTalent)}
                    >
                        Talent
                    </button>
                </div>

                <input
                    type='text'
                    className='border-1 text-2xl border-black-500 rounded-lg bg-gray-600 h-50 px-4 my-3 py-4 w-full justify-center'
                    placeholder='Email'
                />
                <input
                    type='text'
                    className='border-1 text-2xl border-black-500 rounded-lg bg-gray-600 h-50 px-4 my-3 py-4 w-full justify-center'
                    placeholder='Password'
                />
                <button className='w-full text-white bg-green-700 rounded-lg my-9 self-center text-lg font-bold p-4'>
                    Sign in as {isTalent ? 'Talent' : 'Employer'}
                </button>
                <h2 className='text-black-600 font-bold my-12 text-2xl'>
                    New to MeetDevs?{' '}
                    <a
                        className='inline text-2xl text-white underline'
                        onClick={handleIsMemberClick}
                    >
                        Sign up now
                    </a>
                </h2>
            </div>
        </div>
    );
};

export default SignIn;
