import { Result } from '../CalculatorForm/CalculatorForm.helpers';
import { capitalizeName } from '../RaidCalculator.helpers';
import styles from './CalculatorResult.module.scss';
import Ingredients from './Ingredients/Ingredients';
import IngredientItem from './Ingredients/IngredientItem/IngredientItem';

type Props = {
  result: Result;
};

const CalculatorResult = ({ result }: Props) => {
  const { itemName, itemAmount, ingredients, selectedCheckbox } = result;

  return (
    <div className={styles['calculator-result']}>
      <div className={styles.result}>
        <div className={styles['medium-text']}>
          {selectedCheckbox === 'RESOURCES_AMOUNT'
            ? "You're able to craft:"
            : 'You want to craft:'}
        </div>
        <span>
          {itemAmount} {`${capitalizeName(itemName)}`}
        </span>
      </div>
      <div className={styles.ingredients}>
        <div className={styles['medium-text-padding']}>Ingredients:</div>
        <Ingredients ingredients={ingredients} />
      </div>
      <div className={styles['resources-needed']}>
        <div className={styles['medium-text-padding']}>
          Total resources needed:
        </div>
        {result.totalResourcesNeeded.map((resource) => (
          <IngredientItem ingredient={resource} key={resource.data.name} />
        ))}
      </div>
    </div>
  );
};

export default CalculatorResult;
