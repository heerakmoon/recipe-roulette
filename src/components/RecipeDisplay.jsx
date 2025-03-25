import randomFromAll from '../utils/randomFromAll';
import randomFromCategories from '../utils/randomFromCategories';
import transformRecipeData from '../utils/transformRecipeData';
import Button from './Button';
import NoRecipe from './NoRecipe';
import { Star } from 'lucide-react';
import { useState } from 'react';

// if none of the categories are selected use endpoint that selects one random recipe
/* if there is/are categories selected, pick a random category from the ones selected,
use the endpoint that gets all the recipes from that category and select a random recipe
from that category */
// RecipeDisplay > randomFromAll || randomFromSelected

const RecipeDisplay = ({ checkCategories, onRandomRecipe }) => {
  const [checkedCategories, setCheckedCategories] = useState(null);
  const recipe = checkedCategories ? randomFromCategories(checkedCategories) : randomFromAll(); //REPLACE PLACEHOLDER

  if (checkCategories) setCheckedCategories(checkCategories);

  // const recipeShortcut = recipe.meals[0];
  const newRecipe = transformRecipeData(recipe);

  console.log('newRecipe: ', newRecipe); // remove later

  return (
    <>
    <div className="w-3/4 border border-solid border-[#B6B6B6] rounded-lg mb-8">
      <img className="w-full rounded-t-md h-32 md:h-80 xl:h-100 object-cover" src={newRecipe.strMealThumb} alt={newRecipe.strMeal} />
      <div className="p-3">
        <div className="flex justify-between">
          <h4 className="geologica">{newRecipe.strMeal}</h4>
          <Star className="text-[#858585]" />
        </div>
        <h5 className="geologica">Ingredients</h5>
        <ul className="fustat list-disc list-inside p-2">
          {newRecipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h5 className="geologica">Instructions</h5>
        <div className='fustat'>
          {newRecipe.strInstructions}
        </div>
      </div>
    </div>
    <Button className="w-3/4 mb-8" click={onRandomRecipe} btnText={"Try Another Recipe"} />
    </>
  )
}

export default RecipeDisplay;
