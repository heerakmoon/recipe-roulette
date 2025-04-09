const RecipeModal = ({ show, recipe }) => {
  // const classes = ""
  const expandRecipeCard = show ? 'visible' : 'invisible';
  return (
    <div className={expandRecipeCard}>
      <div>
        <div className="fixed top-0 left-0 bg-black opacity-50 w-full h-full"></div>
        <div className="absolute top-1/2 left-1/2 bg-white">
          <p>{recipe.name}</p>
        </div>
      </div>
    </div>
  )
}

export default RecipeModal;
