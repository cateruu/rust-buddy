import { ChangeEvent } from 'react';
import Input from '../../../UI/Input/Input';
import styles from './Inputs.module.scss';
import { ItemToCraft } from '../../../../constants/items';

type Props = {
  selectedCheckbox: string;
  selectedItem: ItemToCraft;
  itemQuantity: number;
  sulfurQuantity: number;
  gunpowderQuantity: number;
  onQuantityChange: (
    e: ChangeEvent<HTMLInputElement>,
    toChange: string
  ) => void;
  sulfurInputError: string;
  itemInputError: string;
  gunPowderInputError: string;
};

const Inputs = ({
  selectedCheckbox,
  selectedItem,
  itemQuantity,
  sulfurQuantity,
  gunpowderQuantity,
  onQuantityChange,
  sulfurInputError,
  itemInputError,
  gunPowderInputError,
}: Props) => {
  return (
    <div className={styles.inputs}>
      {selectedCheckbox === 'ITEM_QUANTITY' && (
        <Input
          value={itemQuantity}
          onChange={(e) => onQuantityChange(e, 'item')}
          withLabel
          labelText={`${selectedItem.name} quantity:`}
          icon={`${selectedItem.image}`}
          error={itemInputError}
        />
      )}

      {selectedCheckbox === 'RESOURCES_QUANTITY' && (
        <>
          <Input
            value={sulfurQuantity}
            onChange={(e) => onQuantityChange(e, 'sulfur')}
            withLabel
            labelText='Sulfur quantity:'
            icon='/item_images/sulfur.png'
            error={sulfurInputError}
          />
          <Input
            value={gunpowderQuantity}
            onChange={(e) => onQuantityChange(e, 'gunpowder')}
            withLabel
            labelText='Gun powder quantity:'
            icon='/item_images/gun_powder.png'
            error={gunPowderInputError}
          />
        </>
      )}
    </div>
  );
};

export default Inputs;
