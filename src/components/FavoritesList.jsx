import RecipeCard from "./RecipeCard";
import NoRecipe from "./NoRecipe";
import { useState, useEffect } from "react";
import getRecipesFromLocalStorage from "../utils/getRecipesFromLocalStorage";

const FavoritesList = () => {
    const [favoritesArr, setFavoritesArr] = useState([]);

    useEffect(() => {
        const allFavorites = getRecipesFromLocalStorage();
        setFavoritesArr(allFavorites);
    },  []);

    const removeFromFavorites = (recipeId) => {
        localStorage.removeItem(recipeId);
        const updatedFavoritesArr = getRecipesFromLocalStorage();
        setFavoritesArr(updatedFavoritesArr);
    }


    return (
        favoritesArr.length === 0
            ? <NoRecipe page="favorites" />
            : (
                <div className="w-3/4 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
                    {favoritesArr.map((recipe) => <RecipeCard key={recipe.id} recipeInfo={recipe} onRemove={() => removeFromFavorites(recipe.id)} />)}
                </div>
            )
    )
}

export default FavoritesList;
