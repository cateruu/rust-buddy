import {
  Item,
  ItemToCraft,
  ItemWithIngredients,
} from '../../../constants/items';

const hasOwnIngredients = (ingredientData: ItemWithIngredients | Item) =>
  ingredientData.hasOwnProperty('ingredients');

export const calcResult = (item: ItemToCraft, itemQuantity: number) => {
  const result = [];
  const itemCopy: ItemToCraft = JSON.parse(JSON.stringify(item));
  const { perCraft } = itemCopy;

  itemCopy.ingredients.forEach((ingredientA) => {
    ingredientA.quantity = (ingredientA.quantity / perCraft) * itemQuantity;

    // calc all nested ingredients
    if (hasOwnIngredients(ingredientA.data)) {
      const { perCraft } = ingredientA.data as ItemWithIngredients;
      (ingredientA.data as ItemWithIngredients).ingredients.forEach(
        (ingredientB) => {
          ingredientB.quantity =
            (ingredientB.quantity / perCraft) * ingredientA.quantity;

          if (hasOwnIngredients(ingredientB.data)) {
            const { perCraft } = ingredientB.data as ItemWithIngredients;
            (ingredientB.data as ItemWithIngredients).ingredients.forEach(
              (ingredientC) => {
                ingredientC.quantity =
                  (ingredientC.quantity / perCraft) * ingredientB.quantity;
              }
            );
          }
        }
      );
    }

    result.push(ingredientA);
  });

  return result;
};
