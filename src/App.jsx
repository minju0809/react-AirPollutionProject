import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyArea from "./pages/MyArea";
import BookmarkArea from "./pages/BookmarkArea";
import AllArea from "./pages/AllArea";

function App() {
  const area = "종로구";

  return (
    <BrowserRouter className="App">
      <Routes>
        <Route index element={<MyArea />} />
        <Route path="AllArea" element={<AllArea area={area} />} />
        <Route path="BookmarkArea" element={<BookmarkArea />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
