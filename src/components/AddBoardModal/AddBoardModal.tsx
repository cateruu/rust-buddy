import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './AddBoardModal.module.scss';
import Modal from '../Modal/Modal';
import { supabase } from '../../lib/supabase';
import { useUser } from '../../hooks/useUser';
import { v4 as uuidv4 } from 'uuid';
import { RotatingLines } from 'react-loader-spinner';
import Input from '../Input/Input';

interface Props {
  onClose: () => void;
}

const AddBoardModal = ({ onClose }: Props) => {
  const { user } = useUser();

  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setError('');
  };

  const createNewBoard = async () => {
    setIsLoading(true);

    if (name.length < 3) {
      setError('Minimum length is 3');
      setIsLoading(false);
      return;
    }

    if (name.length > 25) {
      setError('Maximum length is 25');
      setIsLoading(false);
      return;
    }

    const { error } = await supabase.from('boards').insert({
      id: uuidv4(),
      creator: user.id,
      name: name,
      last_modified: new Date(Date.now()).toISOString(),
    });

    if (error) {
      console.error('create new board error =>', error);
      setIsLoading(false);
    } else {
      onClose();
      setIsLoading(false);
    }
  };

  return (
    <Modal onClose={onClose}>
      <div className={styles.container}>
        <h2 className={styles.header}>New Board</h2>
        <Input
          labelText={'Name'}
          onChange={handleInput}
          value={name}
          withLabel={true}
          error={error}
          placeholder='Rust Buddy'
        />
        <div className={styles['button-wrapper']}>
          <button
            className={styles.button}
            style={{ backgroundColor: '#B64740' }}
            onClick={createNewBoard}
          >
            <RotatingLines
              strokeColor='white'
              strokeWidth='4'
              animationDuration='1'
              width='14'
              visible={isLoading}
            />
            Create
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

export default AddBoardModal;
