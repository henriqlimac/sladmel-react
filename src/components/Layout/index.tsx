import { useState } from "react";

import { Container, Wrapper } from "./styles";
import { Outlet } from "react-router-dom";
import Header from "../Header";

import { ProductsProvider } from "../context/ProductsProvider";
import { CartProvider } from "../context/CartProvider";

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Header />
          <Outlet />
      </Wrapper>
    </Container>
  );
};

export default Layout;
