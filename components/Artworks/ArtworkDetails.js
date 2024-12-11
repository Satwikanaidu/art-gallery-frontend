import React, { useState } from "react";

const Artworks = () => {
  // State for available artworks
  const artworks = [
    { id: 1, title: "School Of Athens", artist: "Sandro Botticelli", img: "/photos/artwork1.jpeg", price: 100 },
    { id: 2, title: "The Swing Fragonard", artist: "Leonardo da Vinci", img: "/photos/artwork2.jpeg", price: 150 },
    { id: 3, title: "Fantastic Vase of Sunflowers", artist: "Albrecht Dürer", img: "/photos/artwork3.jpeg", price: 200 },
    { id: 4, title: "Bridge Of Impressions", artist: "Michelangelo", img: "/photos/artwork4.jpeg", price: 250 },
    { id: 5, title: "Girl with a Pearl Earring", artist: "Raphael", img: "/photos/artwork5.jpeg", price: 300 },
    { id: 6, title: "The Persistance Of Memory", artist: "Caravaggio", img: "/photos/artwork6.jpg", price: 350 },  
  ];

  // State for cart items
  const [cart, setCart] = useState([]);

  // Function to add artwork to cart
  const addToCart = (artwork) => {
    // Prevent duplicate items
    if (cart.find((item) => item.id === artwork.id)) {
      alert(`${artwork.title} is already in your cart.`);
      return;
    }
    setCart([...cart, artwork]);
    alert(`${artwork.title} has been added to your cart.`);
  };

  return (
    <div>
      <h1>Artworks</h1>
      <div className="artwork-grid">
        {artworks.map((art) => (
          <div key={art.id} className="artwork-card">
            <img
              src={art.img}
              alt={art.title}
              style={{ width: "100%", borderRadius: "5px" }}
            />
            <h2>{art.title}</h2>
            <p>By {art.artist}</p>
            <p>Price: ${art.price}</p>
            <button onClick={() => addToCart(art)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Display cart items */}
      {cart.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h2>Cart</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} - ${item.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Artworks;
