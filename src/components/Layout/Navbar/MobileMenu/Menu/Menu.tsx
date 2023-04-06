import React from 'react';
import styles from './Menu.module.scss';

interface Props {
  isVisible: boolean;
}

const Menu = ({ isVisible }: Props) => {
  return <>{isVisible && <div className={styles.container}>aha</div>}</>;
};

export default Menu;
