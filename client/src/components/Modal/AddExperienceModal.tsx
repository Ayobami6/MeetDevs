import './styles/AddExperienceModal.css';
import TButton from '../Button/TButton.tsx';
import { modalProps } from './interfaces/modaInterface.ts';
import { useRef } from 'react';
import { presentOrNot } from './utils/helpers.ts';

function AddExperienceModal({ show, setShow }: modalProps): JSX.Element {
  const endDateRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLInputElement>(null);

  const modalStyle = show ? 'showModal' : '';

  return (
    <div className={'Modal ' + modalStyle}>
      <div className={'content'}>
        <div className={'header-11'}>
          <h1>Add Position</h1>{' '}
          <TButton value={'X'} onClick={() => setShow(false)} />
        </div>
        <hr />
        <form>
          <div className='form-control'>
            <label htmlFor='title'>Title</label>
            <input type='text' name={'title'} />
          </div>
          <div className='form-control'>
            <label htmlFor='company'>Company</label>
            <input type='text' name={'company'} />
          </div>
          <div className={'flex start-end'}>
            <div className='form-control'>
              <label htmlFor='start'>Start</label>
              <input type='date' name={'start'} />
            </div>
            <div className='form-control'>
              <label htmlFor='end'>End</label>
              <input type='date' name={'end'} ref={endDateRef} />
              <h1 ref={textRef} style={{ display: 'none' }}>
                Present
              </h1>
            </div>
          </div>
          <form className='form-control flex gap-2'>
            <label htmlFor='current'>Current</label>
            <input
              type='checkbox'
              name={'current'}
              value='present'
              onChange={(e) => presentOrNot(e, endDateRef, textRef)}
            />
          </form>
          <div className='form-control'>
            <label htmlFor={'description'}>Description</label>
            <textarea name={'description'} />
          </div>

          <div className='form-control'>
            <label htmlFor={'description'}>Company</label>
            <input type='text' name={'description'} />
          </div>
          <div className='form-control'>
            <label htmlFor={'country'}>Country</label>
            <input type='text' name={'country'} />
          </div>

          <div className='form-control'>
            <label htmlFor={'city'}>City</label>
            <input type='text' name={'city'} />
          </div>

          {/*  add a save button */}
          <div className='form-control'>
            <TButton value={'Save'} type={'submit'} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddExperienceModal;
