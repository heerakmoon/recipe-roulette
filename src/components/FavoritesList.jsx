import RecipeCard from "./RecipeCard";

const FavoritesList = () => {
    const favoritesArr = [];

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        console.log('key: ', key);
        const value = localStorage.getItem(key);
        favoritesArr.push(JSON.parse(value));
    }

    console.log('favoritesArr: ', favoritesArr);
        
    return (
        <RecipeCard recipeInfo={favoritesArr[0]} />
    )
}

export default FavoritesList;
