import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/artworks">Artworks</Link>
        <Link to="/artists">Artists</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/signin">Signin</Link>
        <Link to="/signup">Signup</Link>
      </nav>
    </header>
  );
};

export default Header;
