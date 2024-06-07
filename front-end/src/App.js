import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./HomePage/Home";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Users from "./Users/Users";
import { CookiesProvider } from "react-cookie";

function App() {
  const value = {
    appendTo: "self",
    cssTransition: true,
  };
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
