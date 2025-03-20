import { transformRecipeData } from "../utils/transformRecipeData";

const ConditionalRecipeDisplay = ({recipe}) => {
  const newRecipe = transformRecipeData(recipe);

  console.log('newRecipe: ', newRecipe); // remove later

  return (
    <div className="w-3/4 border border-solid border-[#B6B6B6] rounded-lg mb-8">
      <img className="w-full rounded-t-md h-32 md:h-80 xl:h-100 object-cover" src={recipe.meals[0].strMealThumb} alt={recipe.meals[0].strMeal} />
      <h3>{recipe.meals[0].strMeal}</h3>
      <h4>Ingredients</h4>
      <h4>Instructions</h4>
      <div>
        {recipe.meals[0].strInstructions}
      </div>
    </div>
  )
}

export default ConditionalRecipeDisplay;
