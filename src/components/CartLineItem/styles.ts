import styled from "styled-components";
import { X } from "styled-icons/fa-solid";

export const Container = styled.div`
  display: flex;
  box-shadow: 0 0 20px var(--shadow-100);
  border-radius: 8px;
  width: 280px;
`;

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  margin: 0 10px;
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
  width: 100%;
`;

export const ItemPreview = styled.div`
  height: 40px;
  min-width: 40px;
  max-width: 40px;
  border-radius: 8px;

  > img {
    width: 100%;
    height: 100%;
    background-color: var(--secondary);
    border-radius: 8px;
    object-fit: cover;
  }
`;

export const ItemName = styled.div`
  font-weight: 600;
`;

export const ItemAdds = styled.div``;

export const Price = styled.div`
  font-weight: 600;
  color: green;
`;

export const Quantity = styled.label``;

export const Select = styled.select`
  width: 100px;
  border: 1px solid var(--shadow-100);
`;

export const SubTotal = styled.div`
  font-weight: 600;
  color: green;
`;

export const RemoveButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  background-color: red;
  min-height: 30px;
  min-width: 30px;
  font-size: var(--size-xs);
  line-height: 1px;
  color: var(--primary);
  border-radius: 50%;
  transition: 0.3s;

  &:hover {
    background-color: rgba(200, 0, 0, 1);
  }
`;

export const RemoveIcon = styled(X)`
  max-height: 10px;
`;
