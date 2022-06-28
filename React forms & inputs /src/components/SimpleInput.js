import useInput from "../hooks/useInput";

const SimpleInput = () => {
  const {
    value: name,
    hasError: nameInputIsInvalid,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBLurHanlder: nameInputBlurHandler,
    reset: resetName,
  } = useInput(val => val.trim() !== "");

  const {
    value: email,
    hasError: emailInputIsInvalid,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBLurHanlder: emailInputBlurHandler,
    reset: resetEmail
  } = useInput(val => val.trim().includes('@'))

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!nameIsValid || !emailIsValid) {
      return;
    }

    console.log(`Name: ${name}, Email: ${email}`);
    
    resetName()
    resetEmail()
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className={nameInputClasses}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameInputBlurHandler}
            value={name}
            placeholder="enter name"
            onFocus={(e) => (e.target.placeholder = "")}
          />
          {nameInputIsInvalid && (
            <p className="error-text">Name must not be empty</p>
          )}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="emai;"
            onChange={emailChangeHandler}
            onBlur={emailInputBlurHandler}
            value={email}
            placeholder="enter email"
            onFocus={(e) => (e.target.placeholder = "")}
          />
          {emailInputIsInvalid && (
            <p className="error-text">Email must contain @ sign</p>
          )}
        </div>
        <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    </>
  );
};

export default SimpleInput;
