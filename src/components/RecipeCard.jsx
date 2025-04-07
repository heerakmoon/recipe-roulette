import { Star } from "lucide-react";

const RecipeCard = ({ recipeInfo }) => {
    return (
        <div className="relative border rounded-md border-[#858585]">
            <Star className="absolute right-4 top-4 cursor-pointer text-[#FFF704] fill-[#FFF704]" />
            <img className="rounded-t-md" src={recipeInfo.image} alt={recipeInfo.name} />
            <h6 className="p-4">{recipeInfo.name}</h6>
        </div>
    )
}

export default RecipeCard;
