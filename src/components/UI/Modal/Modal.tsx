import React from 'react';
import styles from './Modal.module.scss';

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: Props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.background} onClick={onClose}></div>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Modal;
