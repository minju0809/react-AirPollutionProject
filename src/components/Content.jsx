import data2 from "../data2";
// import Bookmark from "./Bookmark";
import Card from "./Card";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import { useState, useEffect } from "react";

const Content = (props) => {
  const [bookmark, setBookmark] = useState({});

  const handleBookmark = (name, info) => {
    console.log("@@@@@", name, info);
    const prev_bookmark = localStorage.getItem("bookmark");
    if (!prev_bookmark) {
      // create first
      const temp = {
        [name]: info,
      };
      localStorage.setItem("bookmark", JSON.stringify(temp));
    } else {
      const data = JSON.parse(prev_bookmark);
      const exist = data[name];
      if (exist) {
        // delete
        delete data[name];
      } else {
        // create
        data[name] = info;
      }
      setBookmark(data);
      localStorage.setItem("bookmark", JSON.stringify(data));
    }

    console.log("localStorage", localStorage.getItem("bookmark"));
  };
  
  const filterArea = (area) => {
    const filtered = data2.filter((station) => station.stationName === area);
    console.log("filtered", filtered);
    if (filtered.length) {
      // return filtered.map(({ stationName, sidoName, pm10Grade, dataTime, pm10Value }) => {
      return filtered.map((info) => {
        // console.log(pm10Grade)
        return (
          <Card key={info.stationName} className={`content-card status${info.pm10Grade}`}>
            <div className="content-card-top">
              <div className="content-card-local">
                <h2>{info.stationName}</h2>
                <h4>_{info.sidoName}</h4>
              </div>
              <div className="content-card-bookmark" onClick={() => handleBookmark(info.stationName, info)}>
                {bookmark[info.stationName] ? <StarFilled className="icon"/> : <StarOutlined className="icon"/> }
              </div>
            </div>
            <div>
              <h2>
                {info.pm10Grade == "1" && "좋음"}
                {info.pm10Grade == "2" && "보통"}
                {info.pm10Grade == "3" && "한 때 나쁨"}
                {info.pm10Grade == "4" && "나쁨"}
                {info.pm10Grade == "5" && "매우 나쁨"}
              </h2>
            </div>
            <h4>미세먼지 수치: {info.pm10Value}</h4>
            <h5>({info.dataTime} 기준)</h5>
          </Card>
        );
      });
    } else {
      return null;
    }
  };

  useEffect(() => {
    console.log("component mount");
    const bookmarkData = localStorage.getItem("bookmark");
    if (bookmarkData) setBookmark(JSON.parse(bookmarkData));
  }, []);
  
  useEffect(() => {
    console.log("bookmark changed", bookmark);
  }, [bookmark]);

  return (
    <section className="content">
      {filterArea(props.area)}
    </section>
  );
};

export default Content;
