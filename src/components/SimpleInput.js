import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

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

  if (enteredNameIsValid && emailInputIsInvalid) {
    formIsValid = false;
  }



  const enteredEmailOnChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const enteredEmailBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredEmailTouched(true);
    resetNameInput();
    if (!emailIsValid) {
      return;
    }
    setEmail("");
    setEnteredEmailTouched(false);
    console.log("Name :", enteredName, "email :", email);
  };

  const nameInputFormClass = nameInputHasError
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
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
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
      {nameInputHasError && (
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
