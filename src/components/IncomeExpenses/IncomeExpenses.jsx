import css from './IncomeExpenses.module.css';

const IncomeExpenses = ({ transactions }) => {
  const getTypeClass = type => {
    switch (type.toLowerCase()) {
      case 'expense':
        return css.expense;
      case 'income':
        return css.income;
      case 'error':
        return css.error;
      default:
        return '';
    }
  };

  const getAmountClass = type => {
    switch (type.toLowerCase()) {
      case 'expense':
        return css.expenseAmount;
      case 'income':
        return css.incomeAmount;
      case 'error':
        return css.errorAmount;
      default:
        return '';
    }
  };

  return (
    <>
      <table className={css.tableTransactions}>
        <caption>Income/Expenses</caption>
        <thead>
          <tr>
            <th scope="col" colSpan={3}>
              Today
            </th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction._id}>
              <td>
                <p className={getTypeClass(transaction.type)}>
                  {transaction.type}
                </p>
              </td>
              <td>{transaction.name}</td>
              <td>
                <p className={getAmountClass(transaction.type)}>
                  {transaction.amount || 'none'}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default IncomeExpenses;
