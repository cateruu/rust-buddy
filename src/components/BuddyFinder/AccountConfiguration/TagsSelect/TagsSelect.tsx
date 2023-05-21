import React from 'react';
import styles from './TagsSelect.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks';
import { availableTags } from './TagSelect.helpers';
import {
  deleteTag,
  nextStep,
  previousStep,
  setTag,
} from '../../../../store/slices/configurationSlice';
import Button from '../../../Button/Button';

const TagsSelect = () => {
  const { tags } = useAppSelector((state) => state.configuration);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Select most appropriate tags</h3>
      <p className={styles.info}>(at least 2)</p>
      <div className={styles['tags-wrapper']}>
        {availableTags.map((tag) => (
          <div
            key={tag}
            className={`${styles.tag} ${tags.includes(tag) && styles.selected}`}
            onClick={() => {
              if (!tags.includes(tag)) {
                dispatch(setTag(tag));
                return;
              }

              dispatch(deleteTag(tag));
            }}
          >
            {tag}
          </div>
        ))}
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
          disabled={tags.length < 2}
        />
      </div>
    </div>
  );
};

export default TagsSelect;
