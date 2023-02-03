import styled, { css } from "styled-components";

export const ImgItem = styled.img`
  display: flex;
  margin: 0 auto;
  width: 177px;
`;

export const UlContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow-x: auto;
    gap: 25px;
  width: 1000px;
  height: 735px;
  flex-wrap: nowrap;
  margin-top: 40px;
  max-width: 100%;
  margin-left: 5px;
  margin-top: 100px;

  @media(min-width: 500px){
    margin-left: 50px;
  }
`;

export const ItemCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  width: 300px;
  height: 346px;
  border: 2px solid var(--grey-2);
  border-radius: 5px;
  max-width: 100%;
`;

export const DivImg = styled.div`
  width: 100%;
  background-color: var(--grey-2);
`;

export const DivInformationItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px 20px;
`;
