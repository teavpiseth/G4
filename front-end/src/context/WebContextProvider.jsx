import { useState, createContext } from "react";

export const WebContext = createContext(null);

export const WebContextProvider = ({ children }) => {
  const [listAllCategory, setListAllCategory] = useState([]);
  function setAlertBrowser(message) {
    alert(message);
  }
  return (
    <WebContext.Provider
      value={{ listAllCategory, setListAllCategory, setAlertBrowser }}
    >
      {children}
    </WebContext.Provider>
  );
};
