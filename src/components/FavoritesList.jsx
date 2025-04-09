import RecipeCard from "./RecipeCard";
import NoRecipe from "./NoRecipe";
import RecipeModal from "./RecipeModal";
import { useState, useEffect } from "react";
import getRecipesFromLocalStorage from "../utils/getRecipesFromLocalStorage";

const FavoritesList = () => {
    const [favoritesArr, setFavoritesArr] = useState([]);
    const [viewModal, setViewModal] = useState();
    const testObj = {
        favorited: true,
        id: "52787",
        image: "https://www.themealdb.com/images/media/meals/xrysxr1483568462.jpg",
        ingredients: ["2 cups Chocolate Chips", "2 tbs Heavy Cream", "1 14-ounce can Condensed Milk"],
        instructions: "Line an 8-inch-square baking pan with wax paper or foil, and coat with non-stick spray.\r\nIn a microwave-safe bowl, combine the dark chocolate chips, heavy cream and half of the sweetened condensed milk. Microwave the dark chocolate mixture in 20-second intervals, stirring in between each interval, until the chocolate is melted.\r\nAdd the vanilla extract to the dark chocolate mixture and stir well until smooth.\r\nTransfer the dark chocolate mixture into the prepared pan and spread into an even layer.\r\nIn a separate bowl, combine the white chocolate chips with the remaining half of the sweetened condensed milk. Microwave the white chocolate mixture in 20-second intervals, stirring in between each interval, until the chocolate is melted.\r\nEvenly spread the white chocolate mixture on top of dark chocolate layer.\r\nTop the chocolate layers with the Mallow Bits or miniature marshmallows, and gently press them down.\r\nRefrigerate for 4 hours, or until set.\r\nRemove the fudge and wax paper from the pan. Carefully peel all of the wax paper from the fudge.\r\nCut the fudge into bite-sized pieces and serve.",
        name: "Hot Chocolate Fudge"
    }

    useEffect(() => {
        const allFavorites = getRecipesFromLocalStorage();
        setFavoritesArr(allFavorites);
    },  []);

    const removeFromFavorites = (recipeId) => {
        localStorage.removeItem(recipeId);
        const updatedFavoritesArr = getRecipesFromLocalStorage();
        setFavoritesArr(updatedFavoritesArr);
    }

    const handleChildData = (data) => {
        setViewModal(data);
    }


    return (
        <div>
            <RecipeModal show={viewModal} recipe={testObj} />
            <div className="w-3/4 mx-auto grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
                {
                    favoritesArr.length === 0
                        ? <NoRecipe page="favorites" />
                        : favoritesArr.map((recipe) => <RecipeCard key={recipe.id} recipeInfo={recipe} onRemove={() => removeFromFavorites(recipe.id)} onSendData={handleChildData} />)

                }
            </div>
        </div>
    )
}

export default FavoritesList;
