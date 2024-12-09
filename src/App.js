import React, { useState }  from 'react'

function App() {
  
  const [data,setData]=useState({

   name:"",
   email:"",
   password:""





  })
  const[condition,setCondition]=useState(false)
  function handleSubmit(e){
    e.preventDefault()
    setCondition(true)
  }
  
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Enter Name' value={data.name} onChange={(e)=>setData((prev)=>({...prev ,name:e.target.value}))}/><br></br>
      <input type='email' placeholder='Enter Email'value={data.email} onChange={(e)=>setData((prev)=>({...prev,email:e.target.value}))}/><br></br>
      <input type='password' placeholder='Enter Password'value={data.password} onChange={(e)=>setData((prev)=>({...prev,password:e.target.value}))}/><br></br>
      <input type='Submit' value="Submit"/><br></br>
      {condition?<h1>my name is{data.name} email is{data.email}</h1>:"plz submit"}
      </form>
    </div>
  )
}

export default App
