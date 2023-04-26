import React, { useEffect, useRef, useState } from 'react';
import styles from './WipeProgression.module.scss';
import Link from 'next/link';
import useModal from '../../hooks/useModal';
import AddBoardModal from '../AddBoardModal/AddBoardModal';
import { useUser } from '../../hooks/useUser';
import { supabase } from '../../lib/supabase';
import { Trash } from '@phosphor-icons/react';
import DeleteBoardModal from '../DeleteBoardModal/DeleteBoardModal';
import BoardHubLoader from '../Loaders/BoardHubLoader';

const WipeProgression = () => {
  const {
    isOpen: isAddBoardModalOpen,
    close: closeAddBoardModal,
    open: openAddBoardModal,
  } = useModal();
  const {
    isOpen: isDeleteBoardModalOpen,
    close: closeDeleteBoardModal,
    open: openDeleteBoardModal,
  } = useModal();
  const { user } = useUser();

  const [userBoards, setUserBoards] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const boardIdForDelete = useRef();

  useEffect(() => {
    const getUserBoards = async () => {
      setIsLoading(true);

      const { data, error } = await supabase
        .from('boards')
        .select()
        .eq('creator', user.id);

      setUserBoards(data);
    };

    getUserBoards().then(() => setIsLoading(false));
  }, [user]);

  useEffect(() => {
    const channel = supabase
      .channel('any')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'boards',
          filter: `creator=eq.${user.id}`,
        },
        (payload) => {
          if (payload.eventType === 'DELETE') {
            setUserBoards((prevBoards) =>
              prevBoards.filter((board) => board.id !== payload.old.id)
            );
            return;
          }

          if (payload.eventType === 'UPDATE') {
            setUserBoards((prevBoards) =>
              prevBoards.map((board) =>
                board.id === payload.new.id ? payload.new : board
              )
            );
            return;
          }

          setUserBoards((prevBoards) => [payload.new, ...prevBoards]);
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, []);

  return (
    <>
      {isDeleteBoardModalOpen && (
        <DeleteBoardModal
          onClose={closeDeleteBoardModal}
          id={boardIdForDelete.current}
        />
      )}
      {isAddBoardModalOpen && <AddBoardModal onClose={closeAddBoardModal} />}

      <div className={styles.container}>
        <section>
          <h2 className={styles.header}>My Boards</h2>
          <section className={styles['boards-wrapper']}>
            {isLoading ? (
              <BoardHubLoader />
            ) : (
              userBoards && (
                <>
                  {userBoards.map((board) => (
                    <Link
                      key={board.id}
                      href={`/wipe-progression/${board.id}`}
                      className={styles.board}
                    >
                      <Trash
                        className={styles.delete}
                        onClick={(e) => {
                          e.preventDefault();
                          openDeleteBoardModal();
                          boardIdForDelete.current = board.id;
                        }}
                      />
                      {board.name}
                    </Link>
                  ))}
                  <div
                    className={styles['add-board']}
                    onClick={openAddBoardModal}
                  >
                    +
                  </div>
                </>
              )
            )}
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
