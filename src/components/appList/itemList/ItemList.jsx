import { useContext } from "react";
import { appContext } from "../../../context/appContext";
import { MdDelete } from "react-icons/md";
import "./itemList.css";

const ItemList = () => {
  const { deleteProduct, completeProduct, productsFilter } =
    useContext(appContext);

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
