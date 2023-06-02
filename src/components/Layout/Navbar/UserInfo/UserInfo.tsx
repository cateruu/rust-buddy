import React from 'react';
import styles from './UserInfo.module.scss';
import { SteamUser } from '../../../../lib/passport';
import Image from 'next/image';
import Link from 'next/link';
import { useUser } from '../../../../hooks/useUser';
import { SignOut } from '@phosphor-icons/react';

const UserInfo = () => {
  const { user } = useUser();

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={user.photo}
          alt={`${user.displayName} profile picture`}
          fill
        />
      </div>
      <p className={styles.name}>{user.displayName}</p>
      <Link href='/api/auth/logout' className={styles.button}>
        <SignOut height={22} width={22} />
      </Link>
    </div>
  );
};

export default UserInfo;
