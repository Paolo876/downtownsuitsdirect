import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

//pages
import Home from "./pages/Home";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Services from "./pages/Services"

function App() {

  if(document.readyState === "complete") console.log("run")
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/"/>
        <Route element={<About />} path="/about"/>
        <Route element={<Contact />} path="/contact"/>
        <Route element={<Services />} path="/services"/>
      </Routes>
    </>

  );
}

export default App;
