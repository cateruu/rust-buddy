import React from 'react';
import styles from './Board.module.scss';
import { BoardType } from '../../../pages/wipe-progression/[id]';
import Button from '../../UI/Button/Button';
import { ArrowBendUpLeft } from '@phosphor-icons/react';
import { useRouter } from 'next/router';
import { useUser } from '../../../hooks/useUser';
import toast from 'react-hot-toast';

interface Props {
  data: BoardType;
}

const Board = ({ data }: Props) => {
  const { user } = useUser();
  const router = useRouter();

  const handleAddFriend = () => {};

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.toString());
    toast.success('Copied to clipboard');
  };

  const handleAddItems = () => {};

  const handleManageFriend = () => {};

  return (
    <div className={styles.container}>
      {user && (
        <button className={styles.back} onClick={() => router.back()}>
          <ArrowBendUpLeft size={15} weight='light' />
          <p>Back to HUB</p>
        </button>
      )}
      <section className={styles.share}>
        <Button text='Add friend' variant='primary' onClick={handleAddFriend} />
        <Button text='Share' variant='secondary' onClick={handleShare} />
      </section>
      <section className={styles.info}>
        <header>
          <h2 className={styles.name}>{data.name}</h2>
          <p className={styles.text}>
            Track your team BP’s throughout the wipe
          </p>
          <p className={styles.text}>How much scrap is left to gather</p>
          <p className={styles.text}>See who has what BP’s</p>
        </header>
        <section className={styles.scraps}>SHOW SCRAP NEEDED HERE</section>
        <section className={styles.managment}>
          <Button onClick={handleAddItems} text='Add items' variant='primary' />
          <Button
            onClick={handleManageFriend}
            text='Manage friends'
            variant='secondary'
          />
        </section>
      </section>
    </div>
  );
};

export default Board;
