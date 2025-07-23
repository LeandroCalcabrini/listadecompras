import { useContext } from "react";
import { appContext } from "../../../context/appContext";
import "./category.css";

const Category = () => {
  const { categories, setFilterCateg, filterCateg } = useContext(appContext);

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
          onClick={() => setFilterCateg(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Category;
