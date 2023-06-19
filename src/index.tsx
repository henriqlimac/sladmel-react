import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { CartProvider } from "./components/context/CartProvider";
import { ProductsProvider } from "./components/context/ProductsProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>
);
