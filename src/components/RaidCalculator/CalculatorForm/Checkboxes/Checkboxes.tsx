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
          <div className={styles.text}>Gunpowder and sulfur quantity</div>
          <div
            className={`${styles.checkbox} ${
              selectedCheckbox === 'RESOURCES_QUANTITY' && styles.checked
            }`}
            onClick={() => onSelect('RESOURCES_QUANTITY')}
          />
        </div>
        <div>
          <div className={styles.text}>Selected item quantity</div>
          <div
            className={`${styles.checkbox} ${
              selectedCheckbox === 'ITEM_QUANTITY' && styles.checked
            }`}
            onClick={() => onSelect('ITEM_QUANTITY')}
          />
        </div>
      </div>
    </>
  );
};

export default Checkboxes;
