import ItemsToCraft from './ItemsToCraft/ItemsToCraft';
import styles from './CalculatorForm.module.scss';
import { ItemToCraft, itemsToCraft } from '../../../constants/items';
import Checkboxes, { CheckboxesData } from './Checkboxes/Checkboxes';
import { ChangeEvent, useEffect, useState } from 'react';
import Inputs from './Inputs/Inputs';
import Button from '../../UI/Button/Button';
import {
  calcResult,
  getQuantityAvailialbeToCraft,
} from './CalculatorForm.helpers';

type Props = {
  onCalculate: () => void;
};

const CalculatorForm = ({ onCalculate }: Props) => {
  const [selectedItem, setSelectedItem] = useState<ItemToCraft>(
    itemsToCraft[0]
  );
  const [checkboxesData, setCheckboxesData] = useState({
    selectedCheckbox: 'ITEM_QUANTITY',
    isMixingTableIncluded: false,
  });

  const [itemQuantity, setItemQuantity] = useState(0);
  const [sulfurQuantity, setSulfurQuantity] = useState(0);
  const [gunPowderQuantity, setGunPowderQuantity] = useState(0);

  const [sulfurInputError, setSulfurInputError] = useState('');
  const [itemInputError, setItemInputError] = useState('');
  const [gunPowderInputError, setGunPowderInputError] = useState('');

  const isThereAnInputError =
    sulfurInputError || itemInputError || gunPowderInputError;

  const isEachInputEmpty =
    !itemQuantity && !sulfurQuantity && !gunPowderQuantity;

  const onItemSelect = (selectedItem: ItemToCraft) =>
    setSelectedItem(selectedItem);
  const onCheckboxSelect = (checkboxesData: CheckboxesData) =>
    setCheckboxesData(checkboxesData);

  const resetInputErrors = () => {
    setGunPowderInputError('');
    setSulfurInputError('');
    setItemInputError('');
  };

  const resetInputValues = () => {
    setItemQuantity(0);
    setSulfurQuantity(0);
    setGunPowderQuantity(0);
  };

  const onQuantityChange = (
    e: ChangeEvent<HTMLInputElement>,
    toChange: string
  ) => {
    const quantity = +e.target.value;

    if (isNaN(quantity)) return;
    if (quantity > 1000000) return;

    if (isThereAnInputError) resetInputErrors();

    if (toChange === 'item') {
      setItemQuantity(quantity);
      return;
    }

    if (toChange === 'sulfur') {
      setSulfurQuantity(quantity);
      return;
    }

    if (toChange === 'gunpowder') {
      setGunPowderQuantity(quantity);
      return;
    }
  };

  const areInputsValid = () => {
    const { selectedCheckbox } = checkboxesData;
    const errorMsg = 'Value must be greater than 0.';

    if (!itemQuantity && selectedCheckbox === 'ITEM_QUANTITY') {
      setItemInputError(errorMsg);
      return false;
    }

    if (selectedCheckbox === 'RESOURCES_QUANTITY') {
      if (!sulfurQuantity) {
        setSulfurInputError(errorMsg);
      }

      if (!gunPowderQuantity) {
        setGunPowderInputError(errorMsg);
      }

      return !sulfurQuantity || !gunPowderQuantity;
    }

    return true;
  };

  const calculateResultHandler = () => {
    if (!areInputsValid()) return;
    console.log(
      calcResult(
        selectedItem,
        itemQuantity,
        checkboxesData.isMixingTableIncluded
      )
    );
  };

  useEffect(() => {
    if (isThereAnInputError) resetInputErrors();
    if (!isEachInputEmpty) resetInputValues();
  }, [checkboxesData, selectedItem]);

  return (
    <div className={styles.form}>
      <ItemsToCraft
        itemsToCraft={itemsToCraft}
        onSelect={onItemSelect}
        selectedItem={selectedItem}
      />
      <Checkboxes
        onCheckboxSelect={onCheckboxSelect}
        checkboxesData={checkboxesData}
      />
      <Inputs
        selectedCheckbox={checkboxesData.selectedCheckbox}
        selectedItem={selectedItem}
        itemQuantity={itemQuantity}
        sulfurQuantity={sulfurQuantity}
        gunpowderQuantity={gunPowderQuantity}
        onQuantityChange={onQuantityChange}
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
