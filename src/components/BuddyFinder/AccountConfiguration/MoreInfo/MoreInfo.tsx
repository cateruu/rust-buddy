import React, { useEffect, useState } from 'react';
import styles from './MoreInfo.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks';
import {
  previousStep,
  setAge,
  setLanguage,
  setRegion,
} from '../../../../store/slices/configurationSlice';
import { languages, regions } from './MoreInfo.helpers';
import Select from '../../../UI/Select/Select';
import Button from '../../../UI/Button/Button';
import { supabase } from '../../../../lib/supabase';
import { toast } from 'react-hot-toast';
import { useUser } from '../../../../hooks/useUser';
import { useRouter } from 'next/router';

const MoreInfo = () => {
  const [ageError, setAgeError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useUser();
  const router = useRouter();

  const { age, region, language, about, selectedDays, selectedHours, tags } =
    useAppSelector((state) => state.configuration);
  const dispatch = useAppDispatch();

  const handleAgeChange = (value: string) => {
    if (!/^\d*$/.test(value) || value.length > 3) return;

    dispatch(setAge(value));
    if (ageError) setAgeError('');
  };

  const handleLanguageChange = (value: string) => {
    dispatch(setLanguage(value));
  };

  const handleFinish = async () => {
    setIsLoading(true);
    if (!/(^100$)|^[1-9]\d?$/.test(age)) {
      setAgeError('Must be between 1-100');
      setIsLoading(false);
      return;
    }

    if (+age < 16) {
      setAgeError('You must be 16 or older');
      setIsLoading(false);
      return;
    }

    // console.log(user.steamId);
    const { error } = await supabase
      .from('users')
      .update({
        age: age,
        region: region,
        language: language,
        about: about,
        selected_hours: selectedHours,
        selected_days: selectedDays,
        tags: tags,
        finder_account: true,
      })
      .eq('id', user.id);

    if (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again!');
      setIsLoading(false);
      return;
    }

    toast.success('Configuration complete');
    setIsLoading(false);
    router.push('/buddy-finder/');
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
        items={languages}
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
          onClick={handleFinish}
          variant='primary'
          width={100}
          disabled={!age || !region}
        />
      </div>
    </div>
  );
};

export default MoreInfo;
