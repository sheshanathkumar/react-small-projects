import "./App.css";
import Navbar from "./Navbar";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [letterCount, setLetterCount] = useState(0);

  const handleOnChange = (e) => {
    setText(e.target.value);
    setWordCount(countWord);
    setLetterCount(countLetter);
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

  return (
    <>
      <Navbar name="Text-Utils" />
      <div className="container">
        <div class="mb-3">
          <label for="input-text" class="form-label my-3">
            <h3>Enter your Text here</h3>
          </label>
          <textarea
            class="form-control"
            id="inputText"
            rows="10"
            value={text}
            onChange={handleOnChange}
          ></textarea>
          <button
            type="button"
            class="btn btn-primary my-3"
            onClick={handleOnClickUpperCase}
          >
            Upper Case
          </button>

          <button
            type="button"
            class="btn btn-primary my-3 mx-4"
            onClick={handleOnClickLowerCase}
          >
            Lower Case
          </button>

          <div className="container my-3">
            <h3>Text Summary</h3>
            <p>word count = {wordCount}</p>
            <p>letter count = {letterCount} </p>

            <h3>Whole Text</h3>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
