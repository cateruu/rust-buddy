import ItemsToCraft from './ItemsToCraft/ItemsToCraft';
import styles from './CalculatorForm.module.scss';
import { ItemData, items } from '../../../constants/items';
import Checkboxes from './Checkboxes/Checkboxes';
import { ChangeEvent, useEffect, useState } from 'react';
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

  useEffect(() => {
    if (itemAmount === 0 && sulfurAmount === 0 && gunPowderAmount === 0) return;
    const resetInputsValues = () => {
      setItemAmount(0);
      setSulfurAmount(0);
      setGunPowderAmount(0);
    };
    resetInputsValues();
  }, [selectedCheckbox, selectedItem]);

  const onAmountChange = (
    e: ChangeEvent<HTMLInputElement>,
    toChange: string
  ) => {
    const amount = +e.target.value;
    if (isNaN(amount)) return;
    if (amount > 1000000) return;

    if (toChange === 'item') {
      setItemAmount(amount);
      return;
    }

    if (toChange === 'sulfur') {
      setSulfurAmount(amount);
      return;
    }

    if (toChange === 'gunpowder') {
      setGunPowderAmount(amount);
      return;
    }
  };

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
        onAmountChange={onAmountChange}
      />
    </form>
  );
};

export default CalculatorForm;
