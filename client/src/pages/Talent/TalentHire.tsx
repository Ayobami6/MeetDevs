/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import Loading from '../../components/Loading/Loading';
import { offerCreate } from '../../actions/offer';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TalentNav from '../../components/Navbar/TalentNav';
import { FaLastfmSquare } from 'react-icons/fa';
import { getTalent } from '../../actions/talent';
import TalentDetails from '../../components/TalentDetails';

interface ProfileData {
  _id: string;
  name: string;
}

const TalentHire = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  type profile = null | { data: ProfileData };
  const employerProfileString = localStorage.getItem('employerProfile');
  const employer: profile = employerProfileString
    ? JSON.parse(employerProfileString)
    : null;

  const [employerId, setEmployerId] = useState(employer?.data._id);
  const talentUser = useSelector((state) => state.talents.talent);

  useEffect(() => {
    dispatch(getTalent(setLoading, id));
  }, [dispatch, id]);

  const handleSendOffer = () => {
    const offerData = {
      talentId: id,
      employerId,
      title,
      description,
    };
    dispatch(offerCreate(offerData, setLoading));
  };
  return (
    <>
      <TalentNav />
      {talentUser && (
        <div>
          <TalentDetails talent={talentUser} />
          <div className='flex justify-end m-9 '>
            <div className='flex flex-col border-2 border-green-500 shadow-sm w-[300px] rounded-xl px-2'>
              <div className='mt-4'>
                <h2 className='text-2xl text-center font-bold text-ellipsis'>
                  Send Offer
                </h2>

                <div className='mx-6 mt-4'>
                  <input
                    type='text'
                    value={title}
                    className='border-2 border-100 rounded-lg px-4 py-2 w-full'
                    placeholder='Job Title'
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <textarea
                    type='text'
                    value={description}
                    className='border-2 my-6 border-100 rounded-lg px-4 py-2 w-full'
                    placeholder='Description'
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <div className='flex justify-center'>
                    {loading ? (
                      <div className='w-10 h-10 border-t-2 border-green-500 border-solid rounded-full animate-spin'></div>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className='flex justify-center'>
                    {talentUser.hasOffer ? (
                      <button className='w-[150px] h-[40px] p-2 bg-green-300 m-8 rounded-full text-gray-100 font-bold'>
                        Send
                      </button>
                    ) : (
                      <button
                        className='w-[150px] h-[40px] p-2 bg-green-600 hover:bg-green-700 m-8 rounded-full text-black font-bold'
                        onClick={handleSendOffer}
                      >
                        Send
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TalentHire;
