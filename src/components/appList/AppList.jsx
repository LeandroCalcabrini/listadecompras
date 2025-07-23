import AppForm from "./appForm/AppForm.jsx";
import Category from "./category/Category.jsx";
import ItemList from "./itemList/ItemList.jsx";
import StatusFilter from "./statusFilter/StatusFilter.jsx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../appList/appList.css";

const AppList = () => {
  return (
    <>
      <article className="app-container">
        <h1 className="title">
          Lista de Compras <AiOutlineShoppingCart size={40} />
        </h1>
        <AppForm />
        <Category />
        <ItemList />
        <StatusFilter />
      </article>
    </>
  );
};

export default AppList;
