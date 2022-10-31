import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);
  const [enteredNameIsTouched, setEnteredNameTouched] = useState(false);
  const enteredNameOnChangeHandler = (event) => {
    if (name.trim() !== "") {
      setNameIsValid(true);
    }
    setName(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (name.trim() === "") {
      setNameIsValid(false);
    }
    setNameIsValid(true);
    console.log("STATE ", name);
  };

  const enteredNameBlurHandler = event => {
    setEnteredNameTouched(true);
    if (name.trim() === "") {
      setNameIsValid(false);
      return;
    }
    setNameIsValid(true);
  }

  const enteredNameIsInvalid = !nameIsValid && enteredNameIsTouched;
  const nameInputFormClass = enteredNameIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputFormClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={enteredNameOnChangeHandler}
          onBlur={enteredNameBlurHandler}
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
