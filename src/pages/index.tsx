import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Home.module.scss';
import router, { NextAuthApiRequest } from '../lib/router';
import { NextApiResponse } from 'next';
import { SteamUser } from '../lib/passport';
import Navbar from '../components/Layout/Navbar/Navbar';
import { Bebas_Neue } from 'next/font/google';

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

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] });

interface Props {
  user: SteamUser;
}

export default function Home({ user }: Props) {
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
        <Navbar user={user} />
        <div className={styles.linksWrapper}>
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`${styles.link} ${bebasNeue.className}`}
            >
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

export const getServerSideProps = async ({
  req,
  res,
}: {
  req: NextAuthApiRequest;
  res: NextApiResponse;
}) => {
  await router.run(req, res);
  return { props: { user: req.user || null } };
};
