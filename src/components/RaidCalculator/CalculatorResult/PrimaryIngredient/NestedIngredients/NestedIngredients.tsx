import Image from 'next/image';
import { Item, ItemWithIngredients } from '../../../../../constants/items';
import styles from './NestedIngredients.module.scss';
import {
  capitalizeName,
  hasOwnIngredients,
} from '../../../RaidCalculator.helpers';

type Props = {
  primaryIngredient: ItemWithIngredients;
};

const NestedIngredients = ({ primaryIngredient }: Props) => {
  return (
    <div className={styles['nested-ingredients']}>
      {primaryIngredient.ingredients.map((ingredient) => {
        const {
          data: { image, name },
          amount,
        } = ingredient;

        return (
          <>
            <div
              className={`${styles.ingredient} ${
                hasOwnIngredients(ingredient.data) &&
                styles['parent-ingredient']
              }`}
            >
              <div className={styles.image}>
                <Image src={image} alt={name} fill />
              </div>
              <div className={styles.data}>
                <span>{capitalizeName(name)}</span>
                <span>{amount}</span>
              </div>
            </div>
            {hasOwnIngredients(ingredient.data) &&
              (ingredient.data as ItemWithIngredients).ingredients.map(
                (ingredient) => {
                  const {
                    data: { image, name },
                    amount,
                  } = ingredient;
                  return (
                    <div className={styles.ingredient}>
                      <div className={styles.image}>
                        <Image src={image} alt={name} fill />
                      </div>
                      <div className={styles.data}>
                        <span>{capitalizeName(name)}</span>
                        <span>{amount}</span>
                      </div>
                    </div>
                  );
                }
              )}
          </>
        );
      })}
    </div>
  );
};

export default NestedIngredients;
