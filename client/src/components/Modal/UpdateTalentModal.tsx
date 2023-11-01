// @ts-nocheck
import TButton from '../Button/TButton.tsx';
import { FaEdit } from 'react-icons/fa';
import './styles/UpdateTalentModal.css';
import { Dispatch, SetStateAction, useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { TalentContext } from '../../pages/Talent/Talent.tsx';
import { talentPatch } from '../../actions/talent.ts';
import FileBase from 'react-file-base64';

interface Talent {
  name: string;
  email: string;
  hashedPassword: string;
  jobRole: string;
  location?: string;
  hasOffer: boolean;
  rank: number;
  socials?: Array<string>;
  github?: string;
  linkedin?: string;
  x?: string;
  bio?: string;
  profileImg?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface UpdateTalentModalProps {
  showTalentEditModal: boolean;
  setShowTalentEditModal: Dispatch<SetStateAction<boolean>>;
  talent: Talent;
}

const UpdateTalentModal = ({
  showTalentEditModal,
  setShowTalentEditModal,
  talent,
}: UpdateTalentModalProps): JSX.Element => {
  const modalStyle = showTalentEditModal ? 'showModal' : '';
  const [img, setImg] = useState('');
  const tp = useContext(TalentContext);
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    if (!talent.profileImg) formData.append('profileImg', img);
    const data = Object.fromEntries(formData);
    await dispatch(talentPatch(talent._id, data));
    tp.setRefresh(!tp.refresh);
    const formElement = e.target as HTMLFormElement;
    formElement.reset();
    setShowTalentEditModal(false);
  };
  console.log(talent._id);
  return (
    <div className={'Modal ' + modalStyle}>
      <div className='content modal-content-container'>
        <div className={'header-11'}>
          <h1>Update Your Profile</h1>{' '}
          <TButton value={'X'} onClick={() => setShowTalentEditModal(false)} />
        </div>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className='form-control modal-content-container'>
            <label htmlFor='name'>Name</label>
            <input type='text' name={'name'} defaultValue={talent?.name} />
          </div>{' '}
          <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <input type='text' name={'email'} defaultValue={talent?.email} />
          </div>{' '}
          <div className='form-control'>
            <label htmlFor='jobRole'>Job Role</label>
            <input
              type='text'
              name={'jobRole'}
              defaultValue={talent?.jobRole}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='location'>Location</label>
            <input
              type='text'
              name={'location'}
              defaultValue={talent?.location}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='github'>Github Username</label>
            <input type='text' name={'github'} defaultValue={talent?.github} />
          </div>
          <div className='form-control'>
            <label htmlFor='linkedin'>LinkedIn Username</label>
            <input
              type='text'
              name={'linkedin'}
              defaultValue={talent?.linkedin}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='x'>X Username</label>
            <input type='text' name={'x'} defaultValue={talent?.x} />
          </div>
          <div className='form-control'>
            <label htmlFor='profileImg'>Upload your Profile Image</label>
            <FileBase
              type='file'
              multiple={false}
              onDone={({ base64 }) => setImg(base64)}
            />
          </div>
          <div>
            <img src={img} alt='Selected' className='w-5 h-4' />
          </div>
          <div className='form-control'>
            <label htmlFor={'bio'}>Bio</label>
            <textarea name={'bio'} defaultValue={talent.bio} />
          </div>
          {/*  add a save button */}
          <div className='form-control'>
            <TButton
              value={(<FaEdit />) as unknown as string}
              type={'submit'}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTalentModal;
