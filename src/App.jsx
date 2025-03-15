import Categories from './components/Categories';
import NoRecipe from './components/NoRecipe';
import './App.css'

const App = () => {
  return (
    <>
      <h1>Recipe Roulette</h1>
      <p>Feeling adventurous? Can't decide what to make? Let the Recipe Roulette decide for you!</p>
      <Categories />
      <NoRecipe page={"home"} />
    </>
  )
}

export default App;
