import React from "react";
import Home from "./Home";
import Menu from "./Menu";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";

export default function App() {
  return (
    <div style={{ backgroundImage: 'url("data:image/jpeg;base64,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")', backgroundSize: 'cover', minHeight: '100vh' }}>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}