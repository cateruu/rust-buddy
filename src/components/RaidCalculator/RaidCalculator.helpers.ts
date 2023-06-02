import { Item } from '../../constants/items';

export const hasOwnIngredients = (item: Item) =>
  item.hasOwnProperty('ingredients');

export const capitalizeName = (name: string) =>
  `${name[0].toUpperCase()}${name.slice(1)}`;
