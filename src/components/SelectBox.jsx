const SelectBox = (props) => {
  const handleChange = (e) => {
    console.log(e.target.value);
  }

  return (
    <select onChange={handleChange}>
      {props.options.map((option, index) => (
        <option key={index} value={option.value} defaultValue={props.defaultValue === option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
