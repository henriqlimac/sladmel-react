import React, { ReactElement } from "react";

import { Container, About, Title, Description, MenuContainer } from "./styles";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";

import MenuItem from "../../components/MenuItem";

const Menu = () => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();
  const { products } = useProducts();

  let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>;

  if (products?.length) {
    pageContent = products.map((product) => {
      const inCart: boolean = cart.some((item) => item.sku === product.sku);
      return (
        <MenuItem
          key={product.sku}
          product={product}
          dispatch={dispatch}
          REDUCER_ACTIONS={REDUCER_ACTIONS}
          inCart={inCart}
        />
      );
    });
  }

  const content = <MenuContainer>{pageContent}</MenuContainer>;

  return (
    <Container>
      <About>
        <Title>
          <h1>Menu</h1>
        </Title>
        <Description>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque error
            praesentium a. Voluptatum, ipsam at ducimus dolorum iure vitae
            libero fuga delectus ea maxime cumque natus molestias cupiditate
            nulla? Alias.
          </p>
        </Description>
      </About>
      {content}
    </Container>
  );
};

export default Menu;
