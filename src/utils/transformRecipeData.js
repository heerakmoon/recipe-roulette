// transforms api recipe received into obj that is easer to work with
export const transformRecipeData = (apiRecipe) => {
  let ingredientsArr = [];
  // let i = 1;
  // let incrementingRecipeNum = `strIngredient${i}`;
  // let incrementingMeasureNum = `strMeasure${i}`;
  // let ingredientAtI = apiRecipe.meals[0][incrementingRecipeNum];
  // let measurementAtI = apiRecipe.meals[0][incrementingMeasureNum];
  // let ingAndMeas = `${measurementAtI} ${ingredientAtI}`;

  console.log(apiRecipe);
  // console.log('ingredients: ', ingredientAtI);
  // console.log('measurement: ', measurementAtI);
  // console.log('ing and meas: ', ingAndMeas)

  return {
    id: apiRecipe.meals[0].idMeal,
    name: apiRecipe.meals[0].strMeal,
    image: apiRecipe.meals[0].strMealThumb,
    ingredients: ingredientsArr,
    instructions: apiRecipe.meals[0].strInstructions
  }
}
