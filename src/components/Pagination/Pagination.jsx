import { useSelector } from 'react-redux';
import css from './Pagination.module.css';

import {
  selectPage,
  selectTotalPages,
} from '../../redux/customers/customersSelector';

const Pagination = ({ onPageChange }) => {
  const currentPage = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

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
        />
      ))}
    </div>
  );
};

export default Pagination;
