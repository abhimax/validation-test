import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);
  const [enteredNameIsTouched, setEnteredNameTouched] = useState(false);
  const nameRef = useRef();
  const handleOnChangeName = (event) => {
    setName(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (name.trim() === "") {
      setNameIsValid(false);
      return;
    }
    setNameIsValid(true);
    console.log("STATE ", name);
    console.log("REF ", nameRef.current.value);
  };

  const enteredNameIsInvalid = !nameIsValid && enteredNameIsTouched;
  const nameInputFormClass = enteredNameIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={handleOnSubmit}>
      <div className={nameInputFormClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={nameRef}
          onChange={handleOnChangeName}
        />
      </div>
      {enteredNameIsInvalid && (
        <p className="error-text">Entered name is invalid!</p>
      )}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
