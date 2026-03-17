import Statistics from '../../components/Statistics/Statistics';
import RecentCustomers from '../../components/RecentCustomers/RecentCustomers';
import IncomeExpenses from '../../components/IncomeExpenses/IncomeExpenses';
import Loader from '../../components/Loader/Loader';
import css from './DashboardPage.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDashboard } from '../../redux/dashboard/dashboardOperations';
import { getCustomers } from '../../redux/customers/customersOperations';
import { useSelector } from 'react-redux';
import {
  selectStatistics,
  selectLastCustomers,
  selectTransactions,
  selectDashboardLoading,
} from '../../redux/dashboard/dashboardSelector';
import { selectCustomers } from '../../redux/customers/customersSelector';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const statistics = useSelector(selectStatistics);
  const lastCustomers = useSelector(selectLastCustomers);
  const transactions = useSelector(selectTransactions);
  const customers = useSelector(selectCustomers);
  const isLoading = useSelector(selectDashboardLoading);

  useEffect(() => {
    dispatch(getDashboard());
    dispatch(getCustomers());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      <div className={css.wrapper}>
        <div className={css.statWrapper}>
          <Statistics statistics={statistics} />
        </div>
        <div className={css.wrapperTable}>
          <div className={css.rcWrapper}>
            <RecentCustomers
              lastCustomers={lastCustomers}
              customers={customers}
            />
          </div>
          <div className={css.ieWrapper}>
            <IncomeExpenses transactions={transactions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
