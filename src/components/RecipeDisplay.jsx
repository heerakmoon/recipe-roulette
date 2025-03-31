import randomFromAll from '../utils/randomFromAll';
import randomFromCategories from '../utils/randomFromCategories';
import Button from './Button';
import { Star } from 'lucide-react';
import { useState } from 'react';

const RecipeDisplay = ({ initialRecipe, categories }) => {
  const [recipe, setRecipe] = useState(initialRecipe);
  const [favorited, setFavorited] = useState(false);

  const handleClick = async () => {
    const searchAgain = categories.length >= 1
      ? await randomFromCategories(categories)
      : await randomFromAll();
    setRecipe(searchAgain);
  }

  const handleStarClick = () => {
    setFavorited(!favorited);
  }

  const starProps = {
    style: {
      color: favorited ? 'yellow' : 'grey',
      fill: favorited ? 'yellow' : 'white',
    }
  }

  return (
    <>
    <div className="w-3/4 border border-solid border-[#B6B6B6] rounded-lg mb-8">
      <img className="w-full rounded-t-md h-32 md:h-80 xl:h-100 object-cover" src={recipe.image} alt={recipe.name} />
      <div className="p-3">
        <div className="flex justify-between">
          <h4 className="geologica">{recipe.name}</h4>
          <Star onClick={handleStarClick} {...starProps} className="text-[#858585]" />
        </div>
        <h5 className="geologica">Ingredients</h5>
        <ul className="fustat list-disc list-inside p-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h5 className="geologica">Instructions</h5>
        <div className='fustat'>
          {recipe.instructions}
        </div>
      </div>
    </div>
    <Button className="w-3/4 mb-8" click={handleClick} btnText={"Try Another Recipe"} />
    </>
  )
}

export default RecipeDisplay;
