const HeaderMsg = ({ page }) => {
  return (
    <div className="text-sm my-4">
      {page === "home" && (
        <p>Feeling adventurous? Can't decide what to make? Let me help!</p>
      )}
      {page === "favorites" && (
        <p>View your favorite recipes here!</p>
      )}
    </div>
  )
}

export default HeaderMsg;
