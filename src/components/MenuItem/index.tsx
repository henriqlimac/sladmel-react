import React, { ReactElement } from "react";
import { ReducerAction, ReducerActionType } from "../context/CartProvider";
import { ProductType } from "../context/ProductsProvider";

import { Container, Price, Button, Description } from "./styles";

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
};

const MenuItem = ({
  product,
  dispatch,
  REDUCER_ACTIONS,
  inCart,
}: PropsType): ReactElement => {
  const img: string = new URL(`../../../public/${product.sku}.jpeg`, import.meta.url).href;
  console.log(img);

  const onAddToCart = () =>
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });

  const itemInCart = inCart ? "NO CARRINHO" : null;

  return (
    <Container>
      <Description>
        <h1>{product.name}</h1>
      </Description>
      <img src={img} alt={product.name} />
      <Description>
        <Price>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(product.price)}
          <p>{itemInCart}</p>
        </Price>
        <Button onClick={onAddToCart}>+ CARRINHO</Button>
      </Description>
    </Container>
  );
};

export default MenuItem;
