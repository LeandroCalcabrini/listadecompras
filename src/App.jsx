import "./App.css";
import AppList from "./components/appList/AppList";
import ListContext from "./context/ListContext";

function App() {
  return (
    <>
      <ListContext>
        <AppList />
      </ListContext>
    </>
  );
}

export default App;
