const Category = ({ category }) => {
  return (
    <div>
      <input className="cursor-pointer" type="checkbox" value={category}/>
      <label className="cursor-pointer pl-1">{category}</label>
    </div>
  )
}

export default Category;
