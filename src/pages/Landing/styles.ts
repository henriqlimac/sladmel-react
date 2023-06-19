import styled from "styled-components";
import wave from "../../imgs/background.svg";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  background-image: url(${wave});
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr;
    min-height: 100vh;
    height: 100%;
    margin-top: 0;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 10vw;

  @media (min-width: 768px) {
    align-items: flex-start;
    justify-content: flex-start;
  }

  @media (min-width: 1024px) {
    padding-right: 0;
  }
`;

export const Title = styled.div`
  @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
  }

  animation: fadeIn 2s;
  > h1 {
    font-family: "Diphylleia", serif;
    font-size: var(--size-5xl);
    letter-spacing: -1px;

    @media (min-width: 768px) {
      font-size: var(--size-8xl);
    }
  }
`;

export const About = styled.div`
  @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
  }

  animation: fadeIn 2s;
  > p {
    text-align: center;
    font-size: var(--size-sm);

    @media (min-width: 768px) {
      text-align: justify;
      font-size: var(--size-base);
    }
  }
`;

export const Button = styled(Link)`
  @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
  }

  animation: fadeIn 2s;
  text-decoration: none;
  background-color: var(--secondary);
  border: solid 3px var(--secondary);
  padding: 10px 50px;
  margin: 10px 0;
  color: var(--primary);
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0);
    color: var(--secondary);
  }
`;

export const Gallery = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  filter: brightness(1.2);
`;

export const Image = styled.img`
  @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
  }

  animation: fadeIn 0s;
  max-height: 100%;
  max-width: 100%;
  padding: 2vh;
  filter: drop-shadow(20px 20px 10px var(--shadow-500));
`;
