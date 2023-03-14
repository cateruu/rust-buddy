import React from 'react';
import styles from './FormInput.module.scss';

interface Props {
  name: string;
  type: string;
  value: string | number | readonly string[];
  label: string;
  onChange?: (
    value: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  onBlur?: (
    event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  error?: string;
  setFieldTouched?: (name: string, isTouched: boolean) => void;
  touched?: boolean;
}

const FormInput = ({
  name,
  type,
  onChange,
  onBlur,
  value,
  label,
  error,
  setFieldTouched,
  touched,
}: Props) => {
  const handleOnBlur = (
    event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (setFieldTouched) {
      setFieldTouched(name, true);
    }
    onBlur(event);
  };

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className={`${styles.input} ${error && touched && styles.error}`}
        value={value}
        onChange={onChange}
        onBlur={handleOnBlur}
      />
      {touched && <p className={styles['error-text']}>{error}</p>}
    </div>
  );
};

export default FormInput;
