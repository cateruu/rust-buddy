import React from 'react';
import styles from './WipeProgression.module.scss';
import Link from 'next/link';
import useModal from '../../hooks/useModal';
import AddBoardModal from '../AddBoardModal/AddBoardModal';

const WipeProgression = () => {
  const { isOpen, close, open } = useModal();

  return (
    <>
      {isOpen && <AddBoardModal onClose={close} />}
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
            <div className={styles['add-board']} onClick={open}>
              +
            </div>
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
    </>
  );
};

export default WipeProgression;
