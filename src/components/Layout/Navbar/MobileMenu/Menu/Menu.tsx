import React from 'react';
import styles from './Menu.module.scss';
import UserInfo from '../../UserInfo/UserInfo';
import { useUser } from '../../../../../hooks/useUser';
import Link from 'next/link';

interface Props {
  isVisible: boolean;
}

const Menu = ({ isVisible }: Props) => {
  const { user } = useUser();

  return (
    <>
      {isVisible && (
        <div className={styles.container}>
          <div className={styles.linksWrapper}>
            <Link href='/raid-calculator'>Raid Calculator</Link>
            <Link href='/wipe-progression'>Wipe Progression</Link>
            <Link href='/coming-soon'>Coming Soon</Link>
          </div>
          {user ? (
            <UserInfo />
          ) : (
            <Link href='/api/auth/login' className={styles.button}>
              Login
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default Menu;
