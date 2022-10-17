import React from "react";
import Footer from "../components/Footer";
import SelectBox from "../components/SelectBox";
import Content from "../components/Content";

export default function BookmarkArea() {
  return (
    <div>
      즐겨찾기
      {/* <SelectBox changeArea={setArea} defaultValue={area}></SelectBox>
      <Content area={area} /> */}
      <Footer />
    </div>
  );
}