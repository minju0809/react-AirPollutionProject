import data2 from "../data2";

const SelectBox = (props) => {
  const handleChange = (e) => {
    props.changeArea(e.target.value);
    console.log("handleChange", e.target.value);
  };

  return (
    <select defaultValue={props.defaultValue} onChange={handleChange}>
      {data2.map((option, index) => (
        <option key={index} value={option.stationName === "전체" ? "" : option.stationName}>
          {option.stationName}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
