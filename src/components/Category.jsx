import { useContext, useState } from "react";
import { appContext } from "../context/appContext";

const Category = () => {
  const { categories, setFilterCateg } = useContext(appContext);

  return (
    <div>
      <button onClick={() => setFilterCateg("Todos")}>Todos</button>
      {categories.map((cat) => (
        <button key={cat} onClick={() => setFilterCateg(cat)}>
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Category;
