import { StrictMode } from "react";
import ReactDOM from "react-dom/client"
import { GlobalStyle } from "./globalStyles.js";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </StrictMode>
);
