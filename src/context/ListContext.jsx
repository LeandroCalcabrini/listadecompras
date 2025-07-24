import { appContext } from "./appContext";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'

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
    // funcion para mostrar la lista de los productos segun la categoria

    if (filterCateg === "Todos") {
      return listProducts;
    }

    if (filterCateg === "Pendientes") {
      return pendingProducts;
    }
    if (filterCateg === "Recogidos") {
      return collectedProducts;
    }
    if (filterCateg) {
      return listProducts.filter((prod) => prod.category === filterCateg);
    }
    return listProducts;
  };

  const productsFilter = filterProducts();

  const deleteAllProducts = () => {
    Swal.fire({
      title: "Estas seguro/a",
      text: "No vas a poder revertirlo",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Borralo!",
    }).then((result) => {
      if (result.isConfirmed) {
        setListProducts([]);
        setFilterCateg("Todos");
        setCategory("");
        Swal.fire({
          title: "Borrado!",
          text: "Los productos fueron borrados",
          icon: "success",
        });
      }
    }); // Funcion para borrar todos los productos y a su vez resetear la categoria
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
