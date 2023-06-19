import styled from "styled-components";
import { Link } from "react-router-dom";
import { CartShopping } from "styled-icons/fa-solid";

export const Content = styled.div`
.navbar {
  transform: translateX(100%);
  transition: 0.5s ease;
}

.navbar.open {
  transform: translateX(0);
  color: var(--secondary);
}
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  position: fixed;
  z-index: 99;

  height: 5rem;
  width: 100%;
  background-color: var(--primary);
  box-shadow: 0 0 20px var(--shadow-100);
`;

export const LogoContainer = styled.div`
  grid-area: 1 / 1 / 1 / 2;

  display: flex;
  align-items: center;
  justify-content: center;
  > h1 {
    font-family: "Diphylleia", serif;
    font-weight: bolder;
    font-size: var(--size-4xl);
  }
`;

export const Logo = styled.img`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
`;

export const NavBar = styled.div`
  grid-area: 1 / 2 / 1 / 4;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5vw;
`;

export const NavItem = styled(Link)`
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  font-size: var(--size-sm);

  @media (min-width: 768px) {
    font-size: var(--size-base);
  }

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    margin-top: 5px;
    border-radius: 8px;
    background-color: var(--secondary);
    top: 20px;
    bottom: 0;
    left: 0;
    transform-origin: center;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  :hover::before {
    transform-origin: center;
    transform: scaleX(0.5);
  }
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ShoppingCart = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    fill: var(--primary);
  }
`;

export const CartIcon = styled(CartShopping)`
  fill: var(--secondary);
  padding: 10px;
  transition: 0.3s;

  &:hover {
    fill: var(--primary);
  }
`;

export const Session = styled.div`
  grid-area: 1 / 4 / 1 / -1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2vw;

  > p {
    display: none;
  }
`;

export const Cart = styled.div`
    max-width: 320px;
    width: 100%;
    display: flex;
    flex-direction: column;
    z-index: 90;
    align-items: center;
    justify-content: center;
    position: fixed;
    right: 0;
    background-color: var(--primary);
    height: 100%;
    padding: 6rem 20px;
    transition: all .3s ease-in-out;
    box-shadow: 0 20px 20px var(--shadow-100);
    justify-content: space-between;

    > ul {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    > div > button {
      background-color: var(--secondary);
      color: var(--primary);
      padding: 10px 20px;
      margin: 10px;
      border-radius: 8px;
      cursor: pointer;
      transition: .3s;

      &:hover {
        background-color: green;
      }
    }
`;