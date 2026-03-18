import css from './Header.module.css';
import { useLocation } from 'react-router-dom';
import Title from '../Title/Title';
import SubTitle from '../SubTitle/SubTitle';
import Logo from '../Logo/Logo';
import LogOutBtn from '../LogOutBtn/LogOutBtn';
import { selectUser } from '../../redux/auth/authSelector.js';
import { useSelector } from 'react-redux';

const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  const user = useSelector(selectUser);

  const pageTitles = {
    '/dashboard': 'Dashboard',
    '/orders': 'Orders',
    '/products': 'Products',
    '/customers': 'Customers',
  };

  const currentTitle = pageTitles[location.pathname] || 'Undefind';

  return (
    <>
      <div className={css.container}>
        <button type="button" className={css.burgerBtn}>
          <svg className={css.burgerIcon}>
            <use href={`/icons/sprite.svg?v=${Date.now()}#icon-burger`} />
          </svg>
        </button>
        <div className={css.logo}>
          <Logo />
        </div>
        <div className={css.titleWrapper}>
          <Title>Medicine store</Title>

          <div className={css.meta}>
            <SubTitle>{currentTitle}</SubTitle>

            <svg className={css.vLineIcon}>
              <use href={`/icons/sprite.svg?v=${Date.now()}#icon-vline`} />
            </svg>
            <SubTitle>{user.email}</SubTitle>
          </div>
        </div>
        <div className={css.logoutBtn}>
          <LogOutBtn />
        </div>
      </div>
    </>
  );
};

export default Header;
