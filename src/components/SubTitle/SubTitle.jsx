import css from './SubTitle.module.css';

const SubTitle = ({ children }) => {
  return (
    <>
      <div className={css.text}>{children}</div>
    </>
  );
};

export default SubTitle;
