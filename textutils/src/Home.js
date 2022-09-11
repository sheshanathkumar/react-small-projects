import React, { useState } from "react";

import validator from "validator";

export default function Home(props) {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [validEmail, setValidEmail] = useState(false);

  const currentColor = props.color;

  console.log(props);

  const handleOnChange = (e) => {
    setText(e.target.value);
    setWordCount(countWord);
    setLetterCount(countLetter);
  };

  const darkMode = {
    height: "100vh",
    backgroundColor: "#000000d6",
    color: "White",
  };

  const lightMode = {
    height: "100vh",
    backgroundColor: "white",
    color: "Black",
  };

  const getCurrentColorScheme = () => {
    if (currentColor === "dark") {
      return darkMode;
    } else {
      return lightMode;
    }
  };

  const handleOnClickUpperCase = () => {
    let textVal = text.toUpperCase();
    setText(textVal);
  };

  const handleOnClickLowerCase = () => {
    let textVal = text.toLowerCase();
    setText(textVal);
  };

  const countWord = () => {
    const arr = text.split(" ");
    return arr.filter((w) => w !== "").length;
  };

  const countLetter = () => {
    return text.length;
  };

  const handleOnClickClearText = () => {
    setText("");
    setWordCount(0);
    setLetterCount(0);
  };

  const verifyEmail = () => {
    console.log(text + " " + validator.isEmail(text));
    if (validator.isEmail(text) === true) {
      setValidEmail(true);
      setText(text + " = " + validator.isEmail(text));
    } else {
      setValidEmail(false);
      setText(text + " = " + validator.isEmail(text));
    }
  };

  return (
    <div style={currentColor === "dark" ? darkMode : lightMode}>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="input-text" className="form-label my-3">
            <h3>Enter your Text here!</h3>
          </label>
          <textarea
            className="form-control"
            id="inputText"
            rows="10"
            value={text}
            onChange={handleOnChange}
            style={
              currentColor === "dark"
                ? { background: "#000000d6", color: "white" }
                : { background: "white", color: "black" }
            }
          ></textarea>
          <div className="gap-2 col-6 my-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleOnClickUpperCase}
            >
              Upper Case
            </button>

            <button
              type="button"
              className="btn btn-primary mx-3"
              onClick={handleOnClickLowerCase}
            >
              Lower Case
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick={verifyEmail}
            >
              Check Email is Valid
            </button>

            <button
              type="button"
              className="btn btn-secondary mx-3"
              onClick={handleOnClickClearText}
            >
              Clear Text
            </button>
          </div>

          <div className="container my-3">
            <h3>Text Summary</h3>
            <p>word count = {wordCount}</p>
            <p>letter count = {letterCount} </p>

            <h3>Preview</h3>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
