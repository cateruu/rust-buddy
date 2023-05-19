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
  onItemAmountChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSulfurAmountChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onGunPowderAmountChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Inputs = ({
  selectedCheckbox,
  selectedItem,
  itemAmount,
  sulfurAmount,
  gunpowderAmount,
  onItemAmountChange,
  onSulfurAmountChange,
  onGunPowderAmountChange,
}: Props) => {
  return (
    <div className={styles.inputs}>
      {selectedCheckbox === 'items' && (
        <Input
          value={itemAmount}
          onChange={onItemAmountChange}
          withLabel
          labelText={`${selectedItem.name} amount:`}
          icon={`${selectedItem.image}`}
        />
      )}

      {selectedCheckbox === 'resources' && (
        <>
          <Input
            value={sulfurAmount}
            onChange={onSulfurAmountChange}
            withLabel
            labelText='Sulfur amount:'
            icon='/item_images/sulfur.png'
          />
          <Input
            value={gunpowderAmount}
            onChange={onGunPowderAmountChange}
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
