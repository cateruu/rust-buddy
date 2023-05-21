import { Bebas_Neue } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './Navbar.module.scss';
import { SteamUser } from '../../../lib/passport';
import UserInfo from './UserInfo/UserInfo';
import MobileMenu from './MobileMenu/MobileMenu';
import { useUser } from '../../../hooks/useUser';

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] });

const Navbar = () => {
  const router = useRouter();
  const { user } = useUser();

  return (
    <header className={styles.header}>
      <Link className={`${bebasNeue.className} ${styles.name}`} href='/'>
        <span>rust</span> buddy
      </Link>
      {router.pathname !== '/' && (
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
            href='/buddy-finder'
            className={`${
              router.pathname === '/buddy-finder' && styles.activeLink
            } ${styles.link}`}
          >
            Buddy Finder
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
      )}

      {user ? (
        <div className={styles.userWrapper}>
          <UserInfo />
        </div>
      ) : (
        <Link href='/api/auth/login' className={styles.button}>
          Login
        </Link>
      )}
      <MobileMenu />
    </header>
  );
};

export default Navbar;
