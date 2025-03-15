const HeaderMsg = ({ page }) => {
  return (
    <>
      {page === "home" && (
        <p>Feeling adventurous? Can't decide what to make? Let the Recipe Roulette decide for you!</p>
      )}
      {page === "favorites" && (
        <p>View your favorite recipes here!</p>
      )}
    </>
  )
}

export default HeaderMsg;
