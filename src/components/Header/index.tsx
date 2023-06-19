import React, { useState } from "react";
import useCart from "../../hooks/useCart";

import CartLineItem from "../CartLineItem";

import logo from "../../imgs/logo.png"

import {
  Content,
  Container,
  LogoContainer,
  Logo,
  NavBar,
  NavItem,
  CartContainer,
  ShoppingCart,
  CartIcon,
  Cart,
} from "./styles";

const Header: React.FC = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const [confirm, setConfirm] = useState<boolean>(false);

  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();

  const onSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    setConfirm(true);
  };

  return (
    <Content>
      <Container>
        <LogoContainer>
          <Logo src={logo}/>
        </LogoContainer>
        <NavBar>
          <NavItem to={"/"}>
            <p>Início</p>
          </NavItem>
          <NavItem to={"/menu"}>
            <p>Menu</p>
          </NavItem>
        </NavBar>
        <CartContainer>
          <ShoppingCart onClick={handleNavbarClick}>
            <CartIcon />
          </ShoppingCart>
        </CartContainer>
      </Container>
      <Cart className={`navbar ${isNavbarOpen ? "open" : ""}`}>
        <h2>CARRINHO</h2>
        <ul>
          {cart.map((item) => {
            return (
              <CartLineItem
                key={item.sku}
                item={item}
                dispatch={dispatch}
                REDUCER_ACTIONS={REDUCER_ACTIONS}
              />
            );
          })}
        </ul>
        <div>
          <p>Items: {totalItems}</p>
          <p>Preço Total: {totalPrice}</p>
          <button disabled={!totalItems} onClick={onSubmitOrder}>
            COMPRAR
          </button>
        </div>
      </Cart>
    </Content>
  );
};

export default Header;
