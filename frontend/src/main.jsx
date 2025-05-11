import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.jsx";
import ContextProvider from "./Context/ContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <RouterProvider router={router}></RouterProvider>
  </ContextProvider>
);
