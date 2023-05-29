import { Item, ItemWithIngredients } from '../../constants/items';

export const hasOwnIngredients = (ingredient: ItemWithIngredients | Item) =>
  ingredient.hasOwnProperty('ingredients');

export const capitalizeName = (name: string) =>
  `${name[0].toUpperCase()}${name.slice(1)}`;
