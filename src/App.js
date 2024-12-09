import React,{useState} from 'react'

function App() {
  const[jokee,setJokee]=useState("")
 async function handleJoke(){
   let data=await fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single");
   let jokyy=await data.json()
   setJokee(jokyy)
  }
  return (
    <div>
   <h1>{jokee.joke}</h1>
      <button onClick={handleJoke}>GenerateJoke</button>
    </div>
  )
}

export default App