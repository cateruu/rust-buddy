import Image from 'next/image';
import styles from './ItemsToCraft.module.scss';
import { ItemData } from '../../../../constants/items';

type Props = {
  items: ItemData[];
  onSelect: (selectedItem: ItemData) => void;
  selectedItem: ItemData;
};

const ItemsToCraft = ({ items, onSelect, selectedItem }: Props) => {
  const setSelectedItemHandler = (selectedItem: ItemData) =>
    onSelect(selectedItem);

  return (
    <>
      <div className={styles.label}>Item to craft:</div>
      <div className={styles.items}>
        {items.map((item) => (
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
