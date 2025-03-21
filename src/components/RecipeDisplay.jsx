import transformRecipeData from '../utils/transformRecipeData';
import { Star } from 'lucide-react';

const ConditionalRecipeDisplay = ({recipe}) => {
  const recipeShortcut = recipe.meals[0];
  const newRecipe = transformRecipeData(recipe);

  console.log('newRecipe: ', newRecipe); // remove later

  return (
    <div className="w-3/4 border border-solid border-[#B6B6B6] rounded-lg mb-8">
      <img className="w-full rounded-t-md h-32 md:h-80 xl:h-100 object-cover" src={recipeShortcut.strMealThumb} alt={recipeShortcut.strMeal} />
      <div className="p-3">
        <h4 className="geologica">{recipeShortcut.strMeal}</h4>
        <h5 className="geologica">Ingredients</h5>
        <ul className="fustat list-disc list-inside p-2">
          {newRecipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h5 className="geologica">Instructions</h5>
        <div className='fustat'>
          {recipeShortcut.strInstructions}
        </div>
      </div>
    </div>
  )
}

export default ConditionalRecipeDisplay;
