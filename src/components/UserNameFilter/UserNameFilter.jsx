import { useState } from 'react';
import css from './UserNameFilter.module.css';

const UserNameFilter = ({ onFilter, onClear }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleFilter = () => {
    onFilter(value);
  };

  const handleClear = () => {
    setValue('');
    onClear?.();
  };

  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      handleClear();
    }
  };

  return (
    <div className={css.filterWrapper}>
      <div className={css.inputWrapper}>
        {' '}
        <input
          type="text"
          placeholder="User Name"
          value={value}
          onChange={handleChange}
          className={css.input}
          onKeyDown={handleKeyDown}
        />
        {value && (
          <button
            type="button"
            className={css.btnClear}
            onClick={handleClear}
            aria-label="Clear search"
          >
            <svg className={css.iconX}>
              <use href="/icons/sprite.svg?v=${Date.now()}#icon-x" />
            </svg>
          </button>
        )}
      </div>

      <button onClick={handleFilter} className={css.button}>
        <svg className={css.filterIcon}>
          <use href={`/icons/sprite.svg#icon-filter`} />
        </svg>
        <p> Filter</p>
      </button>
    </div>
  );
};

export default UserNameFilter;
