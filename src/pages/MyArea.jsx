import React from "react";
import Footer from "../components/Footer";
import Content from "../components/Content";

export default function MyArea() {
  // 내 지역: 종로구로 설정
  const area = '종로구';

  return (
    <div>
      <Content area={area} />
      <Footer />
    </div>
  );
}
