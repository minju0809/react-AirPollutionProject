import SelectBox from "./components/SelectBox";
import Content from "./components/Content";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import MyArea from "./pages/MyArea";
import BookmarkArea from "./pages/BookmarkArea";
import AllArea from "./pages/AllArea";

function App() {
  const [area, setArea] = useState("종로구");


  return (
    <BrowserRouter className="App">
      <SelectBox changeArea={setArea} defaultValue={area}></SelectBox>
      <Content area={area} />
      <Routes>
        <Route index element={<MyArea />} />
        <Route path="AllArea" element={<AllArea />} />
        <Route path="BookmarkArea" element={<BookmarkArea />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
