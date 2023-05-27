import React from 'react';
import styles from './FinderHub.module.scss';
import Link from 'next/link';
import { Bebas_Neue } from 'next/font/google';
import Image from 'next/image';

const links = [
  {
    name: 'group',
    path: '/buddy-finder/group',
    image: '/clan.webp',
  },
  {
    name: 'friend',
    path: '/buddy-finder/friend',
    image: '/buddy_finder.webp',
  },
];

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] });

const FinderHub = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>I&apos;m looking for a</p>
      <div className={styles['links-wrapper']}>
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className={`${styles.link} ${bebasNeue.className}`}
          >
            <div className={styles.imageOpacity}></div>
            <Image
              src={link.image}
              alt={link.name}
              fill
              className={styles.linkImage}
            />
            <p className={styles.linkName}>
              {link.name.split(' ')[0]}
              <br />
              {link.name.split(' ')[1]}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FinderHub;
