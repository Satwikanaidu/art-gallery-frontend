import React from "react";
import { Link } from "react-router-dom";

const artworks = [
  { id: 1, title: "School of Athens", image: "/photos/artwork1.jpeg" },
  { id: 2, title: "The Swing Fragonard", image: "/photos/artwork2.jpeg" },
  { id: 2, title: "Fantastic Vase of Sunflowers", image: "/photos/artwork3.jpeg" },
  { id: 2, title: "Bridge Of Impressions", image: "/photos/artwork4.jpeg" },
  { id: 2, title: "Girl with a Pearl Earring", image: "/photos/artwork5.jpeg" },
  { id: 2, title: "The Persistance Of Memory", image: "/photos/artwork6.jpg" },
];

const ArtworkGrid = () => {
  return (
    <div>
      <h1>Artworks</h1>
      <div className="artwork-grid">
        {artworks.map((art) => (
          <div key={art.id}>
            <img src={art.image} alt={art.title} />
            <h2>{art.title}</h2>
            <Link to={`/artworks/${art.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtworkGrid;
