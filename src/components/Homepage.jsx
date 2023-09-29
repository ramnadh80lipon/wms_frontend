import React, { useState } from 'react';

function Homepage() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 15 },
    { id: 3, name: 'Product 3', price: 20 },
    { id: 4, name: 'Product 4', price: 25 },
    { id: 5, name: 'Product 5', price: 30 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  const cartTotal = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Shopping Cart</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Products:</h2>
          <ul className="list-group">
            {products.map((product) => (
              <li
                key={product.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {product.name}
                <span className="badge bg-primary rounded-pill">${product.price}</span>
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Cart:</h2>
          <ul className="list-group">
            {cart.map((product) => (
              <li
                key={product.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {product.name}
                <span className="badge bg-primary rounded-pill">${product.price}</span>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-3">
            Total: <strong>${cartTotal}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
