import { useState } from 'react';
import CalculatorForm from '../../components/RaidCalculator/CalculatorForm/CalculatorForm';
import styles from './RaidCalculator.module.scss';
import { Result } from '../../components/RaidCalculator/CalculatorForm/CalculatorForm.helpers';
import CalculatorResult from '../../components/RaidCalculator/CalculatorResult/CalculatorResult';
import Head from 'next/head';

const RaidCalculator = () => {
  const [result, setResult] = useState<Result | null>(null);

  return (
    <>
      <Head>
        <title>Rust Buddy - Raid Calculator</title>
        <meta
          name='description'
          content='Rust raid calculator that allows you to calculate the craft cost of items needed for the raid.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles['raid-calculator']}>
        <div className={styles.heading}>
          <h1>Raid Calculator</h1>
          <p>Advanced rust raid calculator.</p>
        </div>
        <div className={styles['calculator-container']}>
          <CalculatorForm onCalculate={(result: Result) => setResult(result)} />
          {result && <CalculatorResult result={result} />}
        </div>
      </div>
    </>
  );
};

export default RaidCalculator;
