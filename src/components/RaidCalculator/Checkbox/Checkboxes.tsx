import { useState } from 'react';
import styles from './Checkboxes.module.scss';

const Checkboxes = () => {
  const [checked, setChecked] = useState<null | string>(null);

  const setCheckedOption = (option: string) => {
    option === 'items' ? setChecked('items') : setChecked('resources');
  };

  return (
    <div className={styles.checkboxes}>
      <div>
        <div className={styles.text}>Gunpowder and sulfur amount</div>
        <div
          className={`${styles.checkbox} ${
            checked === 'resources' ? styles.checked : ''
          }`}
          onClick={() => setCheckedOption('resources')}
        />
      </div>
      <div>
        <div className={styles.text}>Selected item amount</div>
        <div
          className={`${styles.checkbox} ${
            checked === 'items' ? styles.checked : ''
          }`}
          onClick={() => setCheckedOption('items')}
        />
      </div>
    </div>
  );
};

export default Checkboxes;
