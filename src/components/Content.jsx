import data2 from "../data2";
import Bookmark from "./Bookmark";
import Card from "./Card";


const Content = () => {
  return (
    <section className="content">
      <div>
        {/* {(() => {})()} */}
        {data2.map(({ stationName, sidoName, pm10Grade, dataTime, pm10Value }) => {
          console.log(pm10Grade)
          return (
            <Card key={stationName} className="content-card">
              <div className="content-card-top">
                <div className="content-card-local">
                  <h2>{stationName}</h2>
                  <h4>_{sidoName}</h4>
                </div>
                <div className="content-card-bookmark">
                  <Bookmark />
                </div>
              </div>
              <div>
                {(function pm10GradeValue() {
                  if (pm10Grade == "1") {
                    return <h2 className="good">좋음</h2>;
                  } else if (pm10Grade == "2") {
                    return <h2 className="nomal">보통</h2>;
                  } else if (pm10Grade == "3") {
                    return <h2 className="onceBad">한 때 나쁨</h2>;
                  } else if (pm10Grade == "4") {
                    return <h2 className="bad">나쁨</h2>;
                  } else {
                    return <h2 className="veryBad">매우 나쁨</h2>;
                  }
                })()}
              </div>
              <h4>미세먼지 수치: {pm10Value}</h4>
              <h5>({dataTime} 기준)</h5>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Content;
