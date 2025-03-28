import HeaderMsg from '../components/HeaderMsg';
import Categories from '../components/Categories';
import NoRecipe from '../components/NoRecipe';
import RecipeDisplay from '../components/RecipeDisplay';
import { useState } from 'react';

const Home = () => {
  const [randomRecipe, setRandomRecipe] = useState(null);
  const [usersCategories, setUsersCategories] = useState(null);

  const renderRecipe = randomRecipe ? <RecipeDisplay initialRecipe={randomRecipe} categories={usersCategories} /> : <NoRecipe page={"home"} />
  
  const handleRecipe = (receivedRecipe) => {
    setRandomRecipe(receivedRecipe);
  }

  const handleCategories = (receivedCategories) => {
    setUsersCategories(receivedCategories);
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-[#0B6F10]">Recipe Roulette</h1>
      <HeaderMsg page={"home"}/>
      <Categories passRecipe={handleRecipe} passCategories={handleCategories} />
      {renderRecipe}
    </div>
  )
}

export default Home;
