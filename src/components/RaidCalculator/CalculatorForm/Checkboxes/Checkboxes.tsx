import { useState } from 'react';
import styles from './Checkboxes.module.scss';

type Props = {
  onSelect: (selectedCheckbox: string) => void;
};

const Checkboxes = ({ onSelect }: Props) => {
  const [selectedCheckbox, setSelectedCheckbox] = useState<null | string>(null);

  const setCheckboxHandler = (selectedCheckbox: string) => {
    selectedCheckbox === 'items'
      ? setSelectedCheckbox('items')
      : setSelectedCheckbox('resources');
    onSelect(selectedCheckbox);
  };

  return (
    <div className={styles.checkboxes}>
      <div>
        <div className={styles.text}>Gunpowder and sulfur amount</div>
        <div
          className={`${styles.checkbox} ${
            selectedCheckbox === 'resources' ? styles.checked : ''
          }`}
          onClick={() => setCheckboxHandler('resources')}
        />
      </div>
      <div>
        <div className={styles.text}>Selected item amount</div>
        <div
          className={`${styles.checkbox} ${
            selectedCheckbox === 'items' ? styles.checked : ''
          }`}
          onClick={() => setCheckboxHandler('items')}
        />
      </div>
    </div>
  );
};

export default Checkboxes;
