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
    <div>
      <div>
        <h2>Categories</h2>
        <p>Select categories to filter and narrow down your recipe options</p>
      </div>
      {categories.map((category) => (
        <Category
          key={category.idCategory}
          category={category.strCategory}
        />
      ))}
      <Button btnText={"Surprise Me!"} />
    </div>
  );
};

export default Categories;
