import React, { useState } from 'react';
import styles from './MoreInfo.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks';
import {
  previousStep,
  setAge,
  setLanguage,
  setRegion,
} from '../../../../store/slices/configurationSlice';
import { regions } from './MoreInfo.helpers';
import Select from '../../../UI/Select/Select';
import Button from '../../../UI/Button/Button';

const MoreInfo = () => {
  const [ageError, setAgeError] = useState('');

  const { age, region, language } = useAppSelector(
    (state) => state.configuration
  );
  const dispatch = useAppDispatch();

  const handleAgeChange = (value: string) => {
    if (!/^\d*$/.test(value) || value.length > 3) return;

    dispatch(setAge(value));
    if (ageError) setAgeError('');
  };

  const handleLanguageChange = (value: string) => {
    dispatch(setLanguage(value));
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>More about you...</h3>
      <div className={styles['error-wrapper']}>
        <div
          className={`${styles['input-wrapper']} ${
            ageError && styles['input-error']
          }`}
        >
          <label className={styles['input-label']}>Age</label>
          <input
            className={styles.input}
            value={age}
            onChange={(e) => handleAgeChange(e.target.value)}
          />
        </div>
        <p className={styles.error}>{ageError}</p>
      </div>
      <h4 className={styles.header}>Region</h4>
      <div className={styles['regions-wrapper']}>
        {regions.map((regionItem) => (
          <div
            key={regionItem}
            className={`${styles.region} ${
              region === regionItem && styles.selected
            }`}
            onClick={() => dispatch(setRegion(regionItem))}
          >
            {regionItem}
          </div>
        ))}
      </div>
      <Select
        placeholder='Select language'
        items={['aha', 'ehe']}
        onChange={handleLanguageChange}
        activeItem={language}
      />
      <div className={styles['buttons-wrapper']}>
        <Button
          text='Back'
          onClick={() => dispatch(previousStep())}
          variant='secondary'
          width={100}
        />
        <Button
          text='Finish'
          onClick={() => {}}
          variant='primary'
          width={100}
        />
      </div>
    </div>
  );
};

export default MoreInfo;
