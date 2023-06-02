import styles from './Checkboxes.module.scss';

export type CheckboxesData = {
  selectedCheckbox: string;
  isMixingTableIncluded: boolean;
};

type Props = {
  onCheckboxSelect: (checkboxesData: CheckboxesData) => void;
  checkboxesData: CheckboxesData;
};

const Checkboxes = ({ onCheckboxSelect, checkboxesData }: Props) => {
  const { selectedCheckbox, isMixingTableIncluded } = checkboxesData;

  return (
    <>
      <div className={styles.label}>Base results on:</div>
      <div className={styles.checkboxes}>
        <div className={styles['checkbox-container']}>
          <div className={styles.text}>Gunpowder and sulfur amount</div>
          <div
            className={`${styles.checkbox} ${
              selectedCheckbox === 'RESOURCES_AMOUNT' && styles.checked
            }`}
            onClick={() =>
              onCheckboxSelect({
                selectedCheckbox: 'RESOURCES_AMOUNT',
                isMixingTableIncluded,
              })
            }
          />
        </div>
        <div className={styles['checkbox-container']}>
          <div className={styles.text}>Selected item amount</div>
          <div
            className={`${styles.checkbox} ${
              selectedCheckbox === 'ITEM_AMOUNT' && styles.checked
            }`}
            onClick={() =>
              onCheckboxSelect({
                selectedCheckbox: 'ITEM_AMOUNT',
                isMixingTableIncluded,
              })
            }
          />
        </div>
        <div className={styles['checkbox-container-margin']}>
          <div className={styles.text}>Include crafting using mixing table</div>
          <div
            className={`${styles.checkbox} ${
              isMixingTableIncluded && styles.checked
            }`}
            onClick={() =>
              onCheckboxSelect({
                selectedCheckbox,
                isMixingTableIncluded: !isMixingTableIncluded,
              })
            }
          />
        </div>
      </div>
    </>
  );
};

export default Checkboxes;
