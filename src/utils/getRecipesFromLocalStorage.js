const getRecipesFromLocalStorage = () => {
  return Object.keys(localStorage).map((key) => {
    return JSON.parse(localStorage.getItem(key));
  });
}

export default getRecipesFromLocalStorage;
