import { PropagateLoader } from 'react-spinners';

import css from './Loader.module.css';

const Loader = () => {
  const loaderColor = getComputedStyle(
    document.documentElement,
  ).getPropertyValue('--loader');
  return (
    <div className={css.loaderBackdrop}>
      <PropagateLoader
        color={loaderColor}
        loading
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={1}
      />
    </div>
  );
};

export default Loader;
