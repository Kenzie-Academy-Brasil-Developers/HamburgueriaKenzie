import { v4 as uuidv4 } from "uuid";
import {
  ButtonDecrement,
  ButtonIncrement,
  ButtonRemoveAll,
  ButtonRemoveItem,
} from "../../style/buttons";
import {
  DivNameCartShopping,
  ImgShoppingCart,
  InformationItemShoppingCart,
  InformationValueShopping,
  LiShoppingCartForm,
  UlShoppingCartForm,
} from "../../style/shoppingCart";
import { CategoryNameProduct, PriceItemColor, ProductMenuName, QuantityItens } from "../../style/typhografy";

export default function ProductCartList({
  shoppingCartList,
  removeCartShopping,
  setShoppingCartList,
  removeAllItens,
}) {
  function increment(index) {
    shoppingCartList[index].count++;
    localStorage.setItem("@MENU", JSON.stringify(shoppingCartList));

    setShoppingCartList(JSON.parse(localStorage.getItem("@MENU")));
  }

  function decrement(index, cartID) {
    if (shoppingCartList[index].count > 1) {
      shoppingCartList[index].count--;
      localStorage.setItem("@MENU", JSON.stringify(shoppingCartList));
      setShoppingCartList(JSON.parse(localStorage.getItem("@MENU")));
    } else {      
      removeCartShopping(cartID);
    }
  }

  let valueCart = shoppingCartList.reduce((accumulate, valueCurrent) => {
    return accumulate + valueCurrent.price * valueCurrent.count;
  }, 0);

  return (
    <>
      <UlShoppingCartForm>
        <DivNameCartShopping>
          <h2>Carrinho de Compras</h2>
        </DivNameCartShopping>

        {shoppingCartList.map((cart, index) => (
          <LiShoppingCartForm key={uuidv4()}>
            <ImgShoppingCart src={cart.img} alt="FoodImage" />

            <InformationItemShoppingCart>
              <ProductMenuName>{cart.name}</ProductMenuName>
              <CategoryNameProduct>{cart.category}</CategoryNameProduct>
              <QuantityItens>{cart.count} item</QuantityItens>
            </InformationItemShoppingCart>
            <ButtonIncrement onClick={() => increment(index)}>
              +
            </ButtonIncrement>
            <ButtonDecrement onClick={() => decrement(index, cart.id)}>
              -
            </ButtonDecrement>
            <ButtonRemoveItem onClick={() => removeCartShopping(cart.id)}>
              Remover
            </ButtonRemoveItem>
          </LiShoppingCartForm>
        ))}
      </UlShoppingCartForm>
      <InformationValueShopping>
        <ButtonRemoveAll onClick={() => removeAllItens()}>
          Remover Todos os Itens
        </ButtonRemoveAll>

        <p>
          Valor Total:{" "}
          <PriceItemColor> R$ {valueCart.toFixed(2)}</PriceItemColor>{" "}
        </p>
      </InformationValueShopping>
    </>
  );
}
