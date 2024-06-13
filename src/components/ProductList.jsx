import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow">
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="mb-2">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
