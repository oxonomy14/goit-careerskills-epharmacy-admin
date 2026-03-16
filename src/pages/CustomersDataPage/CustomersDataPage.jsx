import css from './CustomersDataPage.module.css';
import UserNameFilter from '../../components/UserNameFilter/UserNameFilter';
import CustomersData from '../../components/CustomersData/CustomersData';
import Pagination from '../../components/Pagination/Pagination';
import { getCustomers } from '../../redux/customers/customersOperations';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  selectCustomers,
  selectPage,
  selectFilter,
} from '../../redux/customers/customersSelector';
import { useState } from 'react';
import { setFilter } from '../../redux/customers/customersSlice';

const CustomersDataPage = () => {
  const dispatch = useDispatch();
  const customers = useSelector(selectCustomers);
  const currentPage = useSelector(selectPage);
  const filter = useSelector(selectFilter);

  const handlePageChange = page => {
    dispatch(getCustomers({ page, name: filter }));
  };

  const handleFilter = name => {
    dispatch(setFilter(name));

    dispatch(
      getCustomers({
        page: 1,
        name,
      }),
    );
  };

  const handleClear = () => {
    dispatch(setFilter(''));

    dispatch(
      getCustomers({
        page: 1,
        name: '',
      }),
    );
  };

  useEffect(() => {
    dispatch(getCustomers({ page: currentPage, name: filter }));
  }, [dispatch, currentPage, filter]);

  return (
    <>
      <div className={css.wrapper}>
        <div className={css.userNameFilter}>
          <UserNameFilter onFilter={handleFilter} onClear={handleClear} />
        </div>
        <div className={css.customersData}>
          <CustomersData customers={customers} />
        </div>
        <div className={css.pagination}>
          <Pagination onPageChange={handlePageChange} />
        </div>
      </div>
    </>
  );
};

export default CustomersDataPage;
