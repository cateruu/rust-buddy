import React, { useState } from 'react';
import styles from './AccountConfiguration.module.scss';
import ProgressionBar from './ProgressionBar/ProgressionBar';
import { configSteps } from './AccountConfiguration.helpers';

const AccountConfiguration = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <>
      <section className={styles.header}>
        <h2 className={styles.title}>Configure your account</h2>
        <p className={styles.info}>
          Some of the data will be taken from your steam profile.
        </p>
        <p className={styles.info}>(Name, Steam Link, Country)</p>
        <ProgressionBar activeStep={activeStep} />
      </section>
      <section className={styles['content-wrapper']}>
        {configSteps[activeStep].element}
      </section>
    </>
  );
};

export default AccountConfiguration;
