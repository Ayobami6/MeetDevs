import { MouseEvent } from 'react';
import './TButton.css';

interface TButtonProp {
  onClick?: (e?: MouseEvent) => void;
  value: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

function TButton({
  onClick,
  value,
  className,
  type,
}: TButtonProp): JSX.Element {
  return (
    <button
      onClick={(e) => {
        onClick ? onClick(e) : null;
      }}
      className={'TButton ' + className}
      type={type}
    >
      {value}
    </button>
  );
}

export default TButton;
