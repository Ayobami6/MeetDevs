import { ReactNode } from 'react';
import { FaPlus } from 'react-icons/fa';
import './AddNewComp.css';

interface AddNewCompProps {
  title: string;
  onClick?: (e?: React.MouseEvent) => void;
  className?: string;
  children?: ReactNode;
}

function AddNewComp({
  title,
  onClick,
  className,
  children,
}: AddNewCompProps): JSX.Element {
  return (
    <div className={'AddNewComp ' + className}>
      <h1 className={'title'}>{title}</h1>
      {children}

      <div className='add-exp-btn'>
        <button
          onClick={(e) => {
            if (onClick) {
              onClick(e);
            }
          }}
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
}

export default AddNewComp;
