import css from './Header.module.css';
import { useLocation } from 'react-router-dom';

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
        <div className={css.logo}>
          <img className={css.logoImg} src="/img/logo.png" alt="image logo" />
        </div>
        <div className={css.titleWrapper}>
          <div className={css.title}>Medicine store</div>
          <div className={css.meta}>
            <div className={css.text}>{currentTitle}</div>
            <svg className={css.vLineIcon}>
              <use href={`/icons/sprite.svg?v=${Date.now()}#icon-vline`} />
            </svg>
            <div className={css.text}>vendor@gmail.com</div>
          </div>
        </div>
        <button type="button" className={css.logOut}>
          <svg className={css.logoutIcon}>
            <use href={`/icons/sprite.svg?v=${Date.now()}#icon-logout`} />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Header;
