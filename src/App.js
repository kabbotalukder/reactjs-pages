import React from "react";
import {BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Navbar from "./NavBar";
import Home from "./Home";
import About from "./About";

function App() {
  return (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/about" element={<About />}></Route>
    </Routes>
  </Router>
  );
}

export default App;
