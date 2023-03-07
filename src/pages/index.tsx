import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rust Buddy</title>
        <meta
          name='description'
          content='Collection of life improving apps for Rust game'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.name}>
          <span>rust</span> buddy
        </h1>
        <p style={{ textAlign: 'center', fontSize: '2rem' }}>
          site under construction
        </p>
      </main>
    </>
  );
}
