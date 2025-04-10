const RecipeModal = ({ show, recipe }) => {
  // const classes = ""
  const expandRecipeCard = show ? 'visible' : 'invisible';
  return (
    <div className={expandRecipeCard}>
      <div className="fixed inset-0 bg-black/50 z-10"></div>
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className="w-1/2 h-3/4 bg-white rounded-lg overflow-y-auto">
          <img className="rounded-t-lg w-full h-3/4 object-cover" src={recipe.image} alt={recipe.name} />
          <div className="p-4">
            <h5>{recipe.name}</h5>
            <h5>Ingredients</h5>
            <ul className="fustat list-disc list-inside p-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
            </ul>
            <h5>Instructions</h5>
            <p>{recipe.instructions}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeModal;
