import { useContext, useState } from "react";
import { appContext } from "../context/appContext";


const AppForm = () => {
  const { listProducts, setListProducts,category, setCategory, categories } = useContext(appContext);
  const [titleProduct, setTitleProduct] = useState("");
 
  const [error, setError] = useState(null);



  const product = {
      title:
        titleProduct.charAt(0).toUpperCase() +
        titleProduct.slice(1).toLocaleLowerCase(),
      id: crypto.randomUUID(),
      category: category,
      completed: false,
    };

  const handleChange = (e) => {
    const value = e.target.value;
    setTitleProduct(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (titleProduct.trim() === "" || category.trim() === "") {
      setError("Por favor ingrese el nombre del producto y su categoria");
      return;
    }

    setListProducts([...listProducts, product]);
    setTitleProduct("");
    setCategory("");
    setError(null);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(value);
  };


  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <input type="text" value={titleProduct} onChange={handleChange} className="form-input"/>
        <select onChange={handleCategoryChange} value={category}>
          <option value="">Categoria</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button type="submit" className="form-button">Agregar</button>
      </form>

      {error ? <p>{error}</p> : ""}
    </div>
  );
};

export default AppForm;
