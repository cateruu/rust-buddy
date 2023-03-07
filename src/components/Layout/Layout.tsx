import React, { FC } from 'react';
import { Bebas_Neue } from 'next/font/google';
import styles from './Layout.module.scss';

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] });

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={`${bebasNeue.className} ${styles.main}`}>{children}</div>
  );
};

export default Layout;
