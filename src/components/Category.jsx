const Category = ({ category }) => {
  return (
    <div>
      <input type="checkbox" value={category}/>
      <label>{category}</label>
    </div>
  )
}

export default Category;
