import css from './AllOrdersPage.module.css';
import UserNameFilter from '../../components/UserNameFilter/UserNameFilter';
import AllOrders from '../../components/AllOrders/AllOrders';
import Pagination from '../../components/Pagination/Pagination';
import Loader from '../../components/Loader/Loader';
import { getOrders } from '../../redux/orders/ordersOperations';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  selectOrders,
  selectPage,
  selectTotalPages,
  selectFilter,
  selectOrdersLoading,
} from '../../redux/orders/ordersSelector';

import { setFilter, setPage } from '../../redux/orders/ordersSlice';

const AllOrdersPage = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const currentPage = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectOrdersLoading);

  const handlePageChange = page => {
    dispatch(setPage(page));
  };

  const handleFilter = name => {
    dispatch(setFilter(name));
    dispatch(setPage(1));
  };

  const handleClear = () => {
    dispatch(setFilter(''));
    dispatch(setPage(1));
  };

  useEffect(() => {
    dispatch(getOrders({ page: currentPage, name: filter }));
  }, [dispatch, currentPage, filter]);

  return (
    <>
      {isLoading && (!orders || orders.length === 0) && <Loader />}
      <div className={css.wrapper}>
        <div className={css.userNameFilter}>
          <UserNameFilter onFilter={handleFilter} onClear={handleClear} />
        </div>
        <div className={css.customersData}>
          <AllOrders orders={orders} />
        </div>
        <div className={css.pagination}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            disabled={isLoading}
          />
        </div>
      </div>
    </>
  );
};

export default AllOrdersPage;
