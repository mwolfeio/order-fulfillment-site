const Input = (props) => {
  const handleChange = (e) => {
    let input = e.target.value;
    console.log(input);
    props.func(input);
  };
  return (
    <div className="Auth-input">
      <input
        onChange={handleChange}
        type={props.type}
        id={props.type}
        name={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};
export default Input;
