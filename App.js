import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";
import ArtworkGrid from "./components/Artworks/ArtworkGrid";
import ArtworkDetails from "./components/Artworks/ArtworkDetails";
import ArtistList from "./components/Artists/ArtistList";
import ArtistDetails from "./components/Artists/ArtistDetails";
import UserProfile from "./components/Profile/UserProfile";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Cart/Checkout";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './styles.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/artworks" element={<ArtworkGrid />} />
        <Route path="/artworks/:id" element={<ArtworkDetails />} />
        <Route path="/artists" element={<ArtistList />} />
        <Route path="/artists/:id" element={<ArtistDetails />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;