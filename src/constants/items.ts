export type ItemData = {
  name: string;
  image: string;
};

export const items: ItemData[] = [
  { name: 'rocket', image: '/item_images/rocket.png' },
  { name: 'explosive ammo', image: '/item_images/explosive_ammo.png' },
  {
    name: 'timed explosive charge',
    image: '/item_images/timed_explosive_charge.png',
  },
  {
    name: 'gun powder',
    image: '/item_images/gun_powder.png',
  },
  {
    name: 'sulfur',
    image: '/item_images/sulfur.png',
  },
];
