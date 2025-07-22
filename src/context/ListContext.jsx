import { appContext } from "./appContext";
import { useState } from "react";

const ListContext = ({ children }) => {
  const [listProducts, setListProducts] = useState([]); // Estado de la lista de los productos
  const [category, setCategory] = useState(""); // estado que controla el tipo de la categoria que el producto corresponde
  const [filterCateg, setFilterCateg] = useState("Todos"); // estado para el filtrado tanto de las categorias de los productos como los estados de completados o pendientes

  const categories = ["Lacteos", "Verduras", "Carne", "Otros"]; // array de las categorias

  // FUNCIONES
  const deleteProduct = (id) => {
    // ELIMINAR PRODUCTO
    const productDeleted = listProducts.filter((prod) => prod.id !== id);
    setListProducts(productDeleted);
  };

  const completeProduct = (id) => {
    // MARCAR QUE EL PRODUCTO YA HA SIDO SELECCIONADO - utilizado en  itemList
    const productCompleted = listProducts.map((prod) =>
      prod.id === id ? { ...prod, completed: !prod.completed } : prod
    );
    setListProducts(productCompleted);
  };

  const pendingProducts = listProducts.filter((prod) => !prod.completed);
  const collectedProducts = listProducts.filter((prod) => prod.completed);



  const filterProducts = () => {
    // FILTRAR PRODUCTO SEGUN CATEGORIA Y ESTADO  -- utilizado en  category
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
    } 
      if (filterCateg === "Pendientes") {
      return pendingProducts;
    } 
      if (filterCateg === "Recogidos") {
      return collectedProducts;
    } 
      
    else return listProducts;
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
        pendingProducts,
        collectedProducts
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default ListContext;
