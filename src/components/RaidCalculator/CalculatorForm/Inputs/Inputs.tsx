import { ChangeEvent } from 'react';
import Input from '../../../UI/Input/Input';
import { Item } from '../../../../constants/items';
import { capitalizeName } from '../../RaidCalculator.helpers';

type Props = {
  selectedCheckbox: string;
  selectedItem: Item;
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
    <div>
      {selectedCheckbox === 'ITEM_AMOUNT' && (
        <Input
          value={itemAmount}
          onChange={(e) => onAmountChange(e, 'ITEM_AMOUNT')}
          withLabel
          labelText={`${capitalizeName(selectedItem.name)} amount:`}
          icon={`${selectedItem.image}`}
          error={itemInputError}
          width='100%'
        />
      )}

      {selectedCheckbox === 'RESOURCES_AMOUNT' && (
        <>
          <Input
            value={sulfurAmount}
            onChange={(e) => onAmountChange(e, 'SULFUR_AMOUNT')}
            withLabel
            labelText='Sulfur amount:'
            icon='/item_images/sulfur.webp'
            error={sulfurInputError}
            width='100%'
          />
          <Input
            value={gunpowderAmount}
            onChange={(e) => onAmountChange(e, 'GUN_POWDER_AMOUNT')}
            withLabel
            labelText='Gun powder amount:'
            icon='/item_images/gun_powder.webp'
            error={gunPowderInputError}
            width='100%'
          />
        </>
      )}
    </div>
  );
};

export default Inputs;
