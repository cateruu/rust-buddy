import React, { useState } from 'react';
import styles from './AvailableTime.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks';
import { days, hours } from './AvailableTime.helpers';
import {
  nextStep,
  setSelectedDays,
  setSelectedHours,
} from '../../../../store/slices/configurationSlice';
import Button from '../../../Button/Button';

const AvailableTime = () => {
  const { selectedDays, selectedHours } = useAppSelector(
    (state) => state.configuration
  );
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Available time to play</h3>
      <h4 className={styles.header}>Hours</h4>
      <div className={styles['select-wrapper']}>
        {hours.map((hours) => (
          <div
            key={hours.value}
            onClick={() => dispatch(setSelectedHours(hours.value))}
            className={`${styles.select} ${
              selectedHours === hours.value && styles.selected
            }`}
          >
            {hours.value}
          </div>
        ))}
      </div>
      <h4 className={styles.header}>Days</h4>
      <div
        className={styles['select-wrapper']}
        style={{ marginBottom: '25px' }}
      >
        {days.map((day) => (
          <div
            key={day.value}
            onClick={() => dispatch(setSelectedDays(day.value))}
            className={`${styles.select} ${
              selectedDays === day.value && styles.selected
            }`}
          >
            {day.value}
          </div>
        ))}
      </div>
      <Button
        text='Next'
        onClick={() => dispatch(nextStep())}
        variant='primary'
        width={100}
        disabled={!selectedHours || !selectedDays}
      />
    </div>
  );
};

export default AvailableTime;
