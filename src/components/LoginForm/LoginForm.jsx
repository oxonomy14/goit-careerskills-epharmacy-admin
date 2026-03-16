import css from './LoginForm.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../validation/loginSchema';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelector';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  //console.log('isLoggedIn:', isLoggedIn);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async data => {
    try {
      const result = await dispatch(loginUser(data)).unwrap();

      if (result.token) {
        toast.success('Successfully logged in!');
        navigate('/dashboard');
      }
    } catch (error) {
      toast.error(error?.message || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={css.inputEmail}>
        <input
          type="email"
          placeholder="Email"
          {...register('email')}
          className={css.inputForm}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div className={css.inputPassword}>
        <input
          type="password"
          placeholder="Password"
          {...register('password')}
          className={css.inputForm}
        />
        {errors.password && (
          <p className={css.errorMessage}>{errors.password.message}</p>
        )}
      </div>

      <button type="submit" className={css.btnForm}>
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
