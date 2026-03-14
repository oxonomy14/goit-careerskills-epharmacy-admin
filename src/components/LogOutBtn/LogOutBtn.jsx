import css from './LogOutBtn.module.css';

const LogOutBtn = () => {
  return (
    <>
      <button type="button" className={css.logOut}>
        <svg className={css.logoutIcon}>
          <use href={`/icons/sprite.svg?v=${Date.now()}#icon-logout`} />
        </svg>
      </button>
    </>
  );
};

export default LogOutBtn;
