import React, {useState}from 'react'


export default function Textform(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = ()=>{
    // console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleClearClick = ()=>{
    // console.log("Text Cleared");
    let newText = ""
    setText(newText);
  }

  const handleCopy = () =>{
    // console.log(text copied);
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  }


  const [text, setText] = useState('');

  return (
    <>
      <div className="container">
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange}  id="myBox" rows="8" placeholder='Enter text here...'></textarea>
          </div>
          <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
          <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
          <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
          <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
          <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extraspaces</button>
      </div>
      <div className="container my-2">
          <h2>Your text summary</h2>
          <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
          <p> It will take (approximatley)  <b>{0.008 * text.split("").length}</b>  minutes to read</p>
          <h3>Preview</h3>
          <p>{text}</p>
      </div>
    </>
  )
}
