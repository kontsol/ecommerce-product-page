import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductContainer from "./components/ProductContainer";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (quantity) => {
    if (quantity > 0) {
      setCart((prevCart) => {
        const productId = 1; // Product id of each item
        const productTitle = "Fall Limited Edition Sneakers";
        const productPrice = 125;
        const existingItemIndex = prevCart.findIndex(
          (item) => item.id === productId
        );

        if (existingItemIndex !== -1) {
          // If the item already exists, update its quantity
          const updatedCart = [...prevCart];
          updatedCart[existingItemIndex].quantity += quantity;
          return updatedCart;
        } else {
          // If the item is new, add it to the cart
          return [
            ...prevCart,
            {
              id: productId,
              title: productTitle,
              price: productPrice,
              quantity,
            },
          ];
        }
      });
    }
  };

  const removeFromCart = (idToRemove) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== idToRemove));
  };

  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <section className="pt-4">
      <Header
        cartCount={cart.length}
        cart={cart}
        totalCount={totalCount}
        removeFromCart={removeFromCart}
      />
      <ProductContainer addToCart={addToCart} />
    </section>
  );
}

export default App;
