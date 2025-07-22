import { useContext } from "react";
import { appContext } from "../context/appContext";

const StatusFilter = () => {
  const { setFilterCateg, pendingProducts, collectedProducts, listProducts } =
    useContext(appContext);

  return (
    <div>
      <button onClick={() => setFilterCateg("Todos")}>Todos {listProducts.length}</button>
      <button onClick={() => setFilterCateg("Recogidos")}>Recogidos {collectedProducts.length}</button>
      <button onClick={() => setFilterCateg("Pendientes")}> Pendientes {pendingProducts.length}
      </button>
    </div>
  );
};

export default StatusFilter;
