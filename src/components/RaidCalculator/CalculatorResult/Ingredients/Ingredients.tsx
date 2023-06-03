import { Ingredient } from '../../../../constants/items';
import { hasOwnIngredients } from '../../RaidCalculator.helpers';
import IngredientItem from './IngredientItem/IngredientItem';

type Props = {
  ingredients: Ingredient[];
};

const Ingredients = ({ ingredients }: Props) => (
  <>
    {ingredients.map((primaryIngredient, i) => (
      <>
        <IngredientItem
          primaryIngredient
          ingredient={primaryIngredient}
          isLast={i + 1 === ingredients.length}
        />
        {hasOwnIngredients(primaryIngredient.data) && (
          <>
            {primaryIngredient.data.ingredients.map((ingredient) => {
              const isAParentIngredient = hasOwnIngredients(ingredient.data);

              return (
                <>
                  <IngredientItem
                    parentIngredient={isAParentIngredient}
                    ingredient={ingredient}
                  />
                  {isAParentIngredient &&
                    ingredient.data.ingredients.map((ingredient) => (
                      <IngredientItem
                        childIngredient
                        ingredient={ingredient}
                        key={ingredient.data.name}
                      />
                    ))}
                </>
              );
            })}
          </>
        )}
      </>
    ))}
  </>
);

export default Ingredients;
