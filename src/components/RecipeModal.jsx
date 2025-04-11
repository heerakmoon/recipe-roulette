import { X } from 'lucide-react';

const RecipeModal = ({ recipe, modalOff }) => {
  if (!recipe) return null;

  return (
    <div onClick={modalOff} className="fixed inset-0 bg-black/50 z-50 cursor-pointer flex justify-center items-center">
      <div onClick={(e) => e.stopPropagation()} className="w-1/2 h-3/4 bg-white rounded-lg overflow-y-auto cursor-default">
        <div className="flex justify-end relative">
          <X onClick={modalOff} className="absolute p-2 w-[40px] h-[40px] rounded-lg cursor-pointer" />
          <img className="rounded-t-lg w-full h-3/4 object-cover" src={recipe.image} alt={recipe.name} />
        </div>
        <div className="p-4">
          <h5>{recipe.name}</h5>
          <h5>Ingredients</h5>
          <ul className="fustat list-disc list-inside p-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
          </ul>
          <h5>Instructions</h5>
          <p>{recipe.instructions}</p>
        </div>
      </div>
    </div>
  )
}

export default RecipeModal;
