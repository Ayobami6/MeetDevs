import React from 'react';

const SignIn = ({ handleIsMemberClick }) => {
    return (
        <div className='flex flex-col bg-opacity-75 bg-black rounded-lg w-[420px] p-8 shadow-xl mx-auto my-10'>
            <div className='mx-10'>
                <h1 className='text-white text-5xl font-bold my-10'>Sign In</h1>
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
                    Sign in
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
