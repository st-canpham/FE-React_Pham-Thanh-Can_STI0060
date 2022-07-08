import { useForm, SubmitHandler  } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from './register.actions';

const Register: React.FC = () => {
  type Inputs = {
    email: string,
    password: string,
    passwordConfirm: string
  };

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const password = watch('password');
  const onSubmit = (data: Inputs) => {
    dispatch(setUser(data.email));
    navigate('/');
  }

  return (
    <div className="container">
      <div className="register">
        <form className="form-register" onSubmit={handleSubmit(onSubmit)}>
          <input 
            className={`form-control ${errors.email && 'invalid'}`} 
            type="text" 
            placeholder="Email" 
            {...register('email', {required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/})}
          />
          <input 
            className={`form-control ${errors.password && 'invalid'}`} 
            type="password" 
            placeholder="Password"
            {...register('password', {required: true, minLength: 8})}
          />
          <input 
            className={`form-control ${errors.passwordConfirm && 'invalid'}`} 
            type="password" 
            placeholder="Retype password"
            {...register('passwordConfirm', {validate : value => value === password})}
          />
          <button className="btn btn-primary btn-register" type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  )
};

export default Register;
