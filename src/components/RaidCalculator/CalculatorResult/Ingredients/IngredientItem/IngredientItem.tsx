import Image from 'next/image';
import styles from './IngredientItem.module.scss';
import { Ingredient } from '../../../../../constants/items';
import {
  capitalizeName,
  hasOwnIngredients,
} from '../../../RaidCalculator.helpers';

type Props = {
  primaryIngredient?: boolean;
  parentIngredient?: boolean;
  childIngredient?: boolean;
  isLast?: boolean;
  ingredient: Ingredient;
};

const IngredientItem = ({
  primaryIngredient,
  parentIngredient,
  childIngredient,
  ingredient,
  isLast,
}: Props) => {
  const {
    data: { image, name },
    amount,
  } = ingredient;

  const isMarginNeeded =
    primaryIngredient && !hasOwnIngredients(ingredient.data) && !isLast;

  return (
    <div
      className={`${styles.ingredient} ${
        primaryIngredient && styles['primary-ingredient']
      } ${parentIngredient && styles['parent-ingredient']} ${
        childIngredient && styles['child-ingredient']
      } ${isMarginNeeded && styles['primary-ingredient-margin']}`}
    >
      <div
        className={`${primaryIngredient ? styles['big-image'] : styles.image}`}
      >
        <Image src={image} alt={name} fill />
      </div>
      <div className={styles.data}>
        <span>{capitalizeName(name)}</span>
        <span>{amount}</span>
      </div>
    </div>
  );
};

export default IngredientItem;
