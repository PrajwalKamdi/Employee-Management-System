import React, { useState } from "react";
import Mycontext from "./Context";
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  return (
    <Mycontext.Provider value={{ user, setUser }}>
      {children}
    </Mycontext.Provider>
  );
};
export default ContextProvider;
