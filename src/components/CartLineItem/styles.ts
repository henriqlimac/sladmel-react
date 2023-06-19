import styled from "styled-components";

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
  gap: 40px;
  padding: 10px;
`;

export const ItemPreview = styled.div`
  width: 40px;
  height: 40px;
  background-color: red;
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

export const Select = styled.select``;

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
    width: 25px;
    height: 25px;
    font-size: var(--size-xs);
    line-height: 1px;
    color: var(--primary);
    border-radius: 50%;
    transition: .3s;

    &:hover {
        background-color: rgba(200, 0, 0, 1);
    }
`;
