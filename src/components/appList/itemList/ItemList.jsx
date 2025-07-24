import { useContext, useState } from "react";
import { appContext } from "../../../context/appContext";
import { MdDelete } from "react-icons/md";
import "./itemList.css";

const ItemList = () => {
  const {
    deleteProduct,
    completeProduct,
    productsFilter,
    listProducts,
    setListProducts,
  } = useContext(appContext);

  const handleChange = (e, id) => {
    const value = e.target.value;
    const newPrice = listProducts.map((prod) =>
      prod.id === id ? { ...prod, price: parseInt(value) } : prod
    );
    setListProducts(newPrice);
  };

  console.log(listProducts);

  return (
    <div className="listContainer">
      {productsFilter.length == 0 && (
        <p className="textNoProduct">Aun no hay productos cargados</p>
      )}
      <ul>
        {productsFilter.map((item) => (
          <li
            key={item.id}
            className={`itemProduct ${item.completed ? "active" : ""} ${
              item.category
            } `}
          >
            <input
              type="checkbox"
              className="checkbox"
              onChange={() => completeProduct(item.id)}
              checked={item.completed}
            />{" "}
            <span className="productTitle">{item.title}</span>
            <input
              className="price"
              type="number"
              onChange={(e) => handleChange(e, item.id)}
              value={item.price || ""}
            />
            <button
              onClick={() => deleteProduct(item.id)}
              className="btnDeleteItem delete"
            >
              <MdDelete size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
