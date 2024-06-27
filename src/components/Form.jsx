import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleClickAway = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!inputValue) {
        setErrorMessage("This field cannot be left blank");
        return;
    } else if (inputType === "email" && !emailRegex.test(email)) {
        setErrorMessage("Please enter a valid email address");
    } else {
        setErrorMessage(null);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setErrorMessage("Please fill out the entire form before submitting");
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className="form-group" id="contact-form">
        <div className="mb-3">
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            onBlur={handleClickAway}
            type="text"
            placeholder="name"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            onBlur={handleClickAway}
            type="text"
            placeholder="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            onBlur={handleClickAway}
            type="text"
            placeholder="message"
            className="form-control"
          />
        </div>
        <button type="submit" id="form-btn" className="btn btn-primary">Submit</button>
      </form>
      {errorMessage && (
        <p className="text-danger">{errorMessage}</p>
      )}
    </>
  );
}

export default Form;
