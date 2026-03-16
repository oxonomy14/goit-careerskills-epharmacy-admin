import css from './RecentCustomers.module.css';

const RecentCustomers = ({ lastCustomers, customers }) => {
  const customersById = (customers ?? []).reduce((acc, customer) => {
    acc[customer._id] = customer;
    return acc;
  }, {});

  return (
    <>
      <table className={css.tableCustomers}>
        <caption>Recent Customers</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Spent</th>
          </tr>
        </thead>

        <tbody>
          {lastCustomers.map(item => {
            const customer = customersById[item._id];
            return (
              <tr key={item._id}>
                <td className={css.tdName}>
                  <img
                    src={customer?.image || customer?.photo || null}
                    alt={customer?.name}
                    className={css.imgAvatar}
                  />
                  <p className={css.name}>{item.name}</p>
                </td>
                <td>
                  <p>{item.email}</p>
                </td>
                <td>
                  <p>{item.spent}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default RecentCustomers;
