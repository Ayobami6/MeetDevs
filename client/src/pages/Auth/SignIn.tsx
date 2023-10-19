import { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { talentAuth, employerAuth } from '../../actions/auth';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios, { AxiosError } from 'axios';

interface SignInCredential {
  email: string;
  password: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ErrorResponse {
  message: string;
}

interface SignInProps {
  handleIsMemberClick: () => void;
}

const SignIn = ({ handleIsMemberClick }: SignInProps) => {
    const [isTalent, setIsTalent] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    
    const handleSignIn = async () => {
        const credentials: SignInCredential = {
            email,
            password,
        };
        try {
            if (isTalent) {
                setLoading(true);
                const res = await axios.post(
                    'http://0.0.0.0:3000/talents/signin',
                    credentials
                );
                localStorage.setItem(
                    'talentProfile',
                    JSON.stringify({ ...res.data })
                );
                setLoading(false);
                enqueueSnackbar('Signin Sucessful!', { variant: 'success' });
                navigate('/talent');

                // send request to talent signin endpoint
            } else {
                setLoading(true);
                const res = await axios.post(
                    'http://0.0.0.0:3000/employers/login',
                    credentials
                );
                localStorage.setItem(
                    'talentProfile',
                    JSON.stringify({ ...res.data })
                );
                setLoading(false);
                enqueueSnackbar('Signin Sucessful!', { variant: 'success' });
                navigate('/employer');
            }
            // else to employer endpoint
        } catch (error) {
            const axiosError = error as AxiosError;
            if (axiosError.response) {
                const responseData = axiosError.response.data as ErrorResponse;
                setLoading(false);
                console.log(responseData.message);
                enqueueSnackbar(responseData.message, { variant: 'error' });
            }
        }
    };
    try {
      if (isTalent) {
        setLoading(true);
        dispatch(
          talentAuth(
            'talents/signin',
            credentials,
            navigate,
            enqueueSnackbar,
            setLoading,
          ),
        );
        localStorage.setItem('talentProfile', JSON.stringify({ ...res.data }));
        setLoading(false);
        enqueueSnackbar('Signin Sucessful!', { variant: 'success' });
        navigate('/talent');

                <input
                    type='text'
                    value={email}
                    className='border-1 text-2xl border-black-500 rounded-lg bg-gray-600 h-50 px-4 my-3 py-4 w-full justify-center'
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='text'
                    value={password}
                    className='border-1 text-2xl border-black-500 rounded-lg bg-gray-600 h-50 px-4 my-3 py-4 w-full justify-center'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className='w-full text-white bg-green-500 rounded-lg my-9 self-center text-lg font-bold p-4'
                    onClick={handleSignIn}
                >
                    {loading ? (
                        <p className='inline-block animate-spin mr-3 w-4 h-4 border-b-2 border-t-2 border-white-400 border-solid rounded-full'></p>
                    ) : (
                        ''
                    )}
                    Sign in as {isTalent ? 'Talent' : 'Employer'}
                </button>
                <h2 className='text-white my-12 text-2xl font-semibold'>
                    New to MeetDevs?{' '}
                    <a
                        className='inline text-2xl text-green-500 hover:cursor-pointer'
                        onClick={handleIsMemberClick}
                    >
                        Sign up now
                    </a>
                </h2>
            </div>
        </div>

        <input
          type='text'
          value={email}
          className='border-1 text-2xl border-black-500 rounded-lg bg-gray-600 h-50 px-4 my-3 py-4 w-full justify-center'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='text'
          value={password}
          className='border-1 text-2xl border-black-500 rounded-lg bg-gray-600 h-50 px-4 my-3 py-4 w-full justify-center'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className='w-full text-white bg-green-700 rounded-lg my-9 self-center text-lg font-bold p-4'
          onClick={handleSignIn}
        >
          {loading ? (
            <p className='inline-block animate-spin mr-3 w-4 h-4 border-b-2 border-t-2 border-white-400 border-solid rounded-full'></p>
          ) : (
            ''
          )}
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
