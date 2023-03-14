import styles from './RaidCalculator.module.scss';

const RaidCalculator = () => {
  return (
    <div className={styles['raid-calculator']}>
      <div className={styles.heading}>
        <h1>Raid Calculator</h1>
        <p>Advanced rust raid calculator.</p>
      </div>
    </div>
  );
};

export default RaidCalculator;
