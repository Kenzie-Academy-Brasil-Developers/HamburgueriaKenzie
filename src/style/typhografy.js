import styled, { css } from "styled-components";

export const PriceItemColor = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: var(--color-primary);
`;

export const SearchResult = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  gap: 10px;
  position: absolute;
  z-index: 1;
  top: 90px;
  width: 700px;
  max-width: 100%;
  height: 80px;
  padding: 20px;
`;

export const ResultForSearch = styled.p`
  font-size: 26px;
  font-weight: 700;
  color: var(--grey-4);
`;

export const SearchResultSpan = styled.span`
  font-size: 26px;
  font-weight: 700;
  color: var(--grey-3);
`;

export const CategoryNameProduct = styled.p`
  color: var(--grey-3);
  font-size: 12px;
  font-weight: 400;
`;


export const ProductMenuName = styled.h3`
color: var(--grey-4);
font-weight: 700;
font-size: 18px;

`

export const QuantityItens = styled.p`
color: var(--grey-4);
font-size: 14px;

`