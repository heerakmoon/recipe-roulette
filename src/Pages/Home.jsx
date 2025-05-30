import HeaderMsg from '../components/HeaderMsg';
import Categories from '../components/Categories';
import NoRecipe from '../components/NoRecipe';
import RecipeDisplay from '../components/RecipeDisplay';
import WebHeader from '../components/WebHeader';
import { useState } from 'react';
import FavoritesButton from '../components/FavoritesButton';
import useScreenSize from '../utils/useScreenSize';

const Home = () => {
  const [randomRecipe, setRandomRecipe] = useState(null);
  const [usersCategories, setUsersCategories] = useState(null);

  const screenWidth = useScreenSize();
  const renderRecipe = randomRecipe ? <RecipeDisplay initialRecipe={randomRecipe} categories={usersCategories} /> : <NoRecipe page={"home"} />
  
  const handleRecipe = (receivedRecipe) => {
    setRandomRecipe(receivedRecipe);
  }

  const handleCategories = (receivedCategories) => {
    setUsersCategories(receivedCategories);
  }

  return (
    <div className="flex flex-col items-center mt-10 pb-12">
      {screenWidth >= 512 ? <WebHeader /> : <h1 className="text-[#0B6F10]">Recipe Roulette</h1>}
      <HeaderMsg page="home" />
      <Categories passRecipe={handleRecipe} passCategories={handleCategories} />
      {renderRecipe}
      {screenWidth < 512 && <div className="py-3 fixed bottom-0 bg-white w-full flex justify-center"><FavoritesButton /></div>}
    </div>
  )
}

export default Home;
