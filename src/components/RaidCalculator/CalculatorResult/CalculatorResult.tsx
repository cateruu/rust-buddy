import { Result } from '../CalculatorForm/CalculatorForm.helpers';
import { capitalizeName } from '../RaidCalculator.helpers';
import styles from './CalculatorResult.module.scss';
import PrimaryIngredient from './PrimaryIngredient/PrimaryIngredient';

type Props = {
  result: Result;
};

const CalculatorResult = ({ result }: Props) => {
  const { itemName, itemAmount, ingredients } = result;

  return (
    <div className={styles['calculator-result']}>
      <div className={styles.result}>
        <div className={styles['medium-text']}>You want to craft:</div>
        <span>
          {itemAmount}{' '}
          {`${capitalizeName(itemName)}${itemAmount > 1 ? 's' : ''}`}
        </span>
      </div>
      <div className={styles.ingredients}>
        <div className={styles['medium-text-padding']}>Ingredients:</div>
        {ingredients.map((primaryIngredient) => (
          <PrimaryIngredient primaryIngredient={primaryIngredient} />
        ))}
      </div>
    </div>
  );
};

export default CalculatorResult;
