// get a random recipe from all recipes
import transformRecipeData from "./transformRecipeData";

const randomFromAll = async () => {
    try {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        if (!res.ok) {
            throw new Error('Failed to fetch random recipe');
        }
        const data = await res.json();
        const transformedRecipe = transformRecipeData(data);

        return transformedRecipe;
    } catch (err) {
        console.error('Error fetching random recipe:', err.message);
    }
}

export default randomFromAll;