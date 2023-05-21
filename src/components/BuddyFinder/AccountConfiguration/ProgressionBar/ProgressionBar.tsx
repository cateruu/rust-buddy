import React from 'react';
import styles from './ProgressionBar.module.scss';
import { configSteps } from '../AccountConfiguration.helpers';

interface Props {
  activeStep: number;
}

const ProgressionBar = ({ activeStep }: Props) => {
  return (
    <div className={styles.container}>
      {configSteps.map((step, index) => (
        <>
          <div
            key={index}
            className={`${styles.step} ${
              activeStep === index
                ? styles.current
                : index < activeStep && styles.completed
            }`}
          >
            {index + 1}
          </div>
          {index >= 0 && index < configSteps.length - 1 && (
            <div
              className={`${styles.line} ${
                index < activeStep && styles.completed
              }`}
            ></div>
          )}
        </>
      ))}
    </div>
  );
};

export default ProgressionBar;
