import AppForm from "./appForm";
import Category from "./Category";
import ItemList from "./ItemList";
import StatusFilter from "./StatusFilter";

const AppList = () => {
  return (
    <main>
      <AppForm/>
      <Category/>
      <ItemList/>
      <StatusFilter/>

    </main>
  );
};

export default AppList;
