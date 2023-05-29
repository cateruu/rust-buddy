import { useState } from 'react';
import CalculatorForm from '../../components/RaidCalculator/CalculatorForm/CalculatorForm';
import styles from './RaidCalculator.module.scss';
import { Result } from '../../components/RaidCalculator/CalculatorForm/CalculatorForm.helpers';
import CalculatorResult from '../../components/RaidCalculator/CalculatorResult/CalculatorResult';

const RaidCalculator = () => {
  const [result, setResult] = useState<Result | null>(null);

  return (
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
  );
};

export default RaidCalculator;
