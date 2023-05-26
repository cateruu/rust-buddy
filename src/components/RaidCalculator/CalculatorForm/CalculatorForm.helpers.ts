import {
  Item,
  ItemToCraft,
  ItemWithIngredients,
} from '../../../constants/items';

type ParentIngredient = {
  data: ItemWithIngredients;
  quantity: number;
};

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

    if (hasOwnIngredients(ingredientA.data)) {
      const calcNestedIngredients = (parentIngredient: ParentIngredient) => {
        const { perCraft } = parentIngredient.data;
        parentIngredient.data.ingredients.forEach((childIngredient) => {
          if (childIngredient.data.name === 'charcoal' && isMixingTableIncluded)
            childIngredient.quantity = 20;

          childIngredient.quantity =
            (childIngredient.quantity / perCraft) * parentIngredient.quantity;

          if (hasOwnIngredients(childIngredient.data))
            calcNestedIngredients(childIngredient as ParentIngredient);
        });
      };

      calcNestedIngredients(ingredientA as ParentIngredient);
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
