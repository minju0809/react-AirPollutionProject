import React, { useEffect, useState } from "react";
import Content from "../components/Content";

export default function BookmarkArea({ bookmark }) {
  console.log(bookmark);
  useEffect(() => {
    console.log("bookmark changed", bookmark);
  }, [bookmark]);
  return (
    <>
      안나오네. 코드 실행이 안됨.
      {bookmark.length > 0 && bookmark.map((b, idx) => <div key={idx}>{b.stationName}</div>)}
    </>
  );
}
