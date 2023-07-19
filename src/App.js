import React,{useState} from "react"
import './App.css';

function App() {
  const[cities,setcities]=useState([])
  const[cities1,setcities1]=useState("")
function show(){
  setcities([...cities,cities1])
  setcities1("")
}

  return (
    <>
    <div className="container">
      <input type="text" value={cities1} onChange={(e)=>setcities1(e.target.value)} placeholder="add city" />
  
    <button onClick={show}>Add</button>
    </div>
      {cities.map((item,index)=> (<ul>
        <li key="index">{item}</li>
      </ul>
      ))}
     
    </>
  );

}
export default App;
