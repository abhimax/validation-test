import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameIsTouched, setEnteredNameTouched] = useState(false);
  const nameIsValid = name.trim() !== "";
  const nameInputIsInvalid = !nameIsValid && nameIsTouched;

  const enteredNameOnChangeHandler = (event) => {
    setName(event.target.value);
  };

  const enteredNameBlurHandler = event => {
    setEnteredNameTouched(true);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (!nameIsValid) {
      return;
    }
    setName('');
    setEnteredNameTouched(false);
    console.log("STATE ", name);
  };

  const nameInputFormClass = nameInputIsInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputFormClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={enteredNameOnChangeHandler}
          onBlur={enteredNameBlurHandler}
          value={name}
        />
      </div>
      {nameInputIsInvalid && (
        <p className="error-text">Entered name is invalid!</p>
      )}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
