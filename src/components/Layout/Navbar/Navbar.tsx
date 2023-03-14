import { Bebas_Neue } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './Navbar.module.scss';

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] });

const Navbar = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <Link className={`${bebasNeue.className} ${styles.name}`} href='/'>
        <span>rust</span> buddy
      </Link>
      <nav className={styles.nav}>
        <Link
          href='/raid-calculator'
          className={`${
            router.pathname === '/raid-calculator' && styles.activeLink
          } ${styles.link}`}
        >
          Raid Calculator
        </Link>
        <Link
          href='/wipe-progression'
          className={`${
            router.pathname === '/wipe-progression' && styles.activeLink
          } ${styles.link}`}
        >
          Wipe Progression
        </Link>
      </nav>
      <Link href='/sign-in' className={styles.button}>
        Sign In
      </Link>
    </header>
  );
};

export default Navbar;
