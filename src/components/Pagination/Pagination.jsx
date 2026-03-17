import css from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange, disabled }) => {
  if (totalPages <= 1) return null;

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className={css.pagination}>
      {pages.map(page => (
        <button
          key={page}
          className={`${css.dot} ${page === currentPage ? css.active : ''}`}
          onClick={() => onPageChange(page)}
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export default Pagination;
