import './styles/AddExperienceModal.css';
import TButton from '../Button/TButton.tsx';
import React, { useRef } from 'react';

function AddExperienceModal(): JSX.Element {
  const endDateRef = useRef<HTMLInputElement>(null);

  function presentOrNot(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      if (endDateRef.current) endDateRef.current.style.display = 'none';
    } else {
      if (endDateRef.current) endDateRef.current.style.display = 'block';
    }
  }

  return (
    <div className={'AddExperienceModal'}>
      <div className={'content'}>
        <h1>Add Position</h1>
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
            </div>
          </div>
          <form className='form-control flex gap-2'>
            <label htmlFor='current'>Current</label>
            <input
              type='checkbox'
              name={'current'}
              value='present'
              onClick={presentOrNot}
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
