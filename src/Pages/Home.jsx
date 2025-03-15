import HeaderMsg from '../components/HeaderMsg';
import Categories from '../components/Categories';
import ConditionalRecipeDisplay from '../components/ConditionalRecipeDisplay';

const Home = () => {
  return (
    <>
      <h1>Recipe Roulette</h1>
      <HeaderMsg page={"home"}/>
      <Categories />
      <ConditionalRecipeDisplay />
    </>
  )
}

export default Home;
