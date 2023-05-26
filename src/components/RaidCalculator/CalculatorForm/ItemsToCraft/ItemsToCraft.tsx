import Image from 'next/image';
import styles from './ItemsToCraft.module.scss';
import { ItemToCraft } from '../../../../constants/items';

type Props = {
  itemsToCraft: ItemToCraft[];
  onItemSelect: (selectedItem: ItemToCraft) => void;
  selectedItem: ItemToCraft;
};

const ItemsToCraft = ({ onItemSelect, selectedItem, itemsToCraft }: Props) => {
  const setSelectedItemHandler = (selectedItem: ItemToCraft) =>
    onItemSelect(selectedItem);

  return (
    <>
      <div className={styles.label}>Item to craft:</div>
      <div className={styles.items}>
        {itemsToCraft.map((item) => (
          <div
            key={item.name}
            className={`${styles.item} ${
              selectedItem && selectedItem.name === item.name && styles.selected
            }`}
            onClick={() => setSelectedItemHandler(item)}
          >
            <Image alt={item.name} src={item.image} fill />
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemsToCraft;
