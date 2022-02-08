import data from "../data/data";

function handleChange() {
  alert("Hello React Event");
};

function handleChangeTwo() {
  alert('To learn React use https://reactjs.org');
  alert("React and ReactDOM works together");
  alert("Babel helps in writing JSX");
};

function Buttons() {
  return (
    <>
      <Button />
      {data.map((elm) => (
        <Fruits key={elm.id} {...elm} />
      ))}
    </>
  );
}

function Fruits(props) {
  return (
    <>
      <button onClick={() => alert(`${props.value}`)}>{props.value}</button>
    </>
  );
}


function Button() {
  let names = ["Arya", "John", "Bran"];
  return (
    <>
      <button onClick={handleChange}>Click Me</button>
      <button onClick={handleChangeTwo}>How can I help you?</button>
      {names.map((name) => {
        return (
          <button key={name} onClick={() => alert(`Hello ${name}`)} >
            {name}
          </button>
        );
      })}
    </>
  );
}

export default Buttons;