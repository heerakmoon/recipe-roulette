import HeaderMsg from '../components/HeaderMsg';
import Categories from '../components/Categories';
// import NoRecipe from '../components/NoRecipe';
import RecipeDisplay from '../components/RecipeDisplay';
import { useState } from 'react';

const Home = () => {
// get selected categories from Categories and send it to RecipeDisplay

//---------------------------------------------------------------------------------
  // const [randomRecipe, setRandomRecipe] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  // const handleRandomRecipe = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  //     if (!res.ok) {
  //       throw new Error('Failed to fetch random recipe');
  //     }
  //     const data = await res.json();
  //     setRandomRecipe(data);
  //     console.log(data); // remove
  //   } catch (err) {
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // if (loading) return <div>Loading your recipe...please wait</div>
  // if (error) return <div>Error: {error}</div>

  // const renderRecipe = randomRecipe ? <RecipeDisplay recipe={randomRecipe} onRandomRecipe={handleRandomRecipe} /> : <NoRecipe page={"home"} />
  const [searchCategories, setSearchCategories] = useState(null);
  
  const handleCategories = (receivedCategories) => {
    setSearchCategories(receivedCategories);
  }

  console.log('searchCategories Home.jsx: ', searchCategories);

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-[#0B6F10]">Recipe Roulette</h1>
      <HeaderMsg page={"home"}/>
      <Categories passCategories={handleCategories} />
      <RecipeDisplay checkCategories={searchCategories} />
    </div>
  )
}

export default Home;
