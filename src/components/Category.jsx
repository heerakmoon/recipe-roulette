import { useState } from "react";

const Category = ({ category }) => {
  const useHover = () => {
    const [isHovering, setIsHovering] = useState(false);
    
    const  hoverProps = {
      onMouseEnter: () => setIsHovering(true),
      onMouseLeave: () => setIsHovering(false),
      style: {
        cursor: isHovering ? 'pointer' : 'default'
      }
    }
    return hoverProps;
  }

  const hoverProps = useHover();

  return (
    <div>
      <input {...hoverProps} type="checkbox" value={category}/>
      <label {...hoverProps} className="pl-1">{category}</label>
    </div>
  )
}

export default Category;
