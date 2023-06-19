import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
  }

  animation: fadeIn 2s;
  position: relative;
  height: 300px;
  width: 200px;
  background-color: var(--primary);
  border-radius: 8px;
  box-shadow: 0 0 20px var(--shadow-100);

  > img {
    border-radius: 8px;
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: "";
    z-index: 10;
    position: absolute;
    max-height: 300px;
    max-width: 200px;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
    border-radius: 8px;
  }
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > h1 {
    z-index: 20;
    color: var(--primary);
    position: absolute;
    font-size: var(--size-xl);
    top: 10px;
    font-weight: 500;
  }
`;

export const Price = styled.div`
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 44px;
  color: var(--primary);
  font-size: var(--size-lg);
  font-weight: 500;

  > p {
    color: rgb(0, 250, 0);
  }
`;

export const Button = styled.button`
  text-decoration: none;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  color: var(--secondary);
  background-color: var(--primary);
  bottom: 15px;
  width: 110px;
  border-radius: 8px;
  border: solid 2px var(--primary);
  cursor: pointer;
  transition: 0.3s;
  font-weight: 600;
  letter-spacing: -1px;

  &:hover {
    background: transparent;
    color: var(--primary);
  }
`;
