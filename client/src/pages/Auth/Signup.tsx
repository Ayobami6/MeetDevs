// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import axios, { AxiosError } from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { talentSignupAuth, employerSignupAuth } from '../../actions/auth';

interface ErrorResponse {
  message: string;
}

interface SignUpProps {
  handleIsMemberClick: () => void;
}

const Signup = ({ handleIsMemberClick }: SignUpProps) => {
  const [loading, setLoading] = useState(false);
  const [isTalent, setIsTalent] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hidePassword, setShowPassword] = useState(true);
  const [user, setuser] = useState(
    JSON.parse(localStorage.getItem('talentProfile') || '{}'),
  );
  const handleSignUp = async () => {
    const userData = {
      email,
      name,
      password,
    };
    try {
      if (password !== confirmPassword) {
        enqueueSnackbar('Password Does not Match', {
          variant: 'error',
        });
      }
      // send request to talent signin endpoint
      if (isTalent) {
        setLoading(true);
        await dispatch(
          talentSignupAuth(
            'talents/signup',
            userData,
            enqueueSnackbar,
            navigate,
            setLoading,
          ),
        );
        handleIsMemberClick();

        // else to employer endpoint
      } else {
        setLoading(true);
        await dispatch(
          employerSignupAuth(
            'employers/signup',
            userData,
            enqueueSnackbar,
            navigate,
            setLoading,
          ),
        );
        handleIsMemberClick();
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        const responseData = axiosError.response.data as ErrorResponse;
        setLoading(false);
        console.log(axiosError);
        enqueueSnackbar(responseData.message, { variant: 'error' });
        console.log(user);
      }
    }
  };

  return (
    <div className='flex flex-col bg-opacity-75 bg-black rounded-lg w-[420px] p-8 shadow-xl mx-auto my-10'>
      <div className='mx-10'>
        <h1 className='text-white text-5xl font-bold my-10'>Sign up as </h1>
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
          value={email}
          className='border-1 text-2xl border-black-500 rounded-lg bg-gray-600 h-50 px-4 my-3 py-4 w-full justify-center'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='text'
          value={name}
          className='border-1 text-2xl border-black-500 rounded-lg bg-gray-600 h-50 px-4 my-3 py-4 w-full justify-center'
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type={`${hidePassword ? 'password' : 'text'}`}
          value={password}
          className='border-1 text-2xl border-black-500 rounded-lg bg-gray-600 h-50 px-4 my-3 py-4 w-full justify-center'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type={`${hidePassword ? 'password' : 'text'}`}
          value={confirmPassword}
          className='border-1 text-2xl border-black-500 rounded-lg bg-gray-600 h-50 px-4 my-3 py-4 w-full justify-center'
          placeholder='Confirm Password'
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <p className='m-3'>
          <input
            type='checkbox'
            onChange={() => setShowPassword(!hidePassword)}
          />{' '}
          Show Password
        </p>
        <button
          className='w-full text-white bg-green-700 rounded-lg my-6 self-center text-lg font-bold p-4'
          onClick={handleSignUp}
        >
          {loading ? (
            <p className='inline-block animate-spin mr-3 w-4 h-4 border-b-2 border-t-2 border-white-400 border-solid rounded-full'></p>
          ) : (
            ''
          )}
          Sign up as {isTalent ? 'Talent' : 'Employer'}
        </button>
        <h2 className='text-black-600 font-bold my-12 text-2xl'>
          Already a Member?{' '}
          <a
            className='inline text-2xl text-white underline'
            onClick={handleIsMemberClick}
          >
            Sign in.
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Signup;
