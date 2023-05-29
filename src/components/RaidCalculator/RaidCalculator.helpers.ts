import { Ingredient } from '../../constants/items';

export const hasOwnIngredients = (ingredient: Ingredient) =>
  ingredient.hasOwnProperty('ingredients');

export const capitalizeName = (name: string) =>
  `${name[0].toUpperCase()}${name.slice(1)}`;
