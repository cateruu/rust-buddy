import ItemsToCraft from './ItemsToCraft/ItemsToCraft';
import styles from './CalculatorForm.module.scss';
import { Item, itemsToCraft } from '../../../constants/items';
import Checkboxes, { CheckboxesData } from './Checkboxes/Checkboxes';
import { ChangeEvent, useEffect, useState } from 'react';
import Inputs from './Inputs/Inputs';
import Button from '../../UI/Button/Button';
import {
  Result,
  calcResult,
  getAmountAvailialbeToCraft,
} from './CalculatorForm.helpers';

type Props = {
  onCalculate: (result: Result) => void;
};

const CalculatorForm = ({ onCalculate }: Props) => {
  const [selectedItem, setSelectedItem] = useState<Item>(itemsToCraft[0]);
  const [checkboxesData, setCheckboxesData] = useState({
    selectedCheckbox: 'ITEM_AMOUNT',
    isMixingTableIncluded: false,
  });

  const { selectedCheckbox } = checkboxesData;

  const [itemAmount, setItemAmount] = useState(0);
  const [sulfurAmount, setSulfurAmount] = useState(0);
  const [gunPowderAmount, setGunPowderAmount] = useState(0);

  const [sulfurInputError, setSulfurInputError] = useState('');
  const [itemInputError, setItemInputError] = useState('');
  const [gunPowderInputError, setGunPowderInputError] = useState('');

  const isThereAnInputError =
    sulfurInputError || itemInputError || gunPowderInputError;

  const isEachInputEmpty = !itemAmount && !sulfurAmount && !gunPowderAmount;

  const itemSelectHandler = (selectedItem: Item) =>
    setSelectedItem(selectedItem);
  const checkboxSelectHandler = (checkboxesData: CheckboxesData) =>
    setCheckboxesData(checkboxesData);

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

  const amountChangeHandler = (
    e: ChangeEvent<HTMLInputElement>,
    toChange: string
  ) => {
    const amount = +e.target.value;

    if (isNaN(amount)) return;
    if (amount > 1000000) return;

    if (isThereAnInputError) resetInputErrors();

    if (toChange === 'ITEM_AMOUNT') {
      setItemAmount(amount);
      return;
    }

    if (toChange === 'SULFUR_AMOUNT') {
      setSulfurAmount(amount);
      return;
    }

    if (toChange === 'GUN_POWDER_AMOUNT') {
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

    if (selectedCheckbox === 'RESOURCES_AMOUNT' && !sulfurAmount) {
      setSulfurInputError(errorMsg);
      return false;
    }

    return true;
  };

  const calcResultHandler = () => {
    if (!areInputsValid()) return;

    if (selectedCheckbox === 'ITEM_AMOUNT') {
      onCalculate(calcResult(selectedItem, itemAmount, checkboxesData));
      return;
    }

    if (selectedCheckbox === 'RESOURCES_AMOUNT')
      onCalculate(
        calcResult(
          selectedItem,
          getAmountAvailialbeToCraft(
            selectedItem,
            sulfurAmount,
            gunPowderAmount
          ),
          checkboxesData
        )
      );
  };

  useEffect(() => {
    if (isThereAnInputError) resetInputErrors();
    if (!isEachInputEmpty && selectedCheckbox !== 'RESOURCES_AMOUNT')
      resetInputValues();
  }, [selectedCheckbox, selectedItem]);

  return (
    <div className={styles['calculator-form']}>
      <ItemsToCraft
        itemsToCraft={itemsToCraft}
        onItemSelect={itemSelectHandler}
        selectedItem={selectedItem}
      />
      <Checkboxes
        onCheckboxSelect={checkboxSelectHandler}
        checkboxesData={checkboxesData}
      />
      <Inputs
        selectedCheckbox={selectedCheckbox}
        selectedItem={selectedItem}
        itemAmount={itemAmount}
        sulfurAmount={sulfurAmount}
        gunpowderAmount={gunPowderAmount}
        onAmountChange={amountChangeHandler}
        sulfurInputError={sulfurInputError}
        gunPowderInputError={gunPowderInputError}
        itemInputError={itemInputError}
      />
      <Button
        text='Calculate'
        variant='primary'
        onClick={calcResultHandler}
        width={'100%'}
      />
    </div>
  );
};

export default CalculatorForm;
