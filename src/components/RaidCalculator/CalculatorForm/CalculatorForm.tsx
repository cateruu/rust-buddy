import ItemsToCraft from './ItemsToCraft/ItemsToCraft';
import styles from './CalculatorForm.module.scss';
import { ItemToCraft, itemsToCraft } from '../../../constants/items';
import Checkboxes from './Checkboxes/Checkboxes';
import { ChangeEvent, useEffect, useState } from 'react';
import Inputs from './Inputs/Inputs';
import Button from '../../UI/Button/Button';
import { calcResult } from './CalculatorForm.helpers';

type Props = {
  onCalculate: () => void;
};

const CalculatorForm = ({ onCalculate }: Props) => {
  const [selectedItem, setSelectedItem] = useState<ItemToCraft>(
    itemsToCraft[0]
  );
  const [selectedCheckbox, setSelectedCheckbox] = useState('ITEM_AMOUNT');

  const [itemAmount, setItemAmount] = useState(0);
  const [sulfurAmount, setSulfurAmount] = useState(0);
  const [gunPowderAmount, setGunPowderAmount] = useState(0);

  const [sulfurInputError, setSulfurInputError] = useState('');
  const [itemInputError, setItemInputError] = useState('');
  const [gunPowderInputError, setGunPowderInputError] = useState('');

  const isThereAnInputError =
    sulfurInputError || itemInputError || gunPowderInputError ? true : false;

  const isEachInputEmpty = !itemAmount && !sulfurAmount && !gunPowderAmount;

  const onItemSelect = (selectedItem: ItemToCraft) =>
    setSelectedItem(selectedItem);
  const onCheckboxSelect = (selectedCheckbox: string) =>
    setSelectedCheckbox(selectedCheckbox);

  const resetInputErrors = () => {
    setGunPowderInputError('');
    setSulfurInputError('');
    setItemInputError('');
  };

  const resetInputValues = () => {
    setItemAmount(0);
    setSulfurAmount(0);
    setGunPowderAmount(0);
  };

  const onAmountChange = (
    e: ChangeEvent<HTMLInputElement>,
    toChange: string
  ) => {
    const amount = +e.target.value;

    if (isNaN(amount)) return;
    if (amount > 1000000) return;

    if (isThereAnInputError) resetInputErrors();

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

  const areInputsValid = () => {
    const errorMsg = 'Value must be greater than 0.';
    if (!itemAmount && selectedCheckbox === 'ITEM_AMOUNT') {
      setItemInputError(errorMsg);
      return false;
    }

    if (selectedCheckbox === 'RESOURCES_AMOUNT') {
      if (!sulfurAmount) {
        setSulfurInputError(errorMsg);
      }

      if (!gunPowderAmount) {
        setGunPowderInputError(errorMsg);
        return false;
      }
    }

    return true;
  };

  const calculateResultHandler = () => {
    if (!areInputsValid()) return;
  };

  useEffect(() => {
    if (isThereAnInputError) resetInputErrors();
    if (!isEachInputEmpty) resetInputValues();
  }, [selectedCheckbox, selectedItem]);

  return (
    <div className={styles.form}>
      <ItemsToCraft
        itemsToCraft={itemsToCraft}
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
        sulfurInputError={sulfurInputError}
        gunPowderInputError={gunPowderInputError}
        itemInputError={itemInputError}
      />
      <Button
        text='Calculate'
        variant='primary'
        onClick={calculateResultHandler}
      />
    </div>
  );
};

export default CalculatorForm;
