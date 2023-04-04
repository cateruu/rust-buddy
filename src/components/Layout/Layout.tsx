import React, { FC } from 'react';
import styles from './Layout.module.scss';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={`${poppins.className} ${styles.main}`}>{children}</div>
  );
};

export default Layout;
