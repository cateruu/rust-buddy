import ItemsToCraft from './ItemsToCraft/ItemsToCraft';
import styles from './CalculatorForm.module.scss';
import { ItemData, items } from '../../../constants/items';
import Checkboxes from './Checkboxes/Checkboxes';
import { ChangeEvent, useState } from 'react';
import Inputs from './Inputs/Inputs';

const CalculatorForm = () => {
  const [selectedItem, setSelectedItem] = useState<ItemData>(items[0]);
  const [selectedCheckbox, setSelectedCheckbox] = useState('items');

  const [itemAmount, setItemAmount] = useState(0);
  const [sulfurAmount, setSulfurAmount] = useState(0);
  const [gunPowderAmount, setGunPowderAmount] = useState(0);

  const onItemSelect = (selectedItem: ItemData) =>
    setSelectedItem(selectedItem);
  const onCheckboxSelect = (selectedCheckbox: string) =>
    setSelectedCheckbox(selectedCheckbox);

  const onItemAmountChange = (e: ChangeEvent<HTMLInputElement>) =>
    setItemAmount(+e.target.value);
  const onSulfurAmountChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSulfurAmount(+e.target.value);
  const onGunPowderAmountChange = (e: ChangeEvent<HTMLInputElement>) =>
    setGunPowderAmount(+e.target.value);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={(e) => onSubmit(e)}>
      <ItemsToCraft
        items={items}
        onSelect={onItemSelect}
        selectedItem={selectedItem}
      />
      <Checkboxes
        onSelect={onCheckboxSelect}
        selectedCheckbox={selectedCheckbox}
      />
      <Inputs
        selectedCheckbox={selectedCheckbox}
        selectedItem={selectedItem}
        itemAmount={itemAmount}
        sulfurAmount={sulfurAmount}
        gunpowderAmount={gunPowderAmount}
        onItemAmountChange={onItemAmountChange}
        onSulfurAmountChange={onSulfurAmountChange}
        onGunPowderAmountChange={onGunPowderAmountChange}
      />
    </form>
  );
};

export default CalculatorForm;
