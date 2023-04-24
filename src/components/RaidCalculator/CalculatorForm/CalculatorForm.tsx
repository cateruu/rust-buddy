import ItemsToCraft from './ItemsToCraft/ItemsToCraft';
import styles from './CalculatorForm.module.scss';
import { items } from '../../../constants/items';
import Checkboxes from '../Checkbox/Checkboxes';

const CalculatorForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.label}>Item to craft:</div>
      <ItemsToCraft items={items} />
      <div className={styles.label}>Base results on:</div>
      <Checkboxes />
    </form>
  );
};

export default CalculatorForm;
