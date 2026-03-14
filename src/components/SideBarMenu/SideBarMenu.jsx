import { NavLink } from 'react-router-dom';
import css from './SideBarMenu.module.css';
import clsx from 'clsx';

const SideBarMenu = () => {
  return (
    <>
      <nav className={css.nav}>
        <NavLink className={css.navBox} to="/dashboard">
          {({ isActive }) => (
            <svg className={clsx(css.navIcon, isActive && css.navIconActive)}>
              <use href={`/icons/sprite.svg?v=${Date.now()}#icon-dashboard`} />
            </svg>
          )}
        </NavLink>
        <NavLink className={css.navBox} to="/orders">
          {({ isActive }) => (
            <svg className={clsx(css.navIcon, isActive && css.navIconActive)}>
              <use href={`/icons/sprite.svg?v=${Date.now()}#icon-cart`} />
            </svg>
          )}
        </NavLink>
        <NavLink className={css.navBox} to="/products">
          {({ isActive }) => (
            <svg className={clsx(css.navIcon, isActive && css.navIconActive)}>
              <use href={`/icons/sprite.svg?v=${Date.now()}#icon-flaskFill`} />
            </svg>
          )}
        </NavLink>
        <NavLink className={css.navBox} to="/customers">
          {({ isActive }) => (
            <svg className={clsx(css.navIcon, isActive && css.navIconActive)}>
              <use
                href={`/icons/sprite.svg?v=${Date.now()}#icon-localPharmacy`}
              />
            </svg>
          )}
        </NavLink>
        <NavLink className={css.navBox} to="/suppliers">
          {({ isActive }) => (
            <svg className={clsx(css.navIcon, isActive && css.navIconActive)}>
              <use href={`/icons/sprite.svg?v=${Date.now()}#icon-users`} />
            </svg>
          )}
        </NavLink>
      </nav>
    </>
  );
};

export default SideBarMenu;
