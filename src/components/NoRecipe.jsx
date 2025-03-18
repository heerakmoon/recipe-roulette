import { ChefHat } from 'lucide-react';
import { NotebookText } from 'lucide-react';

const classes = {
  parentDiv: "my-2 py-20 px-5 w-3/4 grid place-items-center border border-dashed border-[#B6B6B6] rounded-md",
  icon: "text-[#70DF76] w-[50px] h-[50px]"
}

const NoRecipe = ({ page }) => {
  if (page === "home") {
    return (
      <div className={classes.parentDiv}>
        <ChefHat strokeWidth={1} className={classes.icon} />
        <p>Click the button above to find a random recipe!</p>
      </div>
    )
  } else if (page === "favorites") {
    return (
      <div className={classes.parentDiv}>
        <NotebookText strokeWidth={1} className={classes.icon} />
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
