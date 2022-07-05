import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useGlobalContext from '../../shared/context';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const {setUser} = useGlobalContext();
  const [state, setState] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const passwortConfirmInput = useRef<HTMLInputElement>(null);

  const hanldeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let flag = true;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!emailRegex.test(state.email)) {
      emailInput.current?.classList.add('invalid');
      flag = false;
    }
    if(state.password.length < 8) {
      passwordInput.current?.classList.add('invalid');
      flag = false;
    }
    if(state.password !== state.passwordConfirm) {
      passwortConfirmInput.current?.classList.add('invalid');
      flag = false; 
    } 
    if(flag) {
      setUser(state.email);
      navigate('/');
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.classList.remove('invalid');
    setState({...state, [e.target.name]: e.target.value});
  }

  return (
    <div className="container">
      <div className="register">
        <form className="form-register" onSubmit={(e) => hanldeSubmit(e)}>
          <input 
            className="form-control" 
            type="text" 
            placeholder="Email" 
            name="email"
            value={state.email}
            onChange={(e) => handleChangeInput(e)}
            ref={emailInput}
          />
          <input 
            className="form-control" 
            type="password" 
            placeholder="Password"
            name="password"
            value={state.password}
            onChange={(e) => handleChangeInput(e)}
            ref={passwordInput}
          />
          <input 
            className="form-control" 
            type="password" 
            placeholder="Retype password"
            name="passwordConfirm"
            value={state.passwordConfirm}
            ref={passwortConfirmInput}
            onChange={(e) => handleChangeInput(e)}
          />
          <button className="btn btn-primary btn-register" type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  )
};

export default Register;
