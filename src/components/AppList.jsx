import AppForm from "./appForm";
import Category from "./Category";
import ItemList from "./ItemList";
import StatusFilter from "./StatusFilter";

const AppList = () => {
  return (
    <article>
      <AppForm/>
      <Category/>
      <ItemList/>
      <StatusFilter/>
    </article>
  );
};

export default AppList;
