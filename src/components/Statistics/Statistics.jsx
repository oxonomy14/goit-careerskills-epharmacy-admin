import css from './Statistics.module.css';

const Statistics = ({ statistics }) => {
  return (
    <>
      <div className={css.statWrapper}>
        <div className={css.statBox}>
          <div className={css.meta}>
            <svg className={css.icon}>
              <use href={`/icons/sprite.svg#icon-db`} />
            </svg>
            <h3 className={css.title}>All products</h3>
          </div>

          <p className={css.amount}>{statistics.allProducts}</p>
        </div>
        <div className={css.statBox}>
          <div className={css.meta}>
            <svg className={css.icon}>
              <use href={`/icons/sprite.svg#icon-customers`} />
            </svg>
            <h3 className={css.title}>All suppliers</h3>
          </div>

          <p className={css.amount}>{statistics.allSuppliers}</p>
        </div>
        <div className={css.statBox}>
          <div className={css.meta}>
            <svg className={css.icon}>
              <use href={`/icons/sprite.svg#icon-customers`} />
            </svg>
            <h3 className={css.title}>All customers</h3>
          </div>

          <p className={css.amount}>{statistics.allCustomers}</p>
        </div>
      </div>
    </>
  );
};

export default Statistics;
