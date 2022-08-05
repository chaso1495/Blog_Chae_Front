import "./App.css";
import React, { useState } from "react";
import Main from "./Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Blog from "./Pages/Blog";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Blog" element={<Blog />} />
        {/* <Route path="/Project" element={<Project />} />
        <Route path="/Problemsolving" element={<ProblemSolving />} /> */}
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
