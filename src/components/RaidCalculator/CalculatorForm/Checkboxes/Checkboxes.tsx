import styles from './Checkboxes.module.scss';

type Props = {
  onSelect: (selectedCheckbox: string) => void;
  selectedCheckbox: string;
};

const Checkboxes = ({ onSelect, selectedCheckbox }: Props) => {
  return (
    <>
      <div className={styles.label}>Base results on:</div>
      <div className={styles.checkboxes}>
        <div>
          <div className={styles.text}>Gunpowder and sulfur amount</div>
          <div
            className={`${styles.checkbox} ${
              selectedCheckbox === 'RESOURCES_AMOUNT' && styles.checked
            }`}
            onClick={() => onSelect('RESOURCES_AMOUNT')}
          />
        </div>
        <div>
          <div className={styles.text}>Selected item amount</div>
          <div
            className={`${styles.checkbox} ${
              selectedCheckbox === 'ITEM_AMOUNT' && styles.checked
            }`}
            onClick={() => onSelect('ITEM_AMOUNT')}
          />
        </div>
      </div>
    </>
  );
};

export default Checkboxes;
