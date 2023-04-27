import Image from 'next/image';
import styles from './ItemsToCraft.module.scss';
import { useState } from 'react';
import { ItemData } from '../../../../constants/items';

type Props = {
  items: ItemData[];
  onSelect: (selectedItem: ItemData) => void;
};

const ItemsToCraft = ({ items, onSelect }: Props) => {
  const [selectedItem, setSelectedItem] = useState<ItemData>(null);

  const setSelectedItemHandler = (selectedItem: ItemData) => {
    setSelectedItem(selectedItem);
    onSelect(selectedItem);
  };

  return (
    <div className={styles.items}>
      {items.map((item) => (
        <div
          key={item.name}
          className={`${styles.item} ${
            selectedItem && selectedItem.name === item.name
              ? `${styles.selected}`
              : ''
          }`}
          onClick={() => setSelectedItemHandler(item)}
        >
          <Image alt={item.name} src={item.image} fill />
        </div>
      ))}
    </div>
  );
};

export default ItemsToCraft;
