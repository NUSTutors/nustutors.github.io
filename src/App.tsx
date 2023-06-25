import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./Home";
import Liftoff from "./pages/Liftoff";
import Milestone2 from "./pages/Milestone2";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/pages/about" element={<About />} />
          <Route path="/pages/liftoff" element={<Liftoff />} />
          <Route path="/pages/milestone2" element={<Milestone2 />} />
        </Routes>
      </Router>
    </>
  );
}
