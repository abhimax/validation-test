import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameIsTouched, setEnteredNameTouched] = useState(false);
  const nameIsValid = name.trim() !== "";
  const nameInputIsInvalid = !nameIsValid && nameIsTouched;

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const [email, setEmail] = useState("");
  const [emailIsTouched, setEnteredEmailTouched] = useState(false);
  const emailIsValid = validateEmail(email);
  const emailInputIsInvalid = !emailIsValid && emailIsTouched;

  let formIsValid = true;

  if (nameInputIsInvalid && emailInputIsInvalid) {
    formIsValid = false;
  }

  const enteredNameOnChangeHandler = (event) => {
    setName(event.target.value);
  };

  const enteredNameBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const enteredEmailOnChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const enteredEmailBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    if (!nameIsValid) {
      return;
    }
    setName("");
    if (!emailIsValid) {
      return;
    }
    setEmail("");
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
    console.log("Name :", name, "email :", email);
  };

  const nameInputFormClass = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  const emailInputFormClass = emailInputIsInvalid
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
          value={name}
        />
      </div>
      <div className={emailInputFormClass}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={enteredEmailOnChangeHandler}
          onBlur={enteredEmailBlurHandler}
          value={email}
        />
      </div>
      {nameInputIsInvalid && (
        <p className="error-text">Entered name is invalid!</p>
      )}
      {emailInputIsInvalid && (
        <p className="error-text">Entered email is invalid!</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
