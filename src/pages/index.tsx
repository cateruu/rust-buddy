import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] });

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
        <h1 className={`${bebasNeue.className} ${styles.name}`}>
          <span>rust</span> buddy
        </h1>
        <p
          style={{
            textAlign: 'center',
            fontSize: '1rem',
            color: 'var(--light-font)',
          }}
        >
          SITE UNDER CONSTRUCTION
        </p>
      </main>
    </>
  );
}
