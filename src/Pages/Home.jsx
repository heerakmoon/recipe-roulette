import HeaderMsg from '../components/HeaderMsg';
import Categories from '../components/Categories';
import ConditionalRecipeDisplay from '../components/ConditionalRecipeDisplay';

const Home = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-[#0B6F10]">Recipe Roulette</h1>
      <HeaderMsg page={"home"}/>
      <Categories />
      <ConditionalRecipeDisplay />
    </div>
  )
}

export default Home;
