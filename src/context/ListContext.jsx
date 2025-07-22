import { appContext } from "./appContext";
import { useState } from "react";

const ListContext = ({ children }) => {
  const [listProducts, setListProducts] = useState([]);
  const [category, setCategory] = useState("");

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
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default ListContext;
