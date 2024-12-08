import React,{useState} from 'react'
import "./index.css"

function App() {
 
    const [bgcolor,setBgcolor]=useState("white")
    const [color,setColor]=useState("black")
    const [txt,setTxt]=useState("bright")
    function handleTheme(){
      if (bgcolor=="white"){
        setBgcolor("black")
        setColor("white")
        setTxt("Bright")
      }else{  
  
        setBgcolor("white")
        setColor("black")
        setTxt("Dark")
  
      }
    }
    return (
      <div className="App" style={{ backgroundColor: bgcolor, color: color }}>
        <h1>Hello students</h1>
        <button onClick={handleTheme}>{txt}</button>
        
      </div>
    );
  }





 

export default App
