import React, { ChangeEvent } from 'react';
import styles from './Input.module.scss';
import Image from 'next/image';

interface Props {
  value: string | number;
  onChange: (event: ChangeEvent) => void;
  withLabel?: boolean;
  labelText?: string;
  width?: string;
  error?: string;
  placeholder?: string;
  icon?: string;
}

const Input = ({
  value,
  onChange,
  withLabel,
  labelText,
  width,
  error,
  placeholder = '',
  icon,
}: Props) => {
  return (
    <div className={styles['input-wrapper']}>
      {withLabel && <p className={styles['input-label']}>{labelText}</p>}
      <div className={styles['input-container']}>
        {icon && (
          <div className={styles.icon}>
            <Image src={icon} alt={icon} width={35} height={35} />
          </div>
        )}
        <input
          type='text'
          placeholder={placeholder}
          className={`${styles.input} ${error && styles.error}`}
          value={value}
          onChange={onChange}
          style={{ minWidth: width ? width : '300px' }}
        />
      </div>
      {error && <p className={styles['error-text']}>{error}</p>}
    </div>
  );
};

export default Input;
