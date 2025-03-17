import { ChefHat } from 'lucide-react';
import { NotebookText } from 'lucide-react';

const NoRecipe = ({ page }) => {
  if (page === "home") {
    return (
      <div>
        <ChefHat className='text-[#70DF76]' />
        <p>Click the button above to find a random recipe!</p>
      </div>
    )
  } else if (page === "favorites") {
    return (
      <div>
        <NotebookText className='text-[#70DF76]' />
        <p>You haven't favorited any recipes yet! Try out some of the recipes!</p>
      </div>
    )
  } else {
    return (
      <div>
        <p>Content not found</p>
      </div>
    )
  }
}
export default NoRecipe;
