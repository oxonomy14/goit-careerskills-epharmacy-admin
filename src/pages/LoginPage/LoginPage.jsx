import css from './LoginPage.module.css';
import Container from '../../components/Container/Container';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <Container>
      <section className={css.sectionLoginPage}>
        <div className={css.logo}>
          <img
            className={css.logoImage}
            src="/img/logo.png"
            alt="logo E-Pharmacy"
          />
          <p className={css.logoTitle}>E-Pharmacy</p>
        </div>
        <div className={css.Container}>
          <div className={css.textWrapper}>
            <img
              className={css.imagePill}
              src="/img/pill.png"
              alt="image pill"
            />
            <p className={css.text}>
              Your medication, delivered Say goodbye to all
              <span>your healthcare</span> worries with us
            </p>
          </div>
          <div className={css.loginForm}>
            <LoginForm />
          </div>
        </div>
        <div className={css.decorateWrapper}>
          <svg className={css.decorateIcon}>
            <use href={`/icons/sprite.svg#icon-elements`} />
          </svg>
        </div>
      </section>
    </Container>
  );
};

export default LoginPage;
