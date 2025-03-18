import { useState, useEffect } from "react";
import Category from "./Category";
import Button from "./Button";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        if (!res.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await res.json();
        setCategories(data.categories || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCategories();
  }, []);

  if (loading) return <div>Loading categories...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="w-3/4 border border-solid border-[#B6B6B6] rounded-md py-6 px-6 my-5">
      <div className="md:flex geologica">
        <h4>Categories</h4>
        <p className="text-sm md:mx-5 py-1">(Select categories to filter and narrow down your recipe options)</p>
      </div>
      <div className="fustat py-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4">
        {categories.map((category) => (
          <Category
            key={category.idCategory}
            category={category.strCategory}
          />
        ))}
      </div>
      <Button btnText={"Surprise Me!"} />
    </div>
  );
};

export default Categories;
