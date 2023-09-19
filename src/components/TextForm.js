import React, { useState } from "react";
export default function TextForm(props) {
  document.title = "Word Wiz - Home";
  const handleUpClick = () => {
    console.log("uppercase clicked");
    setText(text.toUpperCase());
  };
  const handleLoClick = () => {
    console.log("lowercase clicked");
    setText(text.toLowerCase());
  };
  const handleClear = () => {
    console.log("clear clicked");
    setText("");
    props.showAlert("Text Cleared", "success");
  };
  const handleExtraSpaces = () => {
    console.log("RES clicked");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };
  const handleCopy = () => {
    console.log("copy clicked");
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success");
  };
  const handleOnChange = (e) => {
    console.log("on change");
    setText(e.target.value);
  };

  let [text, setText] = useState("");
  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            style={{
              backgroundColor: props.mode === "dark" ? "#04134a" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            rows="8"
            placeholder="Enter the Text here..."
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary m-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary m-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary m-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary m-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary m-1"
          onClick={handleClear}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((e) => {
              return e.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((e) => {
              return e.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <br />
        <h2>Preview</h2>
        <p>{text.length <= 0 ? "Nothing to preview...!!" : text}</p>
      </div>
    </>
  );
}
