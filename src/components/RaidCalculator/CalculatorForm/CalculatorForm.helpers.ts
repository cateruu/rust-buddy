import {
  Item,
  ItemToCraft,
  ItemWithIngredients,
} from '../../../constants/items';

const hasOwnIngredients = (ingredientData: ItemWithIngredients | Item) =>
  ingredientData.hasOwnProperty('ingredients');

export const calcResult = (
  item: ItemToCraft,
  itemQuantity: number,
  isMixingTableIncluded: boolean
) => {
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
          if (ingredientB.data.name === 'charcoal' && isMixingTableIncluded)
            ingredientB.quantity = 20;

          ingredientB.quantity =
            (ingredientB.quantity / perCraft) * ingredientA.quantity;

          if (hasOwnIngredients(ingredientB.data)) {
            const { perCraft } = ingredientB.data as ItemWithIngredients;
            (ingredientB.data as ItemWithIngredients).ingredients.forEach(
              (ingredientC) => {
                if (
                  ingredientC.data.name === 'charcoal' &&
                  isMixingTableIncluded
                )
                  ingredientC.quantity = 20;

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

export const getQuantityAvailialbeToCraft = (
  item: ItemToCraft,
  sulfurQuantity: number,
  gunPowderQuantity: number
) => {
  const itemCostInSulfur = item.gunPowderPerCraft * 2 + item.sulfurPerCraft;
  const ownedSulfur = sulfurQuantity + gunPowderQuantity * 2;

  const maxQuantityToCraft = Math.floor(ownedSulfur / itemCostInSulfur);
  if (!maxQuantityToCraft) return 0;

  // cost in sulfur
  const maxQuantityToCraftCost = item.sulfurPerCraft * maxQuantityToCraft;
  if (sulfurQuantity > maxQuantityToCraftCost) return maxQuantityToCraft;

  const quantityAvailialbeToCraft =
    Math.floor(sulfurQuantity / item.sulfurPerCraft) * item.perCraft;

  return quantityAvailialbeToCraft;
};
