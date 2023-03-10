import React from 'react';
import { Poppins } from 'next/font/google';
import styles from './Layout.module.scss';
import { useRouter } from 'next/router';
import Navbar from './Navbar/Navbar';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const router = useRouter();

  return (
    <div className={`${poppins.className} ${styles.main}`}>
      {router.pathname !== '/' && <Navbar />}
      {children}
    </div>
  );
};

export default Layout;
