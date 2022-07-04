import React from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
};

const Input: React.FC<InputProps> = (props) => {
  return (
    <input {...props}/>
  )
};

export default Input;
