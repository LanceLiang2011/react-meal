import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import HeaderCartButton from "./components/Layout/HeaderCartButton";
import Meals from "./components/Meals/Meals";
import CartListContextProvider from "./contexts/CartListContext";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const openCart = () => {
    setCartOpen(true);
  };
  const closeCart = () => {
    setCartOpen(false);
  };
  return (
    <CartListContextProvider>
      {cartOpen && <Cart onClose={closeCart} />}
      <Header>
        <HeaderCartButton onClick={openCart} />
      </Header>
      <main>
        <Meals />
      </main>
    </CartListContextProvider>
  );
}

export default App;
