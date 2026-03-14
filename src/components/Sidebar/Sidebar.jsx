import SideBarMenu from '../SideBarMenu/SideBarMenu';
import css from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <>
      <div className={css.wrapper}>
        <SideBarMenu />
      </div>
    </>
  );
};

export default Sidebar;
