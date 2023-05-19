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
              selectedCheckbox === 'resources' ? styles.checked : ''
            }`}
            onClick={() => onSelect('resources')}
          />
        </div>
        <div>
          <div className={styles.text}>Selected item amount</div>
          <div
            className={`${styles.checkbox} ${
              selectedCheckbox === 'items' ? styles.checked : ''
            }`}
            onClick={() => onSelect('items')}
          />
        </div>
      </div>
    </>
  );
};

export default Checkboxes;
