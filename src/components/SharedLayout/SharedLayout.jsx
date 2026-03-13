import css from './SharedLayout.module.css';
import { Outlet } from 'react-router-dom';
import Container from '../../components/Container/Container';

const SharedLayout = () => {
  return (
    <Container>
      <div className={css.layout}>
        <header className={css.header}>Header</header>

        <div className={css.body}>
          <aside className={css.sidebar}>Sidebar</aside>

          <main className={css.main}>
            <Outlet />
          </main>
        </div>
      </div>
    </Container>
  );
};

export default SharedLayout;
