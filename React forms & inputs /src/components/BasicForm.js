import useInput from "../hooks/useInput";

const BasicForm = (props) => {
  const {
    value: name,
    hasError: nameInputIsInvalid,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBLurHanlder: nameInputBlurHandler,
    reset: resetName,
  } = useInput((val) => {
    return val.trim() !== "";
  });

  const {
    value: lastName,
    hasError: lastNameInputIsInvalid,
    isValid: lastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    inputBLurHanlder: lastNameInputBlurHandler,
    reset: resetLastName,
  } = useInput((val) => val.trim() !== "");

  const {
    value: email,
    hasError: emailInputIsInvalid,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBLurHanlder: emailInputBlurHandler,
    reset: resetEmail,
  } = useInput((val) => {
    return val.includes("@");
  });

  let formIsValid = false;
  if (nameIsValid && emailIsValid && lastNameIsValid) {
    formIsValid = true;
  }

  const sumissionHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(`Name: ${name}, LastName: ${lastName}, Email: ${email}`);

    resetName();
    resetEmail();
    resetLastName();
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={sumissionHandler}>
      <div className="control-group">
        <div
          className={nameInputClasses}
        >
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameInputBlurHandler}
            value={name}
          />
          {nameInputIsInvalid && (
            <p className="error-text">Name must not be empty</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={lastNameChangeHandler}
            onBlur={lastNameInputBlurHandler}
            value={lastName}
          />
          {lastNameInputIsInvalid && (
            <p className="error-text">lastName must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
          value={email}
        />
        {emailInputIsInvalid && (
          <p className="error-text">email must contain @ sign</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
