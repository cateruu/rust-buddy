import React, { useState } from 'react';
import styles from './MobileMenu.module.scss';
import Menu from './Menu/Menu';

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Menu isVisible={isMenuOpen} />
      <div className={styles.hamburgerWrapper} onClick={handleMenuOpen}>
        <div
          className={`${styles.hamburger} ${isMenuOpen ? styles.menuOpen : ''}`}
        ></div>
      </div>
    </>
  );
};

export default MobileMenu;
