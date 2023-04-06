import Head from 'next/head';
import React from 'react';
import styles from './404.module.scss';
import Navbar from '../components/Layout/Navbar/Navbar';
import Link from 'next/link';

const PageNotFound = () => {
  return (
    <>
      <Head>
        <title>Rust Buddy - Page not found</title>
        <meta
          name='description'
          content='Collection of life improving apps for Rust game'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1>Page Not Found</h1>
        <Link href='/' className={styles.link}>
          Back to Home
        </Link>
      </main>
    </>
  );
};

export default PageNotFound;
