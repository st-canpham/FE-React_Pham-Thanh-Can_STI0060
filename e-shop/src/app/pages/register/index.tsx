import React, { useState, useRef } from 'react';
import Button from '../../shared/components/partials/Button';
const Register: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailInput = useRef(null);

  const hanldeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  };

  return (
    <div className="container">
      <div className="register">
        <form className="form-register" onSubmit={(e) => hanldeSubmit(e)}>
          <input 
            className="form-control" 
            type="text" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={emailInput}
          />
          <input 
            className="form-control" 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input className="form-control" type="password" placeholder="Retype password"/>
          <button className="btn btn-primary btn-register" type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  )
};

export default Register;
