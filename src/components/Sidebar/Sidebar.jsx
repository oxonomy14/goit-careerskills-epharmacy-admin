import css from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <>
      <div className={css.wrapper}>
        <nav className={css.nav}>
          <div className={css.navBox}>
            <svg className={css.navIcon}>
              <use href={`/icons/sprite.svg?v=${Date.now()}#icon-dashboard`} />
            </svg>
          </div>
          <div className={css.navBox}>
            <svg className={css.navIcon}>
              <use href={`/icons/sprite.svg?v=${Date.now()}#icon-cart`} />
            </svg>
          </div>
          <div className={css.navBox}>
            <svg className={css.navIcon}>
              <use href={`/icons/sprite.svg?v=${Date.now()}#icon-flaskFill`} />
            </svg>
          </div>
          <div className={css.navBox}>
            <svg className={css.navIcon}>
              <use
                href={`/icons/sprite.svg?v=${Date.now()}#icon-localPharmacy`}
              />
            </svg>
          </div>
          <div className={css.navBox}>
            <svg className={css.navIcon}>
              <use href={`/icons/sprite.svg?v=${Date.now()}#icon-users`} />
            </svg>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
