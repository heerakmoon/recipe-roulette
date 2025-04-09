import { Star } from "lucide-react";
import RecipeModal from "./RecipeModal";
import { useState } from "react";

const RecipeCard = ({ recipeInfo, onRemove }) => {
    const [viewRecipe, setViewRecipe] = useState(false);

    const handleClick = () => {
        setViewRecipe(!viewRecipe);
        console.log(viewRecipe);
    }

    return (
        <div className="relative border rounded-lg border-[#858585]">
            <Star onClick={onRemove} className="absolute right-4 top-4 cursor-pointer text-[#FFF704] fill-[#FFF704]" />
            <div onClick={handleClick} className="cursor-pointer">
                <img className="rounded-t-md" src={recipeInfo.image} alt={recipeInfo.name} />
                <h6 className="p-4">{recipeInfo.name}</h6>
            </div>
            <RecipeModal show={viewRecipe} recipe={recipeInfo} />
        </div>
    )
}

export default RecipeCard;
