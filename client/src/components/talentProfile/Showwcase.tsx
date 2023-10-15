import React from 'react';

interface ShowwcaseProps {
  children: React.ReactNode;
}
const Showwcase: React.FC<ShowwcaseProps> = ({
  children,
}): React.ReactElement => {
  return <div className={'flex flex-col'}>{children}</div>;
};

export default Showwcase;
