const HeaderMsg = ({ page }) => {
  return (
    <div className="text-sm my-4 text-center w-3/4 fustat">
      {page === "home" && (
        <p className="">Feeling adventurous? Can't decide what to make? Let me help!</p>
      )}
      {page === "favorites" && (
        <p>View your favorite recipes here!</p>
      )}
    </div>
  )
}

export default HeaderMsg;
