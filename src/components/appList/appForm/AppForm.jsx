import { useContext, useState } from "react";
import { appContext } from "../../../context/appContext.js";
import "./appForm.css";

const AppForm = () => {
  const {
    listProducts,
    setListProducts,
    category,
    setCategory,
    categories,
    setFilterCateg,
  } = useContext(appContext);
  const [titleProduct, setTitleProduct] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    // Funcion para obtener el valor del input y colocarlo en el estado titleProduct
    const value = e.target.value;
    setTitleProduct(
      value.charAt(0).toUpperCase() + value.slice(1).toLocaleLowerCase()
    );
  };

  const handleSubmit = (e) => {
    // Funcion para cargar el producto en el estado listProduct
    e.preventDefault();

    if (titleProduct.trim() === "" || category.trim() === "") {
      // verificacion si para que no ingresen espacios vacios
      setError("Por favor ingrese el nombre del producto y su categoria");
      return;
    }

    if (
      // validacion para que no se ingrese nuevamente un producto que ya ha sido ingresado
      listProducts.some((prod) => prod.title === titleProduct)
    ) {
      setError("El producto ya fue ingresado");
      return;
    }

    const newProduct = {
      // creacion del objeto que vamos a ingresar al estado de todos los productos
      title: titleProduct,
      id: crypto.randomUUID(),
      category: category,
      price: 0,
      completed: false,
    };

    setListProducts([...listProducts, newProduct]); // seteamos el estado de la lista de los productos con el nuevo producto
    setTitleProduct(""); // actualizamoss el input nuevamente vacio
    setError(null); // actualizamos el error nuevamente a null
    setFilterCateg(category); // set del estado filterCateg con el nombre de la categoria del ultimo producto agregado
  };

  const handleCategoryChange = (e) => {
    // funcion para obtener el valor de los botones de la categoria para setear el producto
    const value = e.target.value;
    setCategory(value);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={titleProduct}
          onChange={handleChange}
          className="form-input"
        />
        <select onChange={handleCategoryChange} value={category}>
          <option value="">Categoria</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button type="submit" className="buttonAdd">
          Agregar
        </button>
      </form>

      {error ? <p className="textError">{error}</p> : ""}
    </div>
  );
};

export default AppForm;
