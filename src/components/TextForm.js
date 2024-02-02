import React, {useState} from 'react'


export default function TextForm(props) {


    const handleUpClick = () =>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success")
    }
    const hadnleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
        
    }
    const handleLowClick = () => {
        // console.log("Lower case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success")
    }

    const handleColorClick = () => {
        document.getElementById('myBox').style.color = 'red';
        props.showAlert("Color has been changed", "success")
    }

    const handleNoColorClick = () =>{
        document.getElementById('myBox').style.color = 'black';
        props.showAlert("Back to default Color", "success")
    }

    // const handleSpeakClick = () => {
    //     let newText = new SpeechSynthesisUtterance();
    //     newText.text = text;
    //     window.SpeechSynthesis.handleSpeakClick(newText);
    // }

    const handleSpeakClick = () => {
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);
        props.showAlert("It is speaking ", "success")
    }

//Hooks (state)
    const [text, setText] = useState('')
    // setText("Please enter your text here");
    return (
        <>
    <div className='container'>
        <h1 className={`text-${props.altmode}`}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={hadnleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-dark mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-dark mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-danger mx-2" onClick={handleColorClick} >Color it Red</button>
        <button className="btn btn-dark mx-2" onClick={handleNoColorClick} >Color to Normal </button>
        <button className="btn btn-dark mx-2" onClick={handleSpeakClick} >Speak</button>
        

    </div>
    <div className={`container my-3 text-${props.altmode}`}>
        <h3>Text Summary</h3>
        <p>{text.split(" ").length - 1} words and {text.length} Character</p>
        <p>{0.008 * text.split(" ").length} time in minuites to read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text: 'Enter you text to preview'}</p>

    </div>
    </>
  )
}
