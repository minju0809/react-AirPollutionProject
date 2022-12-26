import React from "react";
import Content from "../components/Content";
import data from "../data.json";

export default function MyArea({ bookmark, handleBookmark }) {
  const area = "양천구";
  const items = data.response.body.items;
  const myArea = items.filter((item) => item.stationName === area);

  console.log(myArea);
  return (
    <div className="content">
      {myArea.map((area, idx) => (
        <Content
          key={idx}
          info={area}
          isBookmark={bookmark[area.stationName]}
          handleBookmark={handleBookmark}
        />
      ))}
    </div>
  );
}
