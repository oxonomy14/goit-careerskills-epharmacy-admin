import css from './ModalMenu.module.css';
import { Link } from 'react-router-dom';

import clsx from 'clsx';
import SideBarMenu from '../SideBarMenu/SideBarMenu';
import LogOutBtn from '../LogOutBtn/LogOutBtn';

const ModalMenu = ({ isMenuOpen, closeMenu }) => {
  if (!isMenuOpen) return null;

  return (
    <div className={css.backdrop} onClick={closeMenu}>
      <div className={css.menu} onClick={e => e.stopPropagation()}>
        <button className={css.closeBtn} onClick={closeMenu}>
          <svg className={css.iconX}>
            <use href="/icons/sprite.svg#icon-x" />
          </svg>
        </button>

        <nav className={css.navBar}>
          <SideBarMenu />
        </nav>
        <LogOutBtn />
      </div>
    </div>
  );
};

export default ModalMenu;
