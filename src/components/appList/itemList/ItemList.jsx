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
    filterCateg,
  } = useContext(appContext);

  const handleChange = (e, id) => {
    const value = e.target.value;
    const newPrice = listProducts.map((prod) =>
      prod.id === id ? { ...prod, price: parseFloat(value) } : prod
    );
    setListProducts(newPrice);
  };

  const totalPrice = productsFilter.reduce((acc, item) => {
    return acc + (parseFloat(item.price) || 0);
  }, 0);

  return (
    <div className="listContainer">
      <h2 className="titleCategory">{filterCateg}</h2>
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
            <div>
              <span>$ </span>{" "}
              <input
                className="price"
                type="number"
                onChange={(e) => handleChange(e, item.id)}
                value={item.price}
              />
            </div>
            <button
              onClick={() => deleteProduct(item.id)}
              className="btnDeleteItem delete"
            >
              <MdDelete size={20} />
            </button>
          </li>
        ))}
      </ul>
      <div className="totalPrice">
        {productsFilter.length > 0 && <span>Total: ${totalPrice}</span>}
      </div>
    </div>
  );
};

export default ItemList;
