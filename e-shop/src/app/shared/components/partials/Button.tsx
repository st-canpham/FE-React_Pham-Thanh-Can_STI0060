import React from 'react';

interface Props {
  children: string;
};

const Button: React.FC<Props> = ({children}) => {
  return (
    <button>{children}</button>
  )
};

export default Button;
