import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Home from "./home";
import Liftoff from "./pages/liftoff";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/pages/about" element={<About />} />
          <Route path="/pages/liftoff" element={<Liftoff />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
