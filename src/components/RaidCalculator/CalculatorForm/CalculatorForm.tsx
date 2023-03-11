import ItemsToCraft from './ItemsToCraft/ItemsToCraft';
import styles from './CalculatorForm.module.scss';
import { items } from '../../../constants/items';

const CalculatorForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.label}>Item to craft:</div>
      <ItemsToCraft items={items} />
    </form>
  );
};

export default CalculatorForm;
