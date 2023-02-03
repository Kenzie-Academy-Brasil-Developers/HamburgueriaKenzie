import { useEffect, useState } from "react";
import { api } from "./services/api";
import Loading from "./Components/Loading";
import ProductsList from "./Components/Loading/ProductsList";
import ProductCartList from "./Components/ProductCartList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchProduct from "./Components/SearchProduct/SearchProduct";
import kenzieLogo from "/src/assets/Mask Group.png";
import { ClearSearch, CloseOpenModal} from "./style/buttons";
import { DivCartShopping, DivNameCartShopping } from "./style/shoppingCart";
import { ResultForSearch, SearchResult, SearchResultSpan } from "./style/typhografy";

function App() {
  const localMenuCartList = localStorage.getItem("@MENU");
  const [loading, setLoading] = useState(false);
  const [hamburguerList, setHamburguerList] = useState([]);
  const [shoppingCartList, setShoppingCartList] = useState(
    localMenuCartList ? JSON.parse(localMenuCartList) : []
  );
  const [shoppingCartListModal, setShoppingCartListModal] = useState(false);

  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        const response = await api.get("products");

        setHamburguerList(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("@MENU", JSON.stringify(shoppingCartList));
  }, [shoppingCartList]);

  const searchMenuList = hamburguerList.filter((product) => {
    return search === ""
      ? true
      : product.name.toLowerCase().includes(search.toLowerCase()) ||
        search === ""
      ? true
      : product.category.toLowerCase().includes(search.toLowerCase());
  });

  const addCartShopping = (product) => {
    const localMenuCartList = localStorage.getItem("@MENU");

    if (!localMenuCartList.includes(product.name)) {
      toast.success(`O produto ${product.name} foi adicionado ao carrinho`);
      if (shoppingCartList) {
        setShoppingCartList([...shoppingCartList, { ...product, count: 1 }]);
      } else {
        setShoppingCartList([{ ...product, count: 1 }]);
      }
    } else {
      toast.error(`O produto ${product.name} já foi adicionado ao carrinho`);
    }
  };

  const removeCartShopping = (productId) => {
    const newCartShopping = shoppingCartList.filter(
      (cart) => cart.id !== productId
    );
    setShoppingCartList(newCartShopping);
    toast.error("O produto foi removido do carrinho");
  };

  const removeAllItens = () => {
    setShoppingCartList("");
    toast("Todos os itens foram removidos");
  };

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <main>
          <nav>
            <img src={kenzieLogo} alt="Logo" />
            <SearchProduct setSearch={setSearch} />
          </nav>

          {search && (
            <SearchResult>
              <ResultForSearch>Resultado de busca para: <SearchResultSpan>{search}</SearchResultSpan></ResultForSearch>
              <ClearSearch onClick={() => setSearch("")}>Limpar busca</ClearSearch>
            </SearchResult>
          )}

          <ProductsList
            searchMenuList={searchMenuList}
            hamburguerList={hamburguerList}
            addCartShopping={addCartShopping}
          />

          {shoppingCartList.length > 0 ? (
            <DivCartShopping>
              <CloseOpenModal
                onClick={() => setShoppingCartListModal(!shoppingCartListModal)}
              >
                Abrir e fechar carrinho
              </CloseOpenModal>
              {shoppingCartListModal && (
                <ProductCartList
                  setShoppingCartListModal={setShoppingCartListModal}
                  shoppingCartList={shoppingCartList}
                  removeCartShopping={removeCartShopping}
                  setShoppingCartList={setShoppingCartList}
                  removeAllItens={removeAllItens}
                />
              )}
            </DivCartShopping>
          ) : (
            <DivCartShopping>
              <DivNameCartShopping>
                <h2>Carrinho de Compras</h2>
              </DivNameCartShopping>
              <h3>Sua sacola está vazia</h3>
              <p>Adicione itens</p>
            </DivCartShopping>
          )}
        </main>
      )}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
