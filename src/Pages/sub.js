import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Sub = () => {
  const params = useParams();
  const value1 = params.left;
  const value2 = params.right;
  return (
    <div>
      <p> Sub 페이지 입니다. </p>
      <p>{value1 - value2}</p>
    </div>
  );
};

export default Sub;
