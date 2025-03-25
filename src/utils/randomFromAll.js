// get a random recipe and pass it to the parent component, RecipeDisplay
const randomFromAll = async () => {
    let randomRecipe = null;
    let error = null;
    let loading = false;

    loading = true;
    try {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        if (!res.ok) {
            throw new Error('Failed to fetch random recipe');
        }
        const data = await res.json();
        randomRecipe = data;
    } catch (err) {
        error = err.message;
    } finally {
        loading = false;
    }

    console.log('randomRecipe, randomFromAll.js: ', randomRecipe);
    console.log('error from randomFromAll: ', error);
    console.log('loading from randomFromall: ', loading);

    return randomRecipe;
}

export default randomFromAll;