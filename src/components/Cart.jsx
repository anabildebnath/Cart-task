import React from 'react';
import { Button } from './ui/button';

const Cart = ({ cartItems, addToCart, removeItemFromCart, clearCart }) => {
  const formatPrice = (price) => `$${price.toFixed(2)}`;

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleClearCart = () => {
    clearCart(); // Call the clearCart function passed from props
  };

  return (
    <div className="border p-4 rounded shadow mt-4">
      <h2 className="text-lg font-bold mb-2">Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="mb-2 flex justify-between items-center">
                <div>
                  {item.name} - {formatPrice(item.price)} x {item.quantity} = Total{' '}
                  {formatPrice(item.price * item.quantity)}
                </div>
                <div className="flex gap-4">
                  <Button onClick={() => addToCart(item)}>Add More</Button>
                  <Button onClick={() => removeItemFromCart(item)}>Remove</Button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-left font-bold">
            <p>Total: {formatPrice(calculateTotal())}</p>
            <Button onClick={handleClearCart} className="bg-red-500 text-white px-4 py-2 mt-2">
              Clear Cart
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
