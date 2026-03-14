import css from './Header.module.css';
import { useLocation } from 'react-router-dom';
import Title from '../Title/Title';
import SubTitle from '../SubTitle/SubTitle';
import Logo from '../Logo/Logo';
import LogOutBtn from '../LogOutBtn/LogOutBtn';

const Header = () => {
  const location = useLocation();
  const path = location.pathname;

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
        <Logo />
        <div className={css.titleWrapper}>
          <Title>Medicine store</Title>

          <div className={css.meta}>
            <SubTitle>{currentTitle}</SubTitle>

            <svg className={css.vLineIcon}>
              <use href={`/icons/sprite.svg?v=${Date.now()}#icon-vline`} />
            </svg>
            <SubTitle>vendor@gmail.com</SubTitle>
          </div>
        </div>
        <LogOutBtn />
      </div>
    </>
  );
};

export default Header;
