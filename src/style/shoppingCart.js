import styled, { css } from "styled-components";

export const DivCartShopping = styled.div`
 



  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-direction: column;
  overflow-y: auto;
  margin-top: 40px;
  width: 365px;
  height: 530px;
  max-width: 100%;

  @media (min-width: 450px) {
    margin: 0 auto;
    margin-top: 100px;
    width: 600px;
    align-items: center;
  }

  @media (min-width: 1300px) {
    width: 365px;
  }
`;

export const UlShoppingCartForm = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 100%;
  
`;

export const LiShoppingCartForm = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 40px 20px;
  width: 365px;
  height: 80px;
  gap: 12px;
  max-width: 100%;
  border-bottom: 2px solid var(--grey-2);
  

`;

export const ImgShoppingCart = styled.img`
  background-color: var(--grey-2);
  width: 70px;
  height: 70px;
  max-width: 100%;
`;

export const InformationItemShoppingCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 180px;
  height: 80px;
  max-width: 100%;
  
`;

export const InformationValueShopping = styled.div`
  
 
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 50px;
  gap: 30px;
  max-width: 100%;
`;

export const DivNameCartShopping = styled.div`
  display: flex;
  background-color: var(--color-primary);
  color: var(--white);
  width: 365px;
  height: 65px;
  border-radius: 5px 5px 0px 0px;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

