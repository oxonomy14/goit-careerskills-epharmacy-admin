import css from './CustomersDataPage.module.css';
import UserNameFilter from '../../components/UserNameFilter/UserNameFilter';
import CustomersData from '../../components/CustomersData/CustomersData';
import Pagination from '../../components/Pagination/Pagination';
import { getCustomers } from '../../redux/customers/customersOperations';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectCustomers } from '../../redux/customers/customersSelector';
import { selectPage } from '../../redux/customers/customersSelector';

const CustomersDataPage = () => {
  const dispatch = useDispatch();
  const customers = useSelector(selectCustomers);
  const currentPage = useSelector(selectPage);

  const handlePageChange = page => {
    dispatch(getCustomers({ page }));
  };

  useEffect(() => {
    dispatch(getCustomers({ page: currentPage }));
  }, [dispatch, currentPage]);
  return (
    <>
      <div>
        <UserNameFilter />
      </div>
      <div className={css.customersData}>
        <CustomersData customers={customers} />
      </div>
      <div className={css.pagination}>
        <Pagination onPageChange={handlePageChange} />
      </div>
    </>
  );
};

export default CustomersDataPage;
