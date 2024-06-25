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
        <form onSubmit={handleFormSubmit}>
        <input
            value={name}
            name="name"
            onChange={handleInputChange}
            onBlur={handleClickAway}
            type="text"
            placeholder="name"
        />
        <input
            value={email}
            name="email"
            onChange={handleInputChange}
            onBlur={handleClickAway}
            type="text"
            placeholder="email"
        />
        <input
            value={message}
            name="message"
            onChange={handleInputChange}
            onBlur={handleClickAway}
            type="text"
            placeholder="message"
        />
        <button type="submit">Submit</button>
        </form>
        {errorMessage && (
            <p>{errorMessage}</p>
        )}
    </>
  );
}

export default Form;
