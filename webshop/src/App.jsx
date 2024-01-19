import React, { useState } from "react";
import {
  Navbar,
  Login,
  Register,
  Basket,
  News,
  Gpu,
  Auction,
  Center,
} from "./pages/components";
import Home from "./pages/Home";
import About from "./pages/About";

import { Route, Routes } from "react-router-dom";
function App() {
  const [currentForm, setCurrentForm] = useState("Login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <Center>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/new_products" element={<News />}></Route>
          <Route path="/products_pages/gpu" element={<Gpu />}></Route>
          <Route path="auction" element={<Auction />}></Route>
          <Route
            path="/login"
            element={
              currentForm === "register" ? (
                <Register onFormSwitch={toggleForm} />
              ) : (
                <Login onFormSwitch={toggleForm} />
              )
            }
          ></Route>
          <Route path="/basket" element={<Basket />}></Route>
        </Routes>
      </div>
    </Center>
  );
}

export default App;
