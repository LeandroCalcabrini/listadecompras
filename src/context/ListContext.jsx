import { appContext } from "./appContext";
import { useState } from "react";

const ListContext = ({ children }) => {
  const [list, setList] = useState([]);
 


  return (
    <appContext.Provider value={{ list, setList, }}>
      {children}
    </appContext.Provider>
  );
};

export default ListContext;
