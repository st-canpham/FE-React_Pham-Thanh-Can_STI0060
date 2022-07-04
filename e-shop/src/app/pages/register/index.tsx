import React, { useState, useRef } from 'react';
const Register: React.FC = () => {

  const [state, setState] = useState({
    email: '',
    password: '',
    rePassword: ''
  });
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const rePasswordInput = useRef<HTMLInputElement>(null);

  const hanldeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!emailRegex.test(state.email)) {
      emailInput.current && emailInput.current.classList.add('invalid');
    }
    else if(state.password.length < 8) {
      passwordInput.current && passwordInput.current.classList.add('invalid');
    }
    else if(state.password !== state.rePassword) {
      rePasswordInput.current && rePasswordInput.current.classList.add('invalid');
    } 
    else {
      e.currentTarget.submit();
    }
  };

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement>, 
    inputElement: React.RefObject<HTMLInputElement>, 
    stateChange: string
  ) => {
    inputElement.current && inputElement.current.classList.remove('invalid');
    setState({...state, [stateChange]: e.target.value});
  }

  return (
    <div className="container">
      <div className="register">
        <form action="/" className="form-register" onSubmit={(e) => hanldeSubmit(e)}>
          <input 
            className="form-control" 
            type="text" 
            placeholder="Email" 
            value={state.email}
            onChange={(e) => handleChangeInput(e, emailInput, 'email')}
            ref={emailInput}
          />
          <input 
            className="form-control" 
            type="password" 
            placeholder="Password"
            value={state.password}
            onChange={(e) => handleChangeInput(e, passwordInput, 'password')}
            ref={passwordInput}
          />
          <input 
            className="form-control" 
            type="password" 
            placeholder="Retype password"
            value={state.rePassword}
            ref={rePasswordInput}
            onChange={(e) => handleChangeInput(e, rePasswordInput, 'rePassword')}
          />
          <button className="btn btn-primary btn-register" type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  )
};

export default Register;
