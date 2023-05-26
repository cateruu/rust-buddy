import { ChangeEvent } from 'react';
import Input from '../../../UI/Input/Input';
import styles from './Inputs.module.scss';
import { ItemToCraft } from '../../../../constants/items';

type Props = {
  selectedCheckbox: string;
  selectedItem: ItemToCraft;
  itemAmount: number;
  sulfurAmount: number;
  gunpowderAmount: number;
  onAmountChange: (e: ChangeEvent<HTMLInputElement>, toChange: string) => void;
  sulfurInputError: string;
  itemInputError: string;
  gunPowderInputError: string;
};

const Inputs = ({
  selectedCheckbox,
  selectedItem,
  itemAmount,
  sulfurAmount,
  gunpowderAmount,
  onAmountChange,
  sulfurInputError,
  itemInputError,
  gunPowderInputError,
}: Props) => {
  return (
    <div className={styles.inputs}>
      {selectedCheckbox === 'ITEM_AMOUNT' && (
        <Input
          value={itemAmount}
          onChange={(e) => onAmountChange(e, 'ITEM_AMOUNT')}
          withLabel
          labelText={`${selectedItem.name} amount:`}
          icon={`${selectedItem.image}`}
          error={itemInputError}
        />
      )}

      {selectedCheckbox === 'RESOURCES_AMOUNT' && (
        <>
          <Input
            value={sulfurAmount}
            onChange={(e) => onAmountChange(e, 'SULFUR_AMOUNT')}
            withLabel
            labelText='Sulfur amount:'
            icon='/item_images/sulfur.png'
            error={sulfurInputError}
          />
          <Input
            value={gunpowderAmount}
            onChange={(e) => onAmountChange(e, 'GUN_POWDER_AMOUNT')}
            withLabel
            labelText='Gun powder amount:'
            icon='/item_images/gun_powder.png'
            error={gunPowderInputError}
          />
        </>
      )}
    </div>
  );
};

export default Inputs;
