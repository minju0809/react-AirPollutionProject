import SelectBox from "./components/SelectBox";
import Content from "./components/Content";
import Footer from "./components/Footer";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";

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

export default function App() {

  return (
    <BrowserRouter>
      <div className="App">
        {/* 오류는 없으나 defaultValue가 적용되지 않음 */}
        <SelectBox options={OPTIONS} defaultValue="인천"></SelectBox>
        {/* newData 값이 나오지 않음 */}
        <Content />
        {/* 카드에서 보여줄 형식 참고 자료 */}
        {/* {members.member.map((member, i) => (
          <Card 
            key={"card-" + i} 
            route={{ history, match }} 
            memberData={member} 
            onRemoveCard={removeCard} 
          />
        ))} */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

// export default App;
