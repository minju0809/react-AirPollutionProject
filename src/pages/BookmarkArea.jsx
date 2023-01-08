import React, { useEffect, useState } from "react";
import Content from "../components/Content";

export default function BookmarkArea({ bookmark, handleBookmark }) {
  console.log(bookmark);
  useEffect(() => {
    console.log("bookmark changed", bookmark);
  }, [bookmark]);
  return (
    <>
      {Object.values(bookmark).length > 0 &&
        Object.values(bookmark).map((area, idx) => (
          <Content
            key={idx}
            info={area}
            isBookmark={bookmark[area.stationName]}
            handleBookmark={handleBookmark}
          />
        ))}
    </>
  );
}
