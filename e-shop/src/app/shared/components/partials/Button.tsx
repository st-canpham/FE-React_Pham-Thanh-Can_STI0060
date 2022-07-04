import React, { MouseEventHandler } from 'react';

interface Props {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode | string;
};

const Button: React.FC<Props> = ({className, onClick, children}) => {
  return (
    <button className={className} onClick={onClick}>{children}</button>
  )
};

export default Button;
