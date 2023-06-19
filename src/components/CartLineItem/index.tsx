import React, { ReactElement } from "react";
import {
  CartItemType,
  ReducerAction,
  ReducerActionType,
} from "../context/CartProvider";

import {
  Container,
  List,
  ItemName,
  Select,
  SubTotal,
  RemoveButton,
  ItemPreview,
  ItemDescription,
  RemoveIcon,
} from "./styles";

type PropsType = {
  item: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
};

const CartLineItem = ({ item, dispatch, REDUCER_ACTIONS }: PropsType) => {
  const img: string = `./${item.sku}.jpeg`

  const lineTotal: number = item.qty * item.price;

  const highestQty: number = 10 > item.qty ? 10 : item.qty;

  const optionValues: number[] = Array.from({ length: highestQty }, (_, i) => i + 1);
  
  const options: ReactElement[] = optionValues.map((val) => {
    return (
      <option key={`opt${val}`} value={val}>
        {val}
      </option>
    );
  });

  const onChangeQty = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, qty: Number(e.target.value) },
    });
  };

  const onRemove = () =>
    dispatch({
      type: REDUCER_ACTIONS.REMOVE,
      payload: item,
    });

  return (
    <Container>
      <List>
        <ItemPreview>
          <img src={img} />
        </ItemPreview>
        <ItemDescription>
          <ItemName aria-label="Item Name">{item.name}</ItemName>
          <SubTotal aria-label="Line Item Subtotal">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(lineTotal)}
          </SubTotal>
          <Select
            name="itemQty"
            id="ItemQty"
            value={item.qty}
            aria-label="Item Quantity"
            onChange={onChangeQty}
          >
            {options}
          </Select>
        </ItemDescription>
        <RemoveButton
          aria-label="Remove Item From Cart"
          title="Remove Item From Cart"
          onClick={onRemove}
        >
          <RemoveIcon />
        </RemoveButton>
      </List>
    </Container>
  );
};

export default CartLineItem;
