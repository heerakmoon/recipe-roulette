/* ingredients and instructions received aren't in an array and making it difficult to work with
 transforms recipe, puts ingredients and instructions into array*/
const transformRecipeData = (apiRecipe) => {
  const meal = apiRecipe.meals[0];
  const favorited = localStorage.getItem(meal.idMeal) !== null;
  const extractedPropsFromRecipe = [];
  const extractedIng = [];
  const extractedMeas = [];
  const ingredientsArr = [];
  
  for (let pair of Object.entries(meal)) {
    extractedPropsFromRecipe.push(pair);
  }

  for (let i = 1; i < extractedPropsFromRecipe.length; i++) {
    if (extractedPropsFromRecipe[i][0].startsWith("strIng")) {
      extractedIng.push(extractedPropsFromRecipe[i]);
    } else if (extractedPropsFromRecipe[i][0].startsWith("strMeas")) {
      extractedMeas.push(extractedPropsFromRecipe[i]);
    }
  }

  for (let i = 0; i < extractedIng.length; i++) {
    if (extractedIng[i][1]) ingredientsArr.push(`${extractedMeas[i][1]} ${extractedIng[i][1]}`);
  }

  return {
    id: meal.idMeal,
    favorited: favorited,
    name: meal.strMeal,
    image: meal.strMealThumb,
    ingredients: ingredientsArr,
    instructions: meal.strInstructions
  }
}

export default transformRecipeData;