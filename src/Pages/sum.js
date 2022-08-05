import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Sum = () => {
  const params = useParams();
  const value1 = params.left;
  const value2 = params.right;
  return (
    <div>
      <p> Sum 페이지 입니다. </p>
      <p>{Number(value1) + Number(value2)}</p>
    </div>
  );
};

export default Sum;
