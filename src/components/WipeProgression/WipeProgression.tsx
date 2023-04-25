import React from 'react';
import styles from './WipeProgression.module.scss';
import Link from 'next/link';

const WipeProgression = () => {
  return (
    <div className={styles.container}>
      <section>
        <h2 className={styles.header}>My Boards</h2>
        <section className={styles['boards-wrapper']}>
          <Link
            href={`/wipe-progression/${'ID-PLACEHOLDER'}`}
            className={styles.board}
          >
            Board
          </Link>
          <div className={styles['add-board']}>+</div>
        </section>
      </section>
      <section>
        <h2 className={styles.header}>Shared with me</h2>
        <section className={styles['boards-wrapper']}>
          <Link
            href={`/wipe-progression/${'ID-PLACEHOLDER'}`}
            className={styles.board}
          >
            Board
          </Link>
        </section>
      </section>
    </div>
  );
};

export default WipeProgression;
