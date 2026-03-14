import { Link } from 'react-router-dom';
import css from './Logo.module.css';

const Logo = () => {
  return (
    <>
      <Link to="/">
        <img className={css.logoImg} src="/img/logo.png" alt="image logo" />
      </Link>
    </>
  );
};

export default Logo;
