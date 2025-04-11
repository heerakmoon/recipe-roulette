import RecipeCard from "./RecipeCard";
import NoRecipe from "./NoRecipe";
import RecipeModal from "./RecipeModal";
import { useState, useEffect } from "react";
import getRecipesFromLocalStorage from "../utils/getRecipesFromLocalStorage";

const FavoritesList = () => {
    const [favoritesArr, setFavoritesArr] = useState([]);
    const [modalRecipe, setModalRecipe] = useState(null);

    useEffect(() => {
        const allFavorites = getRecipesFromLocalStorage();
        setFavoritesArr(allFavorites);
    },  []);

    const removeFromFavorites = (recipeId) => {
        localStorage.removeItem(recipeId);
        const updatedFavoritesArr = getRecipesFromLocalStorage();
        setFavoritesArr(updatedFavoritesArr);
    }

    const modalOn = (recipe) => {
        setModalRecipe(recipe);
    }

    const modalOff = () => {
        setModalRecipe(null);
    }


    return (
        <>
            {
                favoritesArr.length === 0
                    ? <NoRecipe page="favorites" />
                    : (
                        <>
                            {modalRecipe && <RecipeModal recipe={modalRecipe} modalOff={modalOff} />}
                            <div className="w-3/4 mx-auto grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
                                {favoritesArr.map((recipe) => <RecipeCard key={recipe.id} recipeInfo={recipe} onRemove={() => removeFromFavorites(recipe.id)} modalOn={modalOn} />)}
                            </div>
                        </>
                    )

            }
        </>
    )
}

export default FavoritesList;
