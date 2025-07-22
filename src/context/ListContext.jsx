import { appContext } from "./appContext";
import { useState } from "react";

const ListContext = ({ children }) => {
  const [listProducts, setListProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [filterCateg, setFilterCateg] = useState("Todos");

  const categories = ["Lacteos", "Verduras", "Carne", "Otros"];

  const deleteProduct = (id) => {
    const productDeleted = listProducts.filter((prod) => prod.id !== id);
    setListProducts(productDeleted);
  };

  const completeProduct = (id) => {
    const productCompleted = listProducts.map((prod) =>
      prod.id === id ? { ...prod, completed: !prod.completed } : prod
    );
    setListProducts(productCompleted);
  };

  const filterProducts = () => {
    if (filterCateg === "Carne") {
      return listProducts.filter((prod) => prod.category === "Carne");
    }
    if (filterCateg === "Verduras") {
      return listProducts.filter((prod) => prod.category === "Verduras");
    }
    if (filterCateg === "Otros") {
      return listProducts.filter((prod) => prod.categoys === "Otros");
    }
    if (filterCateg === "Lacteos") {
      return listProducts.filter((prod) => prod.category === "Lacteos");
    } else return listProducts;
  };

  const productsFilter = filterProducts();

  return (
    <appContext.Provider
      value={{
        listProducts,
        setListProducts,
        deleteProduct,
        completeProduct,
        categories,
        category,
        setCategory,
        productsFilter,
        setFilterCateg,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default ListContext;
