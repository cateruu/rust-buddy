import React from 'react';
import styles from './Button.module.scss';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

interface Props {
  text: string;
  variant: 'primary' | 'secondary';
  onClick: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  width?: number;
  disabled?: boolean;
}

const Button = ({ text, variant, width, onClick, disabled }: Props) => {
  return (
    <button
      className={`${styles.button} ${poppins.className}`}
      style={{
        backgroundColor: variant === 'primary' ? '#B64740' : '#4C4946',
        width: width ? width : undefined,
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
