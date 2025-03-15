import HeaderMsg from '../components/HeaderMsg';
import ConditionalRecipeDisplay from '../components/ConditionalRecipeDisplay';

const Favorites = () => {
  return (
    <>
      <h1>Recipe Roulette</h1>
      <HeaderMsg />
      <ConditionalRecipeDisplay />
    </>
  )
};

export default Favorites;
