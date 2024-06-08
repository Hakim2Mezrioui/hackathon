import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./HomePage/Home";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Users from "./Users/Users";
import { CookiesProvider } from "react-cookie";
import Profile from "./Profile/Profile";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Missing from "./Missing/Missing";
import DetailedPerson from "./Missing/Person";
import AddMissingPerson from "./forms/AddMissing";

function App() {
  const value = {
    appendTo: "self",
    cssTransition: true,
  };
  return (
    <Provider store={store}>
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<Users />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/missing" element={<Missing/>} />
            <Route path="/detailPerson" element={<DetailedPerson/>} />
            <Route path="/addMissing" element={<AddMissingPerson/>} />
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </Provider>
  );
}

export default App;
