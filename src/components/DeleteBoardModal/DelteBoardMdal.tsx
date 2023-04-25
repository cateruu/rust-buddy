import React, { useState } from 'react';
import styles from './DeleteBoardModal.module.scss';
import Modal from '../Modal/Modal';
import { supabase } from '../../lib/supabase';
import { RotatingLines } from 'react-loader-spinner';

interface Props {
  onClose: () => void;
  id: string;
}

const DelteBoardModal = ({ onClose, id }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleBoardDelete = async () => {
    setIsLoading(true);

    const { error } = await supabase.from('boards').delete().eq('id', id);

    if (error) {
      setIsLoading(false);
      console.error('delete board error ->', error);
    } else {
      setIsLoading(false);
      onClose();
    }
  };

  return (
    <Modal onClose={onClose}>
      <div className={styles.container}>
        <h2 className={styles.header}>Delete Board</h2>
        <p className={styles.text}>
          Are you sure you want to delete this board
        </p>
        <div className={styles['button-wrapper']}>
          <button
            className={styles.button}
            style={{ backgroundColor: '#B64740' }}
            onClick={handleBoardDelete}
          >
            <RotatingLines
              strokeColor='white'
              strokeWidth='4'
              animationDuration='1'
              width='14'
              visible={isLoading}
            />
            Confirm
          </button>
          <button
            className={styles.button}
            style={{ backgroundColor: '#4C4946' }}
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DelteBoardModal;
