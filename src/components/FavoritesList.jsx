import RecipeCard from "./RecipeCard";
import { useState, useEffect } from "react";

const FavoritesList = () => {
    const [favoritesArr, setFavoritesArr] = useState([]);

    useEffect(() => {
        const allFavorites = Object.keys(localStorage).map((key) => {
            try {
                return JSON.parse(localStorage.getItem(key));
            } catch {
                return null;
            }
        })
        setFavoritesArr(allFavorites);
    },  []);
        
    return (
        <div className="w-3/4 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {favoritesArr.map((recipe) => <RecipeCard recipeInfo={recipe} />)}
        </div>
    )
}

export default FavoritesList;
