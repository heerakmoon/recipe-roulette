// pick a random category from the list of category picked by user
// use endpoint that gets a random recipe from a category
const randomFromCategories = (categoriesArr) => {
    const a = Math.floor(Math.random() * categoriesArr.length);
    const randomCategory = categoriesArr[a];
    const recipesArr = getRecipesFromCategory();

    const getRecipesFromCategory = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${randomCategory}`);
            if (!res.ok) {
                throw new Error(`Failed to get recipes from ${randomCategory} category`);
            }
            const data = res.json();
            return data;
        } catch (err) {
            console.error(err);
        }
    }

    return 
}

export default randomFromCategories;