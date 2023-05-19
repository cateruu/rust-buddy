import React, { useEffect, useState } from 'react';
import styles from './BoardPage.module.scss';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { supabase } from '../../../lib/supabase';
import Board from '../../../components/WipeProgression/Board/Board';

export interface BoardType {
  id: string;
  creator: number;
  name: string;
  created_at: Date;
  last_modified: Date;
}

interface Props {
  board: BoardType[];
}

const BoardPage = ({ board }: Props) => {
  const [boardData, setBoardData] = useState(board?.[0]);

  useEffect(() => {
    const channel = supabase
      .channel('any')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'boards',
          filter: `id=eq.${boardData?.id}`,
        },
        (payload) => {
          console.log(payload);

          setBoardData(payload.new as BoardType);
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [boardData?.id]);

  return (
    <>
      <Head>
        <title>Rust Buddy</title>
        <meta
          name='description'
          content='Rust Game Wipe Progression user board for tracking your blueprints throughout the wipe.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        {!boardData ? (
          <p className={styles['not-exist']}>This board does not exist</p>
        ) : (
          <Board data={boardData} />
        )}
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = await supabase
    .from('boards')
    .select()
    .eq('id', ctx.query.id);

  return {
    props: {
      board: data,
    },
  };
};

export default BoardPage;
