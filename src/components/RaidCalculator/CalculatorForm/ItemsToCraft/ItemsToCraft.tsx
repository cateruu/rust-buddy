import Image from 'next/image';
import styles from './ItemsToCraft.module.scss';
import { useState } from 'react';
import { ItemData } from '../../../../constants/items';

type Props = {
  items: ItemData[];
};

const ItemsToCraft = ({ items }: Props) => {
  const [selectedItem, setSelectedItem] = useState<ItemData>(null);

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
          onClick={() => setSelectedItem(item)}
        >
          <Image alt={item.name} src={item.image} fill />
        </div>
      ))}
    </div>
  );
};

export default ItemsToCraft;
