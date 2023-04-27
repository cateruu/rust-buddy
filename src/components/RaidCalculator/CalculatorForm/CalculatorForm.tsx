import ItemsToCraft from './ItemsToCraft/ItemsToCraft';
import styles from './CalculatorForm.module.scss';
import { ItemData, items } from '../../../constants/items';
import Checkboxes from './Checkboxes/Checkboxes';
import { ChangeEvent, useState } from 'react';
import Inputs from './Inputs/Inputs';

const CalculatorForm = () => {
  const [selectedItem, setSelectedItem] = useState<ItemData | null>(null);
  const [selectedCheckbox, setSelectedCheckbox] = useState('');

  const [itemAmount, setItemAmount] = useState(0);
  const [sulfurAmount, setSulfurAmount] = useState(0);
  const [gunPowderAmount, setGunPowderAmount] = useState(0);

  const onItemSelect = (selectedItem: ItemData) =>
    setSelectedItem(selectedItem);
  const onCheckboxSelect = (selectedCheckbox: string) =>
    setSelectedCheckbox(selectedCheckbox);

  const onItemAmountChange = (event: ChangeEvent<HTMLInputElement>) =>
    setItemAmount(+event.target.value);
  const onSulfurAmountChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSulfurAmount(+event.target.value);
  const onGunPowderAmountChange = (event: ChangeEvent<HTMLInputElement>) =>
    setGunPowderAmount(+event.target.value);

  return (
    <form className={styles.form}>
      <div className={styles.label}>Item to craft:</div>
      <ItemsToCraft items={items} onSelect={onItemSelect} />
      {selectedItem && (
        <>
          <div className={styles.label}>Base results on:</div>
          <Checkboxes onSelect={onCheckboxSelect} />
        </>
      )}
      {selectedCheckbox && (
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
      )}
    </form>
  );
};

export default CalculatorForm;
