import React from 'react';
import styles from './UserInfo.module.scss';
import { SteamUser } from '../../../../lib/passport';
import Image from 'next/image';
import Link from 'next/link';
import { useUser } from '../../../../hooks/useUser';

const UserInfo = () => {
  const { user } = useUser();

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={user.photos[0].value}
          alt={`${user.displayName} profile picture`}
          fill
        />
      </div>
      <p className={styles.name}>{user.displayName}</p>
      <Link href='/api/auth/logout' className={styles.button}>
        Logout
      </Link>
    </div>
  );
};

export default UserInfo;
