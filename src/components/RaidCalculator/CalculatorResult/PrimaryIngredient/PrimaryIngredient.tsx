import Image from 'next/image';
import { Item } from '../../../../constants/items';
import styles from './PrimaryIngredient.module.scss';
import NestedIngredients from './NestedIngredients/NestedIngredients';
import {
  capitalizeName,
  hasOwnIngredients,
} from '../../RaidCalculator.helpers';

type Props = {
  primaryIngredient: { data: Item; amount: number };
};

const PrimaryIngredient = ({ primaryIngredient }: Props) => {
  const {
    data: { image, name },
    amount,
  } = primaryIngredient;

  return (
    <>
      <div
        className={`${styles['primary-ingredient']} ${
          !hasOwnIngredients(primaryIngredient.data) && styles.margin
        }`}
      >
        <div className={styles.image}>
          <Image src={image} alt={name} fill />
        </div>
        <div className={styles.data}>
          <span className={styles['medium-text']}>{capitalizeName(name)}</span>
          <span className={styles['medium-text']}>{amount}</span>
        </div>
      </div>
      {hasOwnIngredients(primaryIngredient.data) && (
        <NestedIngredients primaryIngredient={primaryIngredient.data} />
      )}
    </>
  );
};

export default PrimaryIngredient;
