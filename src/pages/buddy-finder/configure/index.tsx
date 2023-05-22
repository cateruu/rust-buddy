import React from 'react';
import Head from 'next/head';
import { useUser } from '../../../hooks/useUser';
import AccountConfiguration from '../../../components/BuddyFinder/AccountConfiguration/AccountConfiguration';
import styles from './Configure.module.scss';

const BuddyFinderPage = () => {
  const { user } = useUser();

  return (
    <>
      <Head>
        <title>Rust Buddy - Buddy Finder Configuration</title>
        <meta
          name='description'
          content='Rust Game Wipe Progression app for you to track your blueprints throughout the wipe.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <AccountConfiguration />
      </main>
    </>
  );
};

export default BuddyFinderPage;
