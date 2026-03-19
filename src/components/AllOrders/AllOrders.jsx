import css from './AllOrders.module.css';

const AllOrders = ({ orders }) => {
  return (
    <>
      <table className={css.tableCustomers}>
        <caption>All orders</caption>
        <thead>
          <tr>
            <th scope="col">User info</th>
            <th scope="col">Address</th>
            <th scope="col">Products</th>
            <th scope="col">Order date</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td className={css.tdName}>
                <img
                  src={order?.image || order?.photo || ''}
                  alt={order?.name}
                  className={css.imgAvatar}
                />
                <p className={css.name}>{order.name}</p>
              </td>
              <td>
                <p>{order.address}</p>
              </td>
              <td>
                <p>{order.products}</p>
              </td>
              <td>
                <p>
                  {order.order_date
                    ? new Date(order.order_date).toLocaleDateString('uk-UA')
                    : ''}
                </p>
              </td>
              <td>
                <p>{order.price}</p>
              </td>
              <td>
                <p>{order.status}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AllOrders;
