import React, { FC } from 'react';
import styles from './Layout.module.scss';
import { Poppins } from 'next/font/google';
import Navbar from './Navbar/Navbar';
import { useUser } from '../../hooks/useUser';
import PageLoader from '../UI/Loaders/PageLoader/PageLoader';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const { isUserLoading } = useUser();

  return (
    <>
      {isUserLoading ? (
        <PageLoader />
      ) : (
        <div className={`${poppins.className} ${styles.main}`}>
          <Navbar />
          {children}
        </div>
      )}
    </>
  );
};

export default Layout;
