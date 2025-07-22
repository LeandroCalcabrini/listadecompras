import  { useContext } from "react";
import { appContext } from "../context/appContext";

const ItemList = () => {
  const { listProducts, deleteProduct, completeProduct, productsFilter} =
    useContext(appContext);
  return (
    <div>
      <ul>
        {productsFilter.map((item) => (
          <li key={item.id}>
            <input type="checkbox" onChange={()=>completeProduct(item.id)} checked={item.completed}/> <span>{item.title}</span>
            <button onClick={() => deleteProduct(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
