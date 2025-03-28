import getRandomFromArr from "./getRandomFromArr";
import transformRecipeData from "./transformRecipeData";

const randomFromCategories = async (categoriesArr) => {
    const randomCategory = getRandomFromArr(categoriesArr);
    
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${randomCategory}`); //first api call for all recipes from a category
        if (!res.ok) {
            throw new Error(`Failed to get recipes from ${randomCategory} category`);
        }
        const data = await res.json();
        const randomRecipeFromCategory = getRandomFromArr(data.meals);
        const randomRecipeId = randomRecipeFromCategory.idMeal;

        const res2 = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomRecipeId}`); //second api call by recipe id because recipes from first api call doesn't have enough info
        if (!res2.ok) {
            throw new Error(`Failed to get recipe #${randomRecipeId}.`);
        }
        const data2 = await res2.json();
        const transformedRecipe = transformRecipeData(data2);
        return transformedRecipe;
    } catch (err) {
        console.error(err.message);
    }
}

export default randomFromCategories;