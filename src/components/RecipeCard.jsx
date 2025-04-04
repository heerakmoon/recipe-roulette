import { Star } from "lucide-react";

const RecipeCard = ({ recipeInfo }) => {
    return (
        <div>
            <Star />
            <img src={recipeInfo.image} alt={recipeInfo.name} />
            <h4>{recipeInfo.name}</h4>
        </div>
    )
}

export default RecipeCard;
