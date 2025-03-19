import HeaderMsg from '../components/HeaderMsg';
import Categories from '../components/Categories';
import NoRecipe from '../components/NoRecipe';
import ConditionalRecipeDisplay from '../components/ConditionalRecipeDisplay';
import { useState } from 'react';

const Home = () => {
  const [randomRecipe, setRandomRecipe] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRandomRecipe = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      if (!res.ok) {
        throw new Error('Failed to fetch random recipe');
      }
      const data = await res.json();
      setRandomRecipe(data);
      console.log(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading your recipe...please wait</div>
  if (error) return <div>Error: {error}</div>

  const renderRecipe = randomRecipe ? <ConditionalRecipeDisplay recipe={randomRecipe} /> : <NoRecipe page={"home"} />

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-[#0B6F10]">Recipe Roulette</h1>
      <HeaderMsg page={"home"}/>
      <Categories onRandomRecipe={handleRandomRecipe} />
      {renderRecipe}
    </div>
  )
}

export default Home;
