import React, { useState } from 'react';
import styles from './Select.module.scss';
import { CaretRight } from '@phosphor-icons/react';

interface Props {
  placeholder: string;
  items: string[];
  onChange: (value: string) => void;
  activeItem: string;
}

const Select = ({ placeholder, items, onChange, activeItem }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.select} onClick={handleSelectOpen}>
        <p>{activeItem || placeholder}</p>
        <CaretRight
          weight='light'
          style={{ transform: isOpen && 'rotate(90deg)' }}
        />
      </div>
      {isOpen && (
        <div className={styles['items-wrapper']}>
          {items.map((item) => (
            <div
              key={item}
              className={styles.item}
              onClick={() => {
                handleSelectOpen();
                onChange(item);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
