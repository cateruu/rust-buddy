import React from 'react';
import styles from './PageLoader.module.scss';
import { InfinitySpin } from 'react-loader-spinner';

const PageLoader = () => {
  return (
    <div className={styles.container}>
      <InfinitySpin color='#B64740' />
    </div>
  );
};

export default PageLoader;
