const Category = ({ category }) => {
  return (
    <div>
      <label className="cursor-pointer">
        <input className="cursor-pointer mr-1" type="checkbox" value={category}/>
        {category}
      </label>
    </div>
  )
}

export default Category;
