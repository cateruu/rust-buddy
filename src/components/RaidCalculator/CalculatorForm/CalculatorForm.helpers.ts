import {
  Item,
  ItemToCraft,
  ItemWithIngredients,
} from '../../../constants/items';

type ParentIngredient = {
  data: ItemWithIngredients;
  amount: number;
};

const hasOwnIngredients = (ingredientData: ItemWithIngredients | Item) =>
  ingredientData.hasOwnProperty('ingredients');

export const calcResult = (
  item: ItemToCraft,
  itemAmount: number,
  isMixingTableIncluded: boolean
) => {
  const result = [];
  const itemCopy: ItemToCraft = JSON.parse(JSON.stringify(item));
  const { perCraft } = itemCopy;

  if (itemAmount < perCraft) itemAmount = perCraft;

  itemCopy.ingredients.forEach((primaryIngredient) => {
    primaryIngredient.amount =
      (primaryIngredient.amount / perCraft) * itemAmount;

    if (hasOwnIngredients(primaryIngredient.data)) {
      const calcNestedIngredients = (parentIngredient: ParentIngredient) => {
        const { perCraft } = parentIngredient.data;
        parentIngredient.data.ingredients.forEach((childIngredient) => {
          if (childIngredient.data.name === 'charcoal' && isMixingTableIncluded)
            childIngredient.amount = 20;

          childIngredient.amount =
            (childIngredient.amount / perCraft) * parentIngredient.amount;

          if (hasOwnIngredients(childIngredient.data))
            calcNestedIngredients(childIngredient as ParentIngredient);
        });
      };

      calcNestedIngredients(primaryIngredient as ParentIngredient);
    }
    result.push(primaryIngredient);
  });

  return result;
};

export const getAmountAvailialbeToCraft = (
  item: ItemToCraft,
  sulfurAmount: number,
  gunPowderAmount: number
) => {
  const itemCostInSulfur = item.gunPowderPerCraft * 2 + item.sulfurPerCraft;
  const ownedSulfur = sulfurAmount + gunPowderAmount * 2;

  const maxAmountToCraft = Math.floor(ownedSulfur / itemCostInSulfur);
  if (!maxAmountToCraft) return 0;

  // cost in sulfur
  const maxAmountToCraftCost = item.sulfurPerCraft * maxAmountToCraft;
  if (sulfurAmount > maxAmountToCraftCost) return maxAmountToCraft;

  const amountAvailialbeToCraft =
    Math.floor(sulfurAmount / item.sulfurPerCraft) * item.perCraft;

  return amountAvailialbeToCraft;
};
