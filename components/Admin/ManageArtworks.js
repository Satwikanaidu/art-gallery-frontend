import React, { useState } from "react";

const ManageArtworks = () => {
  const [artworks, setArtworks] = useState([
    { id: 1, title: "School Of Athens", artist: "Sandro Botticelli", img: "/photos/artwork1.jpeg"},
    { id: 2, title: "The Swing Fragonard", artist: "Leonardo da Vinci", img: "/photos/artwork2.jpeg"},
    { id: 3, title: "Fantastic Vase of Sunflowers", artist: "Albrecht Dürer", img: "/photos/artwork3.jpeg"},
    { id: 4, title: "Bridge Of Impressions", artist: "Michelangelo", img: "/photos/artwork4.jpeg"},
    { id: 5, title: "Girl with a Pearl Earring", artist: "Raphael", img: "/photos/artwork5.jpeg"},
    { id: 6, title: "The Persistance Of Memory", artist: "Caravaggio", img: "/photos/artwork6.jpg"},
  ]);

  const handleDelete = (id) => {
    setArtworks(artworks.filter((art) => art.id !== id));
  };

  return (
    <div>
      <h1>Manage Artworks</h1>
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
            <button onClick={() => handleDelete(art.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageArtworks;
