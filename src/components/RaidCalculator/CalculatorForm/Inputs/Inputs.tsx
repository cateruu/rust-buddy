import { ChangeEvent } from 'react';
import { ItemData } from '../../../../constants/items';
import Input from '../../../UI/Input/Input';
import styles from './Inputs.module.scss';

type Props = {
  selectedCheckbox: string;
  selectedItem: ItemData;
  itemAmount: number;
  sulfurAmount: number;
  gunpowderAmount: number;
  onAmountChange: (e: ChangeEvent<HTMLInputElement>, toChange: string) => void;
};

const Inputs = ({
  selectedCheckbox,
  selectedItem,
  itemAmount,
  sulfurAmount,
  gunpowderAmount,
  onAmountChange,
}: Props) => {
  return (
    <div className={styles.inputs}>
      {selectedCheckbox === 'items' && (
        <Input
          value={itemAmount}
          onChange={(e) => onAmountChange(e, 'item')}
          withLabel
          labelText={`${selectedItem.name} amount:`}
          icon={`${selectedItem.image}`}
        />
      )}

      {selectedCheckbox === 'resources' && (
        <>
          <Input
            value={sulfurAmount}
            onChange={(e) => onAmountChange(e, 'sulfur')}
            withLabel
            labelText='Sulfur amount:'
            icon='/item_images/sulfur.png'
          />
          <Input
            value={gunpowderAmount}
            onChange={(e) => onAmountChange(e, 'gunpowder')}
            withLabel
            labelText='Gun powder amount:'
            icon='/item_images/gun_powder.png'
          />
        </>
      )}
    </div>
  );
};

export default Inputs;
