import React, { ChangeEvent } from 'react';
import styles from './Input.module.scss';

interface Props {
  value: string;
  onChange: (event: ChangeEvent) => void;
  withLabel?: boolean;
  labelText?: string;
  width?: string;
  error?: string;
  placeholder?: string;
}

const Input = ({
  value,
  onChange,
  withLabel,
  labelText,
  width,
  error,
  placeholder = '',
}: Props) => {
  return (
    <div className={styles['input-wrapper']}>
      {withLabel && <p className={styles['input-label']}>{labelText}</p>}
      <input
        type='text'
        placeholder={placeholder}
        className={`${styles.input} ${error && styles.error}`}
        value={value}
        onChange={onChange}
        style={{ minWidth: width ? width : '300px' }}
      />
      {error && <p className={styles['error-text']}>{error}</p>}
    </div>
  );
};

export default Input;
