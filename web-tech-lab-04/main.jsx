import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProductCatalog from "./product_catalog.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductCatalog />
  </StrictMode>
);
