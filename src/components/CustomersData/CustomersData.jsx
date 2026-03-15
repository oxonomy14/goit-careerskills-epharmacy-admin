import css from './CustomersData.module.css';

const CustomersData = ({ customers }) => {
  return (
    <>
      <table className={css.tableCustomers}>
        <caption>Recent Customers</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Register date</th>
          </tr>
        </thead>

        <tbody>
          {customers.map(customer => (
            <tr key={customer._id}>
              <td className={css.tdName}>
                <img
                  src={customer?.image || customer?.photo || ''}
                  alt={customer?.name}
                  className={css.imgAvatar}
                />
                <p className={css.name}>{customer.name}</p>
              </td>
              <td>
                <p>{customer.email}</p>
              </td>
              <td>
                <p>{customer.address}</p>
              </td>
              <td>
                <p>{customer.phone}</p>
              </td>
              <td>
                <p>{customer.register_date}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CustomersData;
