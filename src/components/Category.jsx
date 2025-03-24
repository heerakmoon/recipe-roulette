const Category = ({ category }) => {
  return (
    <div>
      <input type="checkbox" value={category}/>
      <label className="pl-1">{category}</label>
    </div>
  )
}

export default Category;
