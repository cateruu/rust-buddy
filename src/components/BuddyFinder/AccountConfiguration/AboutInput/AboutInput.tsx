import React from 'react';
import styles from './AboutInput.module.scss';
import { Poppins } from 'next/font/google';
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks';
import {
  nextStep,
  previousStep,
  setAbout,
} from '../../../../store/slices/configurationSlice';
import Button from '../../../UI/Button/Button';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const AboutInput = () => {
  const { about } = useAppSelector((state) => state.configuration);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Tell something about yourself</h3>
      <div className={styles['input-wrapper']}>
        <p className={styles.limit}>{`${about.length}/250`}</p>
        <textarea
          value={about}
          className={`${poppins.className} ${styles.input}`}
          onChange={(e) => dispatch(setAbout(e.target.value))}
          placeholder='Yes, I like to suck cock...'
          maxLength={250}
        />
      </div>
      <div className={styles['buttons-wrapper']}>
        <Button
          text='Back'
          onClick={() => dispatch(previousStep())}
          variant='secondary'
          width={100}
        />
        <Button
          text='Next'
          onClick={() => dispatch(nextStep())}
          variant='primary'
          width={100}
          disabled={about.length < 3}
        />
      </div>
    </div>
  );
};

export default AboutInput;
