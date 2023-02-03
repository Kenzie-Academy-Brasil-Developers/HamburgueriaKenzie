import React from 'react'
import { ButtonAdd } from '../../style/buttons'
import { DivImg, ItemCard, ImgItem, DivInformationItem } from '../../style/cardItem'
import { CategoryNameProduct, PriceItemColor, ProductMenuName } from '../../style/typhografy'

export default function ProductCard({product, addCartShopping}) {
  return (
    <ItemCard key={product.name}>
      <DivImg>
        <ImgItem src={product.img}  />

      </DivImg>
      <DivInformationItem>
        <ProductMenuName>{product.name}</ProductMenuName>
        <CategoryNameProduct>{product.category}</CategoryNameProduct>
        <PriceItemColor>R$ {product.price}</PriceItemColor>

      </DivInformationItem>
        <ButtonAdd onClick={()=> addCartShopping(product)}>Adicionar</ButtonAdd>        
      </ItemCard>
  )
}
