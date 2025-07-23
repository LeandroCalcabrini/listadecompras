import { appContext } from "./appContext";
import { useEffect, useState } from "react";

const ListContext = ({ children }) => {
  const [listProducts, setListProducts] = useState(() => {
    const getProductsLocalStorage = localStorage.getItem("products");
    return getProductsLocalStorage ? JSON.parse(getProductsLocalStorage) : [];
  }); // Estado de la lista de los productos
  const [category, setCategory] = useState(""); // estado que controla el tipo de la categoria que el producto corresponde
  const [filterCateg, setFilterCateg] = useState("Todos"); // estado para el filtrado tanto de las categorias de los productos como los estados de completados o pendientes

  const categories = [
    "Lacteos",
    "Verduras",
    "Carne",
    "Harinas",
    "Art-Limpieza",
    "Higiene",
    "Bebidas",
    "Fiambres",
    "Otros",
  ]; // array de las categorias

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

    if (filterCateg === "Lacteos") {
      return listProducts.filter((prod) => prod.category === "Lacteos");
    }
    if (filterCateg === "Art-Limpieza") {
      return listProducts.filter((prod) => prod.category === "Art-Limpieza");
    }

    if (filterCateg === "Harinas") {
      return listProducts.filter((prod) => prod.category === "Harinas");
    }
    if (filterCateg === "Fiambres") {
      return listProducts.filter((prod) => prod.category === "Fiambres");
    }
    if (filterCateg === "Higiene") {
      return listProducts.filter((prod) => prod.category === "Higiene");
    }
    if (filterCateg === "Bebidas") {
      return listProducts.filter((prod) => prod.category === "Bebidas");
    }

    if (filterCateg === "Otros") {
      return listProducts.filter((prod) => prod.category === "Otros");
    }
    if (filterCateg === "Pendientes") {
      return pendingProducts;
    }
    if (filterCateg === "Recogidos") {
      return collectedProducts;
    } else return listProducts;
  };

  const productsFilter = filterProducts();

  const deleteAllProducts = () => {
    setListProducts([]);
    setFilterCateg("Todos");
    setCategory("");
  };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(listProducts));
  }, [listProducts]);

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
        filterCateg,
        setFilterCateg,
        pendingProducts,
        collectedProducts,
        deleteAllProducts,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default ListContext;
