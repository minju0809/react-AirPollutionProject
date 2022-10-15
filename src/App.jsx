import SelectBox from "./components/SelectBox";
import Content from "./components/Content";
import Footer from "./components/Footer";
import React from "react";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";

import { useState } from "react";

const OPTIONS = [
  { value: "seoul", name: "서울" },
  { value: "incheon", name: "인천" },
  { value: "busan", name: "부산" },
  { value: "daegu", name: "대구" },
  { value: "daejeon", name: "대전" },
  { value: "ulsan", name: "울산" },
  { value: "sejong", name: "세종" },
  { value: "jeju", name: "제주" },
];

function App() {
  const [area, setArea] =useState("종로구");
  return (
    <BrowserRouter>
      <div className="App">
        {/* 오류는 없으나 defaultValue가 적용되지 않음 */}
        <SelectBox changeArea={setArea} defaultValue={area} options={OPTIONS}></SelectBox>
        <Content area={area} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
