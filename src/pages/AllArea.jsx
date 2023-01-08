import React, { useState, useEffect } from "react";
import data from "../data.json";
import Content from "../components/Content";
import places from "../data";

export default function AllArea({ bookmark, handleBookmark }) {
  const [area, setArea] = useState("");
  const [sido, setSido] = useState("");
  const sidoMenus = [
    "전국",
    "서울",
    "부산",
    "대구",
    "인천",
    "광주",
    "대전",
    "울산",
    "경기",
    "강원",
    "충북",
    "충남",
    "전북",
    "전남",
    "경북",
    "경남",
    "제주",
    "세종",
  ];
  // console.log(data.response.body.items);

  const filterArea = () => {
    const sidoFiltered = data.response.body.items.filter(
      (info) => info.sidoName === sido
    );
    console.log("sideofiltered", sidoFiltered, sido, area);
    let filtered;
    if (area !== "") {
      filtered = sidoFiltered.filter((station) => station.stationName === area);
    } else {
      filtered = sidoFiltered;
    }
    console.log("filterArea", filtered);
    if (filtered.length) {
      return filtered.map((info, idx) => {
        return (
          <Content
            key={idx}
            info={info}
            isBookmark={bookmark[info.stationName]}
            handleBookmark={handleBookmark}
          />
        );
      });
    } else {
      return null;
    }
  };

  const viewAllArea = () => {
    const all = data.response.body.items;
    if (all) {
      // console.log(all);
      return all.map((info, idx) => {
        return (
          <Content
            key={idx}
            info={info}
            isBookmark={bookmark[info.stationName]}
            handleBookmark={handleBookmark}
          />
        );
      });
    } else {
      return null;
    }
  };

  useEffect(() => {
    console.log("bookmark changed", bookmark);
  }, [bookmark]);

  const onSelect = (s) => {
    const all = data.response.body.items;
    console.log("모두", all);
    const filtered = all.filter((item) =>
      item.sidoName.includes(s.target.value)
    );
    console.log("선택한 시도", s.target.value);
    setSido(s.target.value);
    setArea("");
  };

  const setFilter = (e) => {
    console.log(e.target.value);
    if (e.target.value === "전체") {
      setArea("");
    } else {
      setArea(e.target.value);
    }
  };

  return (
    <>
      {/* 선택 박스 */}
      <select onChange={onSelect}>
        {sidoMenus.map((sido, idx) => (
          <option key={idx}>{sido}</option>
        ))}
      </select>
      <select onChange={setFilter} value={area}>
        {places[sido] &&
          places[sido].children.map((gugun, idx) => (
            <option key={idx}>{gugun}</option>
          ))}
      </select>
      <div className="content">
        {sido !== "" ? (
          <div>{filterArea()}</div>
        ) : area !== "" ? (
          <div>{filterArea()}</div>
        ) : (
          <div>{viewAllArea()}</div>
        )}
        {/* {sido == "" || area == "" ? (
          <div>{viewAllArea()}</div>
        ) : (
          <div>{filterArea()}</div>
        )} */}
      </div>
    </>
  );
}
