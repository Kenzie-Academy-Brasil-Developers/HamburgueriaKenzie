import React from "react";
import ProductCard from "../../ProductCard/ProductCard";
import { v4 as uuidv4 } from "uuid";
import { UlContainer } from "../../../style/cardItem";

export default function ProductsList({ addCartShopping, searchMenuList }) {
  return (
    <UlContainer>
      {searchMenuList.map((product) => {
      return  product.name && ( 
          <ProductCard
            key={uuidv4()}
            product={product}
            addCartShopping={addCartShopping}
          />
        );
      })}
    </UlContainer>
  );
}
