import React,{useState} from 'react'
import "./index.css"

function Mode() {
     const [cname,setCname]=useState("white")



  return (
    <div className={cname} id='main'>
     <p> Mode Changer 
     </p>
     <button onClick={()=>setCname("red")} >red</button>
     <button onClick={()=>setCname("yellow")} >yellow</button>
     <button onClick={()=>setCname("pink")}>pink</button>
    </div>
  )
}

export default Mode