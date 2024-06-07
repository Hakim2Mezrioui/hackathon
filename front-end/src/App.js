import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./HomePage/Home";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Users from "./Users/Users";
import { PrimeReactProvider } from "primereact/api";

function App() {
  const value = {
    appendTo: "self",
    cssTransition: true,
  };
  return (
    <PrimeReactProvider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  );
}

export default App;
