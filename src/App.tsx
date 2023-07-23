import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./Home";
import Liftoff from "./pages/Liftoff";
import Milestone2 from "./pages/Milestone2";
import Milestone3 from "./pages/Milestone3";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="liftoff" element={<Liftoff />} />
        <Route path="milestone2" element={<Milestone2 />} />
        <Route path="milestone3" element={<Milestone3 />} />
      </Routes>
    </>
  );
}
