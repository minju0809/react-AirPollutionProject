import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

const Content = ({ info, isBookmark, handleBookmark }) => {
  const weather = {
    1: "좋음",
    2: "보통",
    3: "한 때 나쁨",
    4: "나쁨",
    5: "매우 나쁨",
  };

  return (
    <div
      key={info.stationName}
      className={`content-card status${info.pm10Grade}`}
    >
      <div className="content-card-top">
        <div className="content-card-local">
          <h2>{info.stationName}</h2>
          <h4>_{info.sidoName}</h4>
        </div>
        <div
          className="content-card-bookmark"
          onClick={() => handleBookmark(info.stationName, info)}
        >
          {isBookmark ? (
            <StarIcon className="icon" />
          ) : (
            <StarBorderIcon className="icon" />
          )}
        </div>
      </div>
      <div>
        <h2>{weather[info.pm10Grade]}</h2>
      </div>
      <h4>미세먼지 수치: {info.pm10Value}</h4>
      <h5>({info.dataTime} 기준)</h5>
    </div>
  );
};

export default Content;
