import css from './LogOutBtn.module.css';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/auth/authOperations';
import { persistor } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const LogOutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logoutUser());
    toast.success('Successfully log out!');
    persistor.purge();
    navigate('/');
  };
  return (
    <>
      <button type="button" className={css.logOut} onClick={handleLogout}>
        <svg className={css.logoutIcon}>
          <use href={`/icons/sprite.svg?v=${Date.now()}#icon-logout`} />
        </svg>
      </button>
    </>
  );
};

export default LogOutBtn;
