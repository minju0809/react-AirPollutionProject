import data2 from "../data2";
import Card from "./Card";

const Content = () => {

  return (
    <section className="content">
      <div>
        {data2.map(({ stationName, sidoName, pm10Grade, dataTime, pm10Value }) => {
          return (
            <Card key={stationName} className="content-card">
              <h3>{stationName}</h3>
              <h3>{sidoName}</h3>
              <h3>{pm10Grade}</h3>
              <h3>{pm10Value}</h3>
              <h3>{dataTime}</h3>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Content;
