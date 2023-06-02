import React from 'react';
import styles from './Button.module.scss';
import { Poppins } from 'next/font/google';
import { RotatingLines } from 'react-loader-spinner';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

interface Props {
  text: string;
  variant: 'primary' | 'secondary';
  onClick: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  width?: number | string;
  disabled?: boolean;
  isLoading?: boolean;
}

const Button = ({
  text,
  variant,
  width,
  onClick,
  disabled,
  isLoading = false,
}: Props) => {
  return (
    <button
      className={`${styles.button} ${poppins.className}`}
      style={{
        backgroundColor: variant === 'primary' ? '#B64740' : '#4C4946',
        width: width ? width : undefined,
        padding: width ? undefined : '0 30px',
      }}
      onClick={onClick}
      disabled={disabled}
    >
      <RotatingLines
        strokeColor='white'
        strokeWidth='4'
        animationDuration='1'
        width='14'
        visible={isLoading}
      />
      {text}
    </button>
  );
};

export default Button;
