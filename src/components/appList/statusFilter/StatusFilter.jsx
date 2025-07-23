import { useContext } from "react";
import { appContext } from "../../../context/appContext";
import "./statusFilter.css";
const StatusFilter = () => {
  const {
    setFilterCateg,
    pendingProducts,
    collectedProducts,
    listProducts,
    deleteAllProducts,
    filterCateg,
  } = useContext(appContext);

  return (
    <div className="statusContainer">
      <div className="btnsFilter">
        <button
          className={`btnFilter ${filterCateg === "Todos" ? "active" : ""}`}
          onClick={() => setFilterCateg("Todos")}
        >
          Todos ({listProducts.length})
        </button>
        <button
          className={`btnFilter ${filterCateg === "Recogidos" ? "active" : ""}`}
          onClick={() => setFilterCateg("Recogidos")}
        >
          Recogidos ({collectedProducts.length})
        </button>
        <button
          className={`btnFilter ${
            filterCateg === "Pendientes" ? "active" : ""
          }`}
          onClick={() => setFilterCateg("Pendientes")}
        >
          {" "}
          Pendientes ({pendingProducts.length})
        </button>
      </div>
      <div className="btnDeleteAll">
        <button className="btnReset" onClick={deleteAllProducts}>
          Borrar todos
        </button>
      </div>
    </div>
  );
};

export default StatusFilter;
