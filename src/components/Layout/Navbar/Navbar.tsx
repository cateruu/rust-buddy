import { Bebas_Neue } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './Navbar.module.scss';
import { SteamUser } from '../../../lib/passport';
import UserInfo from './UserInfo/UserInfo';

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] });

interface Props {
  user: SteamUser;
}

const Navbar = ({ user }: Props) => {
  const router = useRouter();

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
        <UserInfo user={user} />
      ) : (
        <Link href='/api/auth/login' className={styles.button}>
          Login
        </Link>
      )}
    </header>
  );
};

export default Navbar;
