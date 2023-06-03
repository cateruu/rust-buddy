import { Item } from '../../../constants/items';
import { hasOwnIngredients } from '../RaidCalculator.helpers';

type Ingredient = {
  data: Item;
  amount: number;
};

export type Result = {
  itemName: string;
  itemImage: string;
  itemAmount: number;
  ingredients: {
    data: Item;
    amount: number;
  }[];
  totalResourcesNeeded: Ingredient[];
};

const calcTotalResourcesNeeded = (
  ingredient: Ingredient,
  array: Ingredient[]
) => {
  const isAResource = !hasOwnIngredients(ingredient.data);
  if (!isAResource) return;

  const resourceIndex = array.findIndex(
    (resource) => resource.data.name === ingredient.data.name
  );

  resourceIndex === -1
    ? array.push({
        data: ingredient.data,
        amount: ingredient.amount,
      })
    : (array[resourceIndex].amount += ingredient.amount);
};

export const calcResult = (
  item: Item,
  itemAmount: number,
  isMixingTableIncluded: boolean
) => {
  const itemCopy: Item = JSON.parse(JSON.stringify(item));
  const result = {
    itemName: itemCopy.name,
    itemImage: itemCopy.image,
    itemAmount,
    ingredients: itemCopy.ingredients,
    totalResourcesNeeded: [],
  };

  const { perCraft } = itemCopy;
  const { totalResourcesNeeded } = result;

  itemAmount = Math.ceil(itemAmount / perCraft) * perCraft;

  itemCopy.ingredients.forEach((primaryIngredient) => {
    primaryIngredient.amount =
      (primaryIngredient.amount / perCraft) * itemAmount;

    calcTotalResourcesNeeded(primaryIngredient, totalResourcesNeeded);

    if (hasOwnIngredients(primaryIngredient.data)) {
      const calcNestedIngredients = (parentIngredient: Ingredient) => {
        const { perCraft } = parentIngredient.data;
        parentIngredient.data.ingredients.forEach((childIngredient) => {
          if (childIngredient.data.name === 'charcoal' && isMixingTableIncluded)
            childIngredient.amount = 20;

          childIngredient.amount =
            Math.ceil(parentIngredient.amount / perCraft) *
            childIngredient.amount;

          calcTotalResourcesNeeded(childIngredient, totalResourcesNeeded);

          if (hasOwnIngredients(childIngredient.data))
            calcNestedIngredients(childIngredient);
        });
      };
      calcNestedIngredients(primaryIngredient);
    }
  });

  return result;
};

export const getAmountAvailialbeToCraft = (
  item: Item,
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
