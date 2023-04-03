import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Home.module.scss';

const links = [
  {
    name: 'raid calculator',
    path: '/raid-calculator',
    image: '/raid_thumbnail.jpg',
  },
  {
    name: 'wipe progression',
    path: '/wipe-progression',
    image: '/wipe_progression_thumbnail.png',
  },
  {
    name: 'coming soon',
    path: '/coming-soon',
    image: '/servers_thumbnail.jpeg',
  },
];

export default function Home() {
  const login = async () => {
    const response = await fetch('/api/auth');
  };

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
        <button onClick={login}>Login</button>
        <h1 className={styles.name}>
          <span>rust</span> buddy
        </h1>
        <div className={styles.linksWrapper}>
          {links.map((link) => (
            <Link key={link.name} href={link.path} className={styles.link}>
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
      </main>
    </>
  );
}
