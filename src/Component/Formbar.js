import React, {useState} from 'react'
let hi = {
    backgroundColor : "black" 
}


export default function Formbar(props) {
    const uppercase = () => {
        let newText = text.toUpperCase();
          setText(newText);
          props.showAlert("Convertion to upper case is done" ,"secondary")}

          const lowercase = () => {
          let newText  = text.toLowerCase();
          setText(newText);
          props.showAlert("Convertion to lower case is done" ,"primary")
      }
     const handleonchange = (event) => {
         setText (event.target.value); 
    
     }
    const [text,setText] = useState (""); 
    return (
        <>
        <div className="container my-2">
        <h1>{props.heading}</h1>
        <div className="mb-3+6 my-3 style{hi}" > 
        <textarea className="form-control style{hi} " value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="6"></textarea><br/>
        </div>
        <button className="btn btn-primary mx-2" onClick={uppercase} > click on it for upper case</button>
        <button className="btn btn-primary mx-2" onClick={lowercase}>click on it for lower case</button>
        </div>
        <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} Characters</p>
        <p>{0.08 * text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
        </>
    )
}
