import  { useContext } from "react";
import { appContext } from "../context/appContext";

const ItemList = () => {
  const { listProducts, deleteProduct, completeProduct } =
    useContext(appContext);
  return (
    <div>
      <ul>
        {listProducts.map((item) => (
          <li key={item.id}>
            <input type="checkbox" onChange={()=>completeProduct(item.id)} checked={item.completed}/> {item.title}
            <button onClick={() => deleteProduct(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
