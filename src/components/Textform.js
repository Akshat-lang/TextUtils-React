import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(" Convert to Uppercase!", "success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert(" Convert to Lowercase!", "success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const Reverse = () => {
        let spl = text.split(" ")
        let rev = spl.reverse();
        let join = rev.join(" ");
        setText(join)
        props.showAlert(" Your Text is reversed", "success")

    }
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange}
                        style={{ backgroundColor: props.mode === 'light' ? 'white' : '#032845', color: props.mode === 'light' ? 'black' : 'white' }}
                        id="myBox" rows="8" placeholder='Enter Your Text here'></textarea>
                    <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to UpperCase</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={Reverse}>Reverse Text</button>
                    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
                </div>
            </div>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#032845' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter Something above in the Textbox to Preview Here"}</p>
            </div>
        </>
    )
}
