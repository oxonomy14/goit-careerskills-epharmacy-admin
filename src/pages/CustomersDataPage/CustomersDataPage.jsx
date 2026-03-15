import css from './CustomersDataPage.module.css';
import UserNameFilter from '../../components/UserNameFilter/UserNameFilter';
import CustomersData from '../../components/CustomersData/CustomersData';
import Pagination from '../../components/Pagination/Pagination';
import { getCustomers } from '../../redux/customers/customersOperations';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectCustomers } from '../../redux/customers/customersSelector';

const CustomersDataPage = () => {
  const dispatch = useDispatch();
  const customers = useSelector(selectCustomers);

  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);
  return (
    <>
      <div>
        <UserNameFilter />
      </div>
      <div>
        <CustomersData customers={customers} />
      </div>
      <div>
        <Pagination />
      </div>
    </>
  );
};

export default CustomersDataPage;
