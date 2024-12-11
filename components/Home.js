import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Art Gallery</h1>
      <p>Explore stunning artworks and talented artists from around the globe.</p>
      <img
        src="/photos/gallery-banner.jpeg"
        alt="Art Gallery Banner"
        style={{ width: "100%", borderRadius: "10px" }}
      />
    </div>
  );
};

export default Home;
