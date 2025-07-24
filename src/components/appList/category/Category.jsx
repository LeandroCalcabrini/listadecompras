import { useContext } from "react";
import { appContext } from "../../../context/appContext";
import "./category.css";

const Category = () => {
  const { categories, setFilterCateg, filterCateg, setCategory } = useContext(appContext);

  const handleClick = (cat) => {
    setFilterCateg(cat);
    setCategory(cat);
  }

  return (
    <div className="categoryContainer">
      <button
        onClick={() => setFilterCateg("Todos")}
        className={`categoryButton ${filterCateg === "Todos" ? "active" : ""}`}
      >
        Todos
      </button>
      {categories.map((cat) => (
        <button
          className={`categoryButton ${filterCateg === cat ? "active" : ""}`}
          key={cat}
          onClick={() => handleClick(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Category;
