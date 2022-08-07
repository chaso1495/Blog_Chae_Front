import "./App.css";
import React, { useState } from "react";
import Main from "./Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Project from "./Pages/Project";
import ProblemSolving from "./Pages/ProblemSolving";
import Home from "./Pages/Home";

const App = () => {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/project" element={<Blog />} />
        <Route path="/problemsolving" element={<ProblemSolving />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
