import React from 'react';
import { useUser } from '../../hooks/useUser';
import Head from 'next/head';
import styles from './BuddyFinder.module.scss';
import Link from 'next/link';
import AccountConfiguration from '../../components/BuddyFinder/AccountConfiguration/AccountConfiguration';

const BuddyFinderPage = () => {
  const { user } = useUser();

  return (
    <>
      <Head>
        <title>Rust Buddy - Buddy Finder</title>
        <meta
          name='description'
          content='Rust Game Wipe Progression app for you to track your blueprints throughout the wipe.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        {user ? (
          user.finderAccount ? (
            <div>content</div>
          ) : (
            <AccountConfiguration />
          )
        ) : (
          <div className={styles.container}>
            <h2 className={styles.text}>
              You must be logged in to use the app
            </h2>
            <Link href='/api/auth/login' className={styles.login}>
              Login
            </Link>
          </div>
        )}
      </main>
    </>
  );
};

export default BuddyFinderPage;
