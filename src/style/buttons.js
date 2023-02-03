import styled, { css } from "styled-components";

export const ButtonAdd = styled.button`
  width: 130px;
  height: 60px;
  border-radius: 8px;
  padding: 0px, 20px, 0px, 20px;
  border: 2px solid var(--color-primary);
  color: var(--white);
  font-size: 16px;
  font-weight: 600;
  background-color: var(--color-primary);
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 10px;
  :hover {
    background-color: var(--color-hover-primary);
    border: 2px solid var(--color-hover-primary);
  }
`;

export const ButtonRemoveAll = styled.button`
  width: 343px;
  height: 50px;
  padding: 0, 20px, 0, 20px;
  background-color: var(--grey-2);
  color: var(--grey-3);
  border: 2px solid var(--grey-2);
  border-radius: 8px;
  max-width: 100%;
  :hover {
    background-color: var(--color-hover-grey);
    border: 2px solid var(--color-hover-grey);
    color: var(--white);
  }
`;

export const ButtonRemoveItem = styled.button`
  font-size: 12px;
  font-weight: 500;
  color: var(--grey-3);
  border: none;
  background-color: none;
  max-width: 100%;
`;

export const ButtonIncrement = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 8px;
  border: 2px solid var(--color-primary);
  color: var(--white);
  font-size: 16px;
  font-weight: 600;
  background-color: var(--color-primary);
  max-width: 100%;
  :hover {
    background-color: var(--color-hover-primary);
    border: 2px solid var(--color-hover-primary);
  }
`;

export const ButtonDecrement = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 8px;
  background-color: var(--grey-2);
  color: var(--grey-3);
  border: 2px solid var(--grey-2);
  font-size: 16px;
  font-weight: 600;
  max-width: 100%;
  :hover {
    background-color: var(--color-hover-grey);
    border: 2px solid var(--color-hover-grey);
    color: var(--white);
  }
`;

export const CloseOpenModal = styled.button`
  width: 365px;
  height: 40px;
  padding: 0, 20px, 0, 20px;
  background-color: var(--grey-2);
  color: var(--grey-3);
  border: 2px solid var(--grey-2);
  border-radius: 8px;
  max-width: 100%;

  :hover {
    background-color: var(--color-hover-grey);
    border: 2px solid var(--color-hover-grey);
    color: var(--white);
  }
`;

export const SearchButton = styled.button`
  margin-left: 10px;
  background-color: var(--color-primary);
  border-radius: 8px;
  width: 35px;
  height: 35px;
  max-width: 100%;

  :hover {
    background-color: var(--color-hover-primary);
    border: 2px solid var(--color-hover-primary);
  }
`;

export const InputSearch = styled.input`
  max-width: 100%;

  width: 100px;
  height: 40px;
  background-color: var(--white);
  border: 2px solid var(--grey-4);
  border-radius: 8px;

  @media (min-width: 510px) {
    width: 250px;
  }
`;

export const ClearSearch = styled.button`
  width: 120px;
  height: 30px;
  border-radius: 8px;
  padding: 0px, 10px, 0px, 10px;
  border: 2px solid var(--color-primary);
  color: var(--white);
  font-size: 12px;
  font-weight: 600;
  background-color: var(--color-primary);
  max-width: 100%;
  :hover {
    background-color: var(--color-hover-primary);
    border: 2px solid var(--color-hover-primary);
  }
`;
