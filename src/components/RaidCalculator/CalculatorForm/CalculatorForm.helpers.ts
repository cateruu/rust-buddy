import {
  Item,
  ItemToCraft,
  ItemWithIngredients,
} from '../../../constants/items';

const hasOwnIngredients = (ingredientData: ItemWithIngredients | Item) =>
  ingredientData.hasOwnProperty('ingredients');

const calcIngredientCost = (data: ItemWithIngredients, quantity: number) => {
  const ingredientCost = [];
  const { perCraft } = data as ItemWithIngredients;

  data.ingredients.forEach((ingredient) => {
    const parentIngredientQuantity =
      (ingredient.quantity / perCraft) * quantity;

    let nestedIngredientCost = [];

    if (hasOwnIngredients(ingredient.data)) {
      const { perCraft } = ingredient.data as ItemWithIngredients;
      (ingredient.data as ItemWithIngredients).ingredients.forEach(
        (ingredient) => {
          nestedIngredientCost.push({
            data: ingredient.data,
            quantity:
              (ingredient.quantity / perCraft) * parentIngredientQuantity,
          });
        }
      );
    }

    ingredientCost.push({
      data: ingredient.data,
      quantity: parentIngredientQuantity,
      ingredientCost: nestedIngredientCost,
    });
  });

  return ingredientCost;
};

export const calcResult = (item: ItemToCraft, enteredQuantity: number) => {
  const result = [];

  item.ingredients.forEach((ingredient) => {
    const data = {
      data: ingredient.data,
      quantity: ingredient.quantity * enteredQuantity,
    };

    let ingredientCost = [];

    if (hasOwnIngredients(ingredient.data))
      ingredientCost = calcIngredientCost(
        ingredient.data as ItemWithIngredients,
        ingredient.quantity * enteredQuantity
      );

    result.push({ data, ingredientCost });
  });

  return result;
};
