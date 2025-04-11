import { Star } from "lucide-react";

const RecipeCard = ({ recipeInfo, onRemove, modalOn }) => {
    return (
        <div className="relative border rounded-lg border-[#858585]">
            <Star onClick={onRemove} className="absolute right-4 top-4 cursor-pointer text-[#FFF704] fill-[#FFF704]" />
            <div onClick={modalOn} className="cursor-pointer">
                <img className="rounded-t-md" src={recipeInfo.image} alt={recipeInfo.name} />
                <h6 className="p-4">{recipeInfo.name}</h6>
            </div>
        </div>
    )
}

export default RecipeCard;
