import React from "react";
import Home from "./Home";
import Menu from "./Menu";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Review from "./Review";
import Contact from "./Contact";
import About from "./About";

export default function App() {
  return (
    <div style={{ backgroundImage: 'url("data:image/jpeg;base64,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")', backgroundSize: 'cover', minHeight: '100vh' }}>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        
      </Routes>
    </div>
  );
}