import React from "react";
import { Link } from "react-router-dom";

const artists = [
  { id: 1, name: "Sandro Botticelli" },
  { id: 2, name: "Leonardo da Vinci" },
  { id: 2, name: "Albrecht Dürer" },
  { id: 2, name: "Michelangelo" },
  { id: 2, name: "Raphael" },
  { id: 2, name: "Caravaggio" },
];

const ArtistList = () => {
  return (
    <div>
      <h1>Artists</h1>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistList;
