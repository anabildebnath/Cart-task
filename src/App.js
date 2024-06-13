import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const initialProducts = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 101", price: 20 },
  { id: 3, name: "Product 32", price: 30 },
  { id: 4, name: "Product 323", price: 30 },
  { id: 5, name: "Product 5", price: 230 },
  { id: 6, name: "Product 6", price: 38 },
  { id: 7, name: "Product 232", price: 32 },
  { id: 8, name: "Product 812", price: 50 },
  { id: 9, name: "Product 99", price: 112 },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeItemFromCart = (productToRemove) => {
    const existingProduct = cartItems.find(
      (item) => item.id === productToRemove.id
    );
    if (existingProduct.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== productToRemove.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === productToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const filteredProducts = initialProducts.filter((product) => {
    if (product.name.toLowerCase() === searchTerm.toLowerCase()) {
      return true;
    }
    if (!searchTerm) {
      return true;
    }
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container mx-auto p-4">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProductList products={filteredProducts} addToCart={addToCart} />
      <Cart
        cartItems={cartItems}
        addToCart={addToCart}
        removeItemFromCart={removeItemFromCart}
        clearCart={() => setCartItems([])}
      />
    </div>
  );
};

export default App;
