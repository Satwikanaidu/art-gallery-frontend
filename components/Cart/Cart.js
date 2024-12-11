import React, { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, title: "Artwork 1", price: 100, img: "/photos/artwork1.jpeg" },
    { id: 2, title: "Artwork 2", price: 150, img: "/photos/artwork2.jpeg" },
  ]);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <img
              src={item.img}
              alt={item.title}
              style={{ width: "100px", borderRadius: "5px", marginRight: "10px" }}
            />
            {item.title} - ${item.price}{" "}
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Total: ${total}</h2>
    </div>
  );
};

export default Cart;